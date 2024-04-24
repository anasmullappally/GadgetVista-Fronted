import { useState } from 'react';
import ProductBase from '../components/admin/ProductBase';
import ProductDetailed from '../components/admin/ProductDetailed';
import tinycolor from 'tinycolor2';

function AddProduct() {
    const [data, setData] = useState({
        name: "",
        category: "",
        brand: "",
        description: "",
        accessories: "",
        warrantyInfo: "",
    })

    const [variants, setVariants] = useState([
        {
            key: Date.now(),
            ram: '',
            rom: "",
            mrp: "",
            price: "",
            shippingCharge: "",
            quantity: "",
            colors: [{ color: "", colorCode: "" }]
        }
    ]);
    // Function to handle adding a new set of variant input

    const [images, setImages] = useState([
        { image: null, key: 1 },
        { image: null, key: 2 },
        { image: null, key: 3 },
        { image: null, key: 4 }
    ]);

    //error states
    const [colorError, setColorError] = useState({})
    const [variantError, setVariantError] = useState({})
    const [formDataError, setFormDataError] = useState({})

    const updateImages = (updatedImages) => {
        setImages(updatedImages);
    };
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

    const addVariants = async () => {
        let isValid = true
        for (const item of variants) {
            isValid = await variantValidation(item)
            if (!isValid) {
                break;
            }
        }

        if (isValid) {
            setVariants([...variants, {
                key: Date.now(),
                ram: '',
                rom: "",
                mrp: "",
                price: "",
                shippingCharge: 0,
                quantity: "",
                colors: [{ color: "", colorCode: "" }]
            }]);
        }
    };

    // Function to handle remove an variant
    const removeVariant = (variantKey) => {
        setVariants(variants.filter((item) => item.key !== variantKey));
    };

    const addColorError = ({ index, message, variant }) => {
        setColorError(prevState => ({
            ...prevState,
            [variant]: { message, index }
        }));
    };

    const addVariantError = ({ message, variant, label }) => {
        setVariantError(prevState => ({
            ...prevState,
            [variant]: { message, label }
        }));
    };


    const removeColorError = (keyToRemove) => {
        setColorError(prevState => {
            // eslint-disable-next-line no-unused-vars
            const { [keyToRemove]: removedError, ...updatedErrors } = prevState;
            return updatedErrors;
        });
    };

    const removeVariantError = (keyToRemove) => {
        setVariantError(prevState => {
            // eslint-disable-next-line no-unused-vars
            const { [keyToRemove]: removedError, ...updatedErrors } = prevState;
            return updatedErrors;
        });
    };


    const colorValidation = (colorInputs, variant) => {
        let isValid = true;
        colorInputs.forEach((item, index) => {
            const { color, colorCode } = item;
            if (!tinycolor(colorCode).isValid()) {
                addColorError({ index, message: "Color code is not valid", variant });
                isValid = false;
            }
            if (!colorCode) {
                addColorError({ index, message: "Add the code of the color", variant });
                isValid = false;
            }
            if (!color) {
                addColorError({ index, message: "Add Color", variant });
                isValid = false;
            }
            if (!color && !colorCode) {
                addColorError({ index, message: "Fill the color details", variant });
                isValid = false;
            }
        });
        return isValid;
    };


    const variantValidation = async (variant) => {
        let isValid = true
        const { key, ram, rom, price, mrp, quantity, shippingCharge, colors } = variant
        if (isNaN(shippingCharge)) {
            addVariantError({ variant: variant.key, message: "Field must be number", label: "shippingCharge" })
            isValid = false
        }
        if (!quantity) {
            addVariantError({ variant: variant.key, message: "Field is required", label: "quantity" })
            isValid = false
        }
        if (isNaN(quantity)) {
            addVariantError({ variant: variant.key, message: "Field must be number", label: "quantity" })
            isValid = false
        }
        if (price > mrp) {
            addVariantError({ variant: variant.key, message: "price must be less than mrp", label: "price" })
            isValid = false
        }
        if (!price) {
            addVariantError({ variant: variant.key, message: "Field is required", label: "price" })
            isValid = false
        }
        if (isNaN(price)) {
            addVariantError({ variant: variant.key, message: "Field must be number", label: "price" })
            isValid = false
        }
        if (!mrp) {
            addVariantError({ variant: variant.key, message: "Field is required", label: "mrp" })
            isValid = false
        }
        if (isNaN(mrp)) {
            addVariantError({ variant: variant.key, message: "Field must be number", label: "mrp" })
            isValid = false
        }
        if (!rom) {
            addVariantError({ variant: variant.key, message: "Field is required", label: "rom" })
            isValid = false
        }
        if (isNaN(rom)) {
            addVariantError({ variant: variant.key, message: "Field must be number", label: "rom" })
            isValid = false
        }
        if (!ram) {
            addVariantError({ variant: variant.key, message: "Field is required", label: "ram" })
            isValid = false
        }
        if (isNaN(ram)) {
            addVariantError({ variant: variant.key, message: "Field must be number", label: "ram" })
            isValid = false
        }
        // if (!shippingCharge) {
        //     addVariantError({ variant: variant.key, message: "Field is required", label: "shippingCharge" })
        //     isValid = false
        // }

        if (isValid) isValid = colorValidation(colors, key)

        return isValid
    }

    const handleSubmit = async () => {
        const newErrors = {};
        const { name, category, brand, description, accessories, warrantyInfo } = data
        if (!name) {
            newErrors.name = "Name is required";
        }
        if (!category) {
            newErrors.category = "Category is required";
        }
        if (!brand) {
            newErrors.brand = "Brand is required";
        }
        if (!description) {
            newErrors.description = "Description is required"
        }
        if (!accessories) {
            newErrors.accessories = "Accessors is required"
        }
        if (!warrantyInfo) {
            newErrors.warrantyInfo = "Warranty info is required"
        }
        console.log(newErrors);
        if (Object.keys(newErrors).length > 0) {
            // If there are errors, update the error state and return
            setFormDataError(newErrors);
            return;
        }
        let isValid = true
        for (const item of variants) {
            isValid = await variantValidation(item)
            console.log(isValid);
            if (!isValid) {
                break;
            }
        }
        if (!isValid) return

        const formData = {
            ...data,
            images,
            variants
        }
        console.log(formData);
        // submit form 

    }

    return (
        <div className="add-product">
            <div className="header">
                <div className="title">Add Product</div>
                <div className="back-to">
                    <button>Back To List</button>
                </div>
            </div>
            <div className="adding-container">
                <ProductBase
                    data={data} images={images}
                    updateImages={updateImages}
                    handleChange={handleChange}
                    formDataError={formDataError}
                />
                <ProductDetailed
                    colorError={colorError}
                    data={data}
                    handleChange={handleChange}
                    handleChangeDescription={handleChangeDescription}
                    addVariants={addVariants}
                    removeVariant={removeVariant}
                    variants={variants}
                    setVariants={setVariants}
                    colorValidation={colorValidation}
                    removeColorError={removeColorError}
                    variantError={variantError}
                    removeVariantError={removeVariantError}
                    handleSubmit={handleSubmit}
                    formDataError={formDataError}
                />
            </div>
        </div>
    )
}

export default AddProduct