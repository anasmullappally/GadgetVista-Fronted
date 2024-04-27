/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import ImageUpload from "./ImageUpload";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productAction";
import { addVariants } from "../../middleware/product";
import useActivateToast from "../alerts/useActivateToast";


function AddVariants() {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch()
  const { activateSneak } = useActivateToast();
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      // ['link', 'image', 'video'],
      // ['clean'],
      // [{ 'color': [] }, { 'background': [] }] // dropdown with defaults from theme
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet', 'indent',
  ];
  const [data, setData] = useState({
    ram: "",
    rom: "",
    mrp: "",
    price: "",
    description: "",
    color: "",
    colorCode: "",
    quantity: "",
    selectedProduct: null
  })
  const [images, setImages] = useState([
    { preview: '', data: '', key: 1 },
    { preview: '', data: '', key: 2 },
    { preview: '', data: '', key: 3 },
    { preview: '', data: '', key: 4 }
  ]);
  const [formDataError, setFormDataError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setFormDataError(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleChangeDescription = (value) => {
    if (formDataError?.description) {
      setFormDataError(prevErrors => ({
        ...prevErrors,
        description: ""
      }));
    }
    setData(prevData => ({
      ...prevData,
      description: value
    }));
  };

  const updateImages = (key, file) => {
    setImages((prevImages) => {
      return prevImages.map((item) => {
        if (item.key === key) {
          return { ...item, data: file, preview: URL.createObjectURL(file), };
        }
        return item;
      });
    });
  };


  const handleSelect = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedProduct = products[selectedIndex - 1]; // Subtract 1 to account for the placeholder option
    setData({ ...data, selectedProduct });
    if (formDataError.selectedProduct) {
      setFormDataError(prevErrors => ({
        ...prevErrors,
        selectedProduct: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    const { ram, rom, price, mrp, quantity, color, colorCode, description, selectedProduct } = data

    if (!selectedProduct) {
      newErrors.selectedProduct = "Please select a Product"
    }
    if (!description) {
      newErrors.description = "Description is required"
    }
    if (!quantity) {
      newErrors.quantity = "Field is required"
    }
    if (isNaN(quantity)) {
      newErrors.quantity = "Field must be number"
    }

    if (!price) {
      newErrors.price = "Field is required"
    }
    if (isNaN(price)) {
      newErrors.price = "Field must be number"
    }
    if (!mrp) {
      newErrors.mrp = "Field is required"
    }
    if (isNaN(mrp)) {
      newErrors.mrp = "Field must be number"
    }
    if (Number(price) > Number(mrp)) {
      newErrors.price = "price must be less than mrp"
    }
    if (!rom) {
      newErrors.rom = "Field is required"
    }
    if (isNaN(rom)) {
      newErrors.rom = "Field must be number"
    }
    if (!ram) {
      newErrors.ram = "Field is required"
    }
    if (isNaN(ram)) {
      newErrors.ram = "Field must be number"
    }

    if (!color) {
      newErrors.color = "Field  is required"
    }
    if (!colorCode) {
      newErrors.colorCode = "Field  is required"
    }
    if (images.filter((item) => item.image === null).length > 0) {
      newErrors.images = "4 Images Required"
    }
    if (Object.keys(newErrors).length > 0) {
      setFormDataError(newErrors)
      return
    }
    const formData = new FormData();
    images.forEach((item) => {
      formData.append("images", item.data)
    })
    Object.entries(data).forEach(([key, value]) => {
      if (key === "selectedProduct") {
        formData.append(key, value._id);
      } else {
        formData.append(key, value);
      }
    });

    await addVariants(formData).then((res) => {
      activateSneak(res.data.message, "success")
      setData({
        ram: "",
        rom: "",
        mrp: "",
        price: "",
        description: "",
        color: "",
        colorCode: "",
        quantity: "",
        selectedProduct: null
      })
      setImages([
        { preview: '', data: '', key: 1 },
        { preview: '', data: '', key: 2 },
        { preview: '', data: '', key: 3 },
        { preview: '', data: '', key: 4 }
      ])
      setFormDataError({})
    }).catch((err) => {
      activateSneak(err.data.message, "error")

    })
  }

  useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className="add-variant w-full h-full flex flex-col md:flex-row justify-center gap-2 overflow-auto">
        <div className="base-info w-full md:w-1/2 rounded-md border border-gray-400 ">

          <div className="w-11/12 ml-5 mt-5">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select A Product</label>
            <select id="countries" name="selectedProduct" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue={""} value="">Choose a product</option>
              {products.map((item, index) => (
                <option key={index} value={item._id}>{`${item.name} (${item.brand.name})`}</option>
              ))}
            </select>
            {formDataError?.selectedProduct && <p className="text-sm text-red-600 dark:text-red-500">{formDataError?.selectedProduct}</p>}
          </div>

          <div className="w-11/12 ml-5 mt-5">
            <div className="flex text-center w-11/12 justify-start">
              <p className="mr-5">Selected Product: </p>
              {data?.selectedProduct && <p>{`${data?.selectedProduct?.name}  (${data?.selectedProduct?.brand.name})`}</p>}
            </div>
          </div>
          <div className="w-11/12 ml-5 mt-3">
            <div className="flex text-center w-11/12 justify-start">
              <p className="mr-5">Warranty Info: </p>
              <p>{data?.selectedProduct?.warrantyInfo}</p>
            </div>
          </div>
          <div className="images-container ml-5  mt-5 mb-5 w-11/12">
            {images.map((item) => (
              <ImageUpload key={item.key} data={item} updateImages={updateImages} />
            ))}
            {formDataError?.images && <p className="text-sm text-red-600 dark:text-red-500">{formDataError?.images}</p>}
          </div>

        </div>
        <div className="product-details-container w-full md:w-1/2 rounded-md border border-gray-400 ">
          <div className="description">
            <div className="title">Description</div>
            <ReactQuill
              theme="snow"
              className="mb-15"
              value={data.description}
              onChange={handleChangeDescription}
              modules={modules}
              formats={formats}
              placeholder="Product Description"
            />
          </div>
          {formDataError?.description && <p className="text-sm text-red-600 dark:text-red-500">{formDataError?.description}</p>}
          <div className="w-11/12 ml-5 mt-5 flex justify-between flex-wrap">
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1">RAM</label>
              <input name="ram" onChange={handleChange} placeholder="Enter ram" type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.ram && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.ram}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">ROM</label>
              <input name="rom" onChange={handleChange} type="number" placeholder="Enter Rom" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.rom && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.rom}</p>}

            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1">MRP</label>
              <input name="mrp" onChange={handleChange} type="number" placeholder="Enter mrp" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.mrp && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.mrp}</p>}

            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Price</label>
              <input placeholder="Enter Variant Price" name="price" onChange={handleChange} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.price && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.price}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Color Name</label>
              <input placeholder="Enter color name" name="color" onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.color && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.color}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Color code</label>
              <input placeholder="Enter color code" name="colorCode" onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.colorCode && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.colorCode}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Quantity</label>
              <input placeholder="Enter quantity" name="quantity" onChange={handleChange} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError?.quantity && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError?.quantity}</p>}
            </div>
          </div>
          <div className="product-add-btn add-btn flex justify-center mt-5" >
            <button type="button" className="button" onClick={handleSubmit} >
              <span className="button__text">Add Variant</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  className="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddVariants
