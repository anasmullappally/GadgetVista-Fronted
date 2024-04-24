/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import ImageUpload from "./ImageUpload";


function AddVariants() {

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
    { image: null, key: 1 },
    { image: null, key: 2 },
    { image: null, key: 3 },
    { image: null, key: 4 }
  ]);
  console.log(data);
  const [formDataError, setFormDataError] = useState({})
  const products = [
    {
      "name": "iPhone 12",
      "brand": "Apple",
      "accessories": "EarPods with Lightning Connector, USB-C to Lightning Cable, Documentation",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Galaxy S21",
      "brand": "Samsung",
      "accessories": "USB Type-C Cable, Ejection Pin, Quick Start Guide",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Pixel 5",
      "brand": "Google",
      "accessories": "18W USB-C Power Adapter, USB-C to USB-C Cable, Quick Start Guide",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "OnePlus 9",
      "brand": "OnePlus",
      "accessories": "Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Screen Protector, SIM Tray Ejector",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Mi 11",
      "brand": "Xiaomi",
      "accessories": "USB Type-C Cable, Power Adapter, SIM Eject Tool, Soft Case, User Guide, Warranty Card",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Mate 40 Pro",
      "brand": "Huawei",
      "accessories": "USB Type-C Cable, Power Adapter, Earphones, Protective Case, Quick Start Guide, Eject Tool, Warranty Card",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Xperia 1 III",
      "brand": "Sony",
      "accessories": "USB Type-C Cable, Power Adapter, User Guide, Warranty Card",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "ZenFone 8",
      "brand": "Asus",
      "accessories": "USB Type-C to Type-C Cable, Ejector Pin (SIM tray needle), USB Power Adapter (30W), Documentation (user guide, warranty card)",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Redmi Note 10 Pro",
      "brand": "Xiaomi",
      "accessories": "USB Type-C Cable, Power Adapter, SIM Eject Tool, Soft Case, User Guide, Warranty Card",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Galaxy A52",
      "brand": "Samsung",
      "accessories": "USB Type-C Cable, Ejection Pin, Quick Start Guide",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "iPhone SE",
      "brand": "Apple",
      "accessories": "EarPods with Lightning Connector, USB-C to Lightning Cable, Documentation",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Mi 11 Ultra",
      "brand": "Xiaomi",
      "accessories": "USB Type-C Cable, Power Adapter, SIM Eject Tool, Soft Case, User Guide, Warranty Card",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Pixel 4a",
      "brand": "Google",
      "accessories": "18W USB-C Power Adapter, USB-C to USB-C Cable, Quick Start Guide",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "OnePlus 8T",
      "brand": "OnePlus",
      "accessories": "Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Screen Protector, SIM Tray Ejector",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Galaxy Note 20",
      "brand": "Samsung",
      "accessories": "USB Type-C Cable, Ejection Pin, Quick Start Guide",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Mi 10T Pro",
      "brand": "Xiaomi",
      "accessories": "USB Type-C Cable, Power Adapter, SIM Eject Tool, Soft Case, User Guide, Warranty Card",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "iPhone 11",
      "brand": "Apple",
      "accessories": "EarPods with Lightning Connector, USB-C to Lightning Cable, Documentation",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "ZenFone 7 Pro",
      "brand": "Asus",
      "accessories": "USB Type-C to Type-C Cable, Ejector Pin (SIM tray needle), USB Power Adapter (30W), Documentation (user guide, warranty card)",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    },
    {
      "name": "Galaxy S20 FE",
      "brand": "Samsung",
      "accessories": "USB Type-C Cable, Ejection Pin, Quick Start Guide",
      "warrantyInfo": "1 year limited warranty",
      "shippingCharge": 0
    }
  ]

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
    setData(prevData => ({
      ...prevData,
      description: value
    }));
  };

  const variantValidation = async () => {
    let isValid = true
    const { ram, rom, price, mrp, quantity, color, colorCode } = data

    if (!quantity) {
      setFormDataError({ message: "Field is required", label: "quantity" })
      isValid = false
    }
    if (isNaN(quantity)) {
      setFormDataError({ message: "Field must be number", label: "quantity" })
      isValid = false
    }
    if (price > mrp) {
      setFormDataError({ message: "price must be less than mrp", label: "price" })
      isValid = false
    }
    if (!price) {
      setFormDataError({ message: "Field is required", label: "price" })
      isValid = false
    }
    if (isNaN(price)) {
      setFormDataError({ message: "Field must be number", label: "price" })
      isValid = false
    }
    if (!mrp) {
      setFormDataError({ message: "Field is required", label: "mrp" })
      isValid = false
    }
    if (isNaN(mrp)) {
      setFormDataError({ message: "Field must be number", label: "mrp" })
      isValid = false
    }
    if (!rom) {
      setFormDataError({ message: "Field is required", label: "rom" })
      isValid = false
    }
    if (isNaN(rom)) {
      setFormDataError({ message: "Field must be number", label: "rom" })
      isValid = false
    }
    if (!ram) {
      setFormDataError({ message: "Field is required", label: "ram" })
      isValid = false
    }
    if (isNaN(ram)) {
      setFormDataError({ message: "Field must be number", label: "ram" })
      isValid = false
    }

    if (!color) {
      setFormDataError({ message: "Field is required", label: "ram" })
      isValid = false
    }
    if (!colorCode) {
      setFormDataError({ message: "Field is required", label: "ram" })
      isValid = false
    }
    return isValid
  }

  const updateImages = (updatedImages) => {
    setImages(updatedImages);
  };

  const handleSelect = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedProduct = products[selectedIndex - 1]; // Subtract 1 to account for the placeholder option
    setData({ ...data, selectedProduct });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = await variantValidation()
    console.log(isValid);
  }
  return (
    <>
      <div className="add-variant w-full flex flex-col md:flex-row justify-center gap-2">
        <div className="base-info w-full md:w-1/2 rounded-md border border-gray-400 ">

          <div className="w-11/12 ml-5 mt-5">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select A Product</label>
            <select id="countries" name="selectedProduct" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled defaultValue={""} value="">Choose a product</option>
              {products.map((item, index) => (
                <option key={index} value={item}>{`${item.name} (${item.brand})`}</option>
              ))}
            </select>
          </div>

          <div className="w-11/12 ml-5 mt-5">
            <div className="flex text-center w-11/12 justify-center">
              <p className="mr-5">Selected Product: </p>
              {data?.selectedProduct && <p>{`${data?.selectedProduct?.name}  (${data?.selectedProduct?.brand})`}</p>}
            </div>
          </div>
          <div className="w-11/12 ml-5 mt-3">
            <div className="flex text-center w-11/12 justify-center">
              <p className="mr-5">Warranty Info: </p>
              <p>{data?.selectedProduct?.warrantyInfo}</p>
            </div>
          </div>
          <div className="images-container ml-5  mt-5 mb-5 w-11/12">
            {images.map((item) => (
              <ImageUpload key={item.key} data={item} updateImages={updateImages} />
            ))}
          </div>

        </div>
        <div className="product-details-container w-full md:w-1/2 rounded-md border border-gray-400 ">
          <div className="description">
            <div className="title">Description</div>
            <ReactQuill
              theme="snow"
              value={data.description}
              onChange={handleChangeDescription}
              modules={modules}
              formats={formats}

            />
          </div>
          <div className="w-11/12 ml-5 mt-5 flex justify-between flex-wrap">
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1">RAM</label>
              <input name="ram" onChange={handleChange} placeholder="Enter ram" type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "ram" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">ROM</label>
              <input name="rom" onChange={handleChange} type="number" placeholder="Enter Rom" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "rom" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}

            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1">MRP</label>
              <input name="mrp" onChange={handleChange} type="number" placeholder="Enter mrp" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "mrp" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}

            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Price</label>
              <input placeholder="Enter Variant Price" name="price" onChange={handleChange} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "price" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Color Name</label>
              <input placeholder="Enter color name" name="color" onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "price" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Price</label>
              <input placeholder="Enter color code" name="colorCode" onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "price" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}
            </div>
            <div className="mt-1 w-100">
              <label className="block mb-2 text-sm font-medium pl-1 ">Quantity</label>
              <input placeholder="Enter quantity" name="quantity" onChange={handleChange} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
              {formDataError.label === "quantity" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formDataError.message}</p>}

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
