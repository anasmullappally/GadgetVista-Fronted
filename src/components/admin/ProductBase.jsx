/* eslint-disable react/prop-types */
import { useState } from "react"
import ImageUpload from "./ImageUpload"
import AddBrandModal from "./AddBrandModal"

function ProductBase({ data, images, updateImages, handleChange, formDataError }) {
    const [addBrandBtn, setAddBrandBtn] = useState(true)
    const brands = ["samsung", "Apple", "lg", "vivo", "oppo"]

    return (
        <>
            <div className="image-container">
                <div className="title">Base Information</div>
                <div className="base-info">
                    <div className="mt-6 pl-5 ">
                        <label className="block mb-2 text-sm font-medium ">Product Name</label>
                        <input name="name" value={data.name} onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {formDataError?.name && <p className="mt-2 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError.name}</p>}
                    </div>
                    <div className="brand-container mt-6 pl-5 " >
                        <label className="block mb-1 text-sm font-medium ">Brand</label>
                        {formDataError?.brand && <p className=" pl-1 text-sm text-red-600 dark:text-red-500">{formDataError?.brand}</p>}

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
                                        <option value={""}>Select Brand</option>
                                        {brands.map((item) => (
                                            <option className="uppercase" key={item} value={item}>{item}</option>
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
                    </div>

                    <div className="radio-buttons-container pl-5 mt-3">
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
                        {formDataError?.category && <p className="mt-2 pl-1 text-sm text-red-600 dark:text-red-500">{formDataError?.category}</p>}
                    </div>

                    <div className="images-container pl-5">
                        {images.map((item) => (
                            <ImageUpload key={item.key} data={item} updateImages={updateImages} />
                        ))}
                    </div>

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