/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react"
import AddBrandModal from "./AddBrandModal"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/actions/productAction";
import CircleLoading from "../common/CircleLoading";

function ProductBase({ data, handleChange, formDataError, handleSubmit, loading }) {
    const [addBrandBtn, setAddBrandBtn] = useState(false)
    // const brands = ["samsung", "Apple", "lg", "vivo", "oppo"]
    const dispatch = useDispatch();

    const { brands } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(fetchBrands())
    }, [])




    return (
        <>
            <div className="product-container w-full h-full flex justify-center gap-2">
                <div className="base-info  w-1/2 rounded-md border border-gray-400 overflow-x-auto">
                    <div className="mt-4 pl-5">
                        <label className="block mb-2 text-sm font-medium ">Product Name</label>
                        <input name="name" value={data.name} onChange={handleChange} type="text" className="input bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {formDataError?.name && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError.name}</p>}
                    </div>
                    <div className="brand-container mt-4 pl-5 " >
                        <label className="block mb-1 text-sm font-medium ">Brand</label>

                        <div className="brand flex items-center justify-center">
                            <div className="select-brand">
                                <div
                                    className="relative group rounded-lg w-40 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 "
                                >
                                    <svg
                                        y="0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        width="100"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="xMidYMid meet"
                                        height="100"
                                        className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
                                    >
                                        <path
                                            strokeWidth="4"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fill="none"
                                            d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                                            className="svg-stroke-primary"
                                        ></path>
                                    </svg>
                                    <select
                                        className="appearance-none hover:placeholder-shown:bg-emerald-500 relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 text-sm font-bold rounded-lg  block w-full p-2.5"
                                        name="brand" value={data.brand} onChange={handleChange}
                                    >
                                        <option value={""} defaultValue={""}>Select Brand</option>
                                        {brands?.map((item) => (
                                            <option className="uppercase" key={item?._id} value={item?._id}>{item?.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="add-brand">
                                <button className="button" type="button" onClick={() => setAddBrandBtn((pre) => !pre)}>
                                    <span className="button__text" >Add New Brand</span>
                                    <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
                                </button>
                            </div>
                        </div>
                        {formDataError?.brand && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError?.brand}</p>}
                    </div>

                    <div className="radio-buttons-container pl-5 mt-4">
                        <label className="block mb-2 text-sm font-medium">Category</label>
                        <div className="radio-button">
                            <input
                                name="category"
                                id="radio2"
                                className="radio-button__input"
                                type="radio"
                                value="phone"
                                checked={data.category === "phone"}
                                onChange={handleChange}
                            />
                            <label htmlFor="radio2" className="radio-button__label">
                                <span className="radio-button__custom"></span>
                                Phone
                            </label>
                        </div>
                        <div className="radio-button">
                            <input
                                name="category"
                                id="radio1"
                                className="radio-button__input"
                                type="radio"
                                value="laptop"
                                checked={data.category === "laptop"}
                                onChange={handleChange}
                            />
                            <label htmlFor="radio1" className="radio-button__label">
                                <span className="radio-button__custom"></span>
                                Laptop
                            </label>
                        </div>
                        {/* <div className="radio-button">
                        <input
                            name="category"
                            id="radio3"
                            className="radio-button__input"
                            type="radio"
                            value="Remix"
                            checked={data.category === "Remix"}
                            onChange={handleChange}
                        />
                        <label htmlFor="radio3" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Remix
                        </label>
                    </div> */}
                        {formDataError?.category && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError?.category}</p>}
                    </div>

                    <div className="pl-5">
                        <label className="block mb-2 text-sm font-medium ">Accessories</label>
                        <input name="accessories" value={data.accessories} onChange={handleChange} type="text" className="input bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {formDataError?.accessories && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError.accessories}</p>}
                    </div>

                    <div className="mt-4 pl-5 ">
                        <label className="block mb-2 text-sm font-medium ">Warranty Info</label>
                        <input name="warrantyInfo" value={data.warrantyInfo} onChange={handleChange} type="text" className="input bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {formDataError?.warrantyInfo && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError.warrantyInfo}</p>}
                    </div>
                    <div className="flex justify-between ml-5 w-11/12">

                        <div className="mt-4 ">
                            <label className="block mb-2 text-sm font-medium ">Shipping Charge </label>
                            <input name="shippingCharge" value={data.shippingCharge} onChange={handleChange} type="number" className="input bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                            {formDataError?.shippingCharge && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError.shippingCharge}</p>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium ">Release Date</label>
                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input type="date" name="releaseDate" value={data.releaseDate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" placeholder="Select date" />
                            </div>
                            {formDataError?.releaseDate && <p className="mt-1 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError.releaseDate}</p>}
                        </div>
                    </div>
                    <div className="product-add-btn add-btn flex justify-center mt-5" >
                        <button type="button" disabled={loading} className={`button ${loading && "flex justify-center"}`} onClick={handleSubmit} >
                            {loading ? <CircleLoading /> : <>
                                <span className="button__text">Add Product</span>
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
                            </>}
                        </button>
                    </div>
                </div>
                <div className="base-info w-3/12 rounded-md border border-gray-400 overflow-x-auto pl-5">
                    <div className="pt-4 text-lg">Instructions</div>
                    <div className="line border-b border-gray-400 mt-1 mb-2 w-11/12"></div>
                    <ul className="pl-5 list-disc">
                        <li>Ins one </li>
                        <li>Ins one </li>
                        <li>Ins one </li>
                    </ul>
                </div>

            </div >
            {addBrandBtn && <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden"
            >
                <AddBrandModal setAddBrandBtn={setAddBrandBtn} brands={brands} />
            </div>}
        </>
    )
}

export default ProductBase