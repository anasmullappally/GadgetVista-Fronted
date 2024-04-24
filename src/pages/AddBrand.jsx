import { useState } from "react";
import ProductBase from "../components/admin/ProductBase"

function AddBrand() {
    const [images, setImages] = useState([
        { image: null, key: 1 },
        { image: null, key: 2 },
        { image: null, key: 3 },
        { image: null, key: 4 }
    ]);
    const [data, setData] = useState({
        name: "",
        category: "",
        brand: "",
        description: "",
        accessories: "",
        warrantyInfo: "",
    })
    const updateImages = (updatedImages) => {
        setImages(updatedImages);
    };
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

    return (
        <div className="add-product">
            <div className="header">
                <div className="title">Add Product</div>
                <div className="back-to">
                    <button>Back To List</button>
                </div>
            </div>
            <ProductBase
                data={data} images={images}
                updateImages={updateImages}
                handleChange={handleChange}
                formDataError={formDataError}
            />
        </div>
    )
}

export default AddBrand