import { useState } from 'react';
import ProductBase from '../components/admin/ProductBase';
import ProductDetailed from '../components/admin/ProductDetailed';

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
    console.log(variants);
    // Function to handle adding a new set of variant input

    const [images, setImages] = useState([
        { image: null, key: 1 },
        { image: null, key: 2 },
        { image: null, key: 3 },
        { image: null, key: 4 }
    ]);

    const updateImages = (updatedImages) => {
        setImages(updatedImages);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleChangeDescription = (value) => {
        setData(prevData => ({
            ...prevData,
            description: value
        }));
    };

    const addVariants = () => {
        setVariants([...variants, {
            key: Date.now(),
            ram: '',
            rom: "",
            mrp: "",
            price: "",
            shippingCharge: "",
            quantity: "",
            colors: [{ color: "", colorCode: "" }]
        }]);
    };

    // Function to handle remove an variant
    const removeVariant = (indexToRemove) => {
        setVariants(variants.filter((_, index) => index !== indexToRemove));
    };
    return (
        <div className="add-product">
            <div className="header">
                <div className="title">Add Product</div>
                <div className="back-to">
                    <button>Back To List</button>
                </div>
            </div>
            <div className="adding-container">
                <ProductBase data={data} images={images} updateImages={updateImages} handleChange={handleChange} />
                <ProductDetailed
                    data={data}
                    handleChange={handleChange}
                    handleChangeDescription={handleChangeDescription}
                    addVariants={addVariants}
                    removeVariant={removeVariant}
                    variants={variants}
                    setVariants={setVariants}
                />
            </div>
        </div>
    )
}

export default AddProduct