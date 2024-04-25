import { useState } from "react";
import ProductBase from "../components/admin/ProductBase"
import moment from "moment";

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
        accessories: "",
        warrantyInfo: "",
        shippingCharge: "",
        releaseDate: ""
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

    const handleSubmit = async () => {
        const newErrors = {};
        const { name, category, brand, accessories, warrantyInfo, shippingCharge, releaseDate } = data
        if (!name) {
            newErrors.name = "Name is required";
        }
        if (!category) {
            newErrors.category = "Category is required";
        }
        if (!brand) {
            newErrors.brand = "Brand is required";
        }

        if (!accessories) {
            newErrors.accessories = "Accessors is required"
        }
        if (!warrantyInfo) {
            newErrors.warrantyInfo = "Warranty info is required"
        }
        if (shippingCharge) {
            if (shippingCharge > 100) {
                newErrors.shippingCharge = "Shipping charge must be less than or equal to 100"
            }
        }
        if (!releaseDate) {
            newErrors.releaseDate = "Release date is required"
        }
        if (releaseDate) {
            if (!moment(releaseDate).isAfter(moment())) {
                newErrors.releaseDate = "please select future date"
            }
        }
        if (Object.keys(newErrors).length > 0) {
            setFormDataError(newErrors);
            return;
        }

    }


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
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddBrand