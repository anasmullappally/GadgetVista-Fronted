import { useState } from "react";
import ProductBase from "../components/admin/ProductBase"
import moment from "moment";
import { addProduct } from "../middleware/product";
import useActivateToast from "../components/alerts/useActivateToast";

function AddBrand() {
    const { activateSneak } = useActivateToast();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        name: "",
        category: "",
        brand: "",
        accessories: "",
        warrantyInfo: "",
        shippingCharge: "",
        releaseDate: ""
    })

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
        setLoading(true)
        await addProduct(data).then((res) => {
            setData({
                name: "",
                category: "",
                brand: "",
                accessories: "",
                warrantyInfo: "",
                shippingCharge: "",
                releaseDate: ""
            })
            setFormDataError({})
            activateSneak(res?.data?.message, "success")
        }).catch((err) => {
            activateSneak(err?.data?.message, "error")
        }).finally(() => setLoading(false))
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
                data={data}
                handleChange={handleChange}
                formDataError={formDataError}
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </div>
    )
}

export default AddBrand