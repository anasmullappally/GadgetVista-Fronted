/* eslint-disable react/prop-types */

import { useState } from "react"
import useActivateToast from "../alerts/useActivateToast";

function AddBrandModal({ setAddBrandBtn, brands }) {
    const { activateSneak } = useActivateToast();
    const [newBrand, setNewBrand] = useState("")
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewBrand(value)
        if (error[name]) {
            setError({})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newBrand) {
            error.brand = "Brand name is required"
        }
        activateSneak("hello", "error");
    }
    return (
        <div className="relative p-4 max-w-md max-h-full w-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Add New Brand
                    </h3>
                    <button
                        type="button"
                        onClick={() => setAddBrandBtn((pre) => !pre)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1 7 7m0 0 6 6M7 7l6-6M7 7l-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-2 md:p-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Availed Brands</h4>
                    <div className="line"></div>
                    <div className="flex flex-wrap">
                        {brands.map((item, ind) => (
                            <div className="w-1/2 flex items-center" key={ind}>
                                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                <p className="uppercase">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <form className="p-2 md:p-3" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type brand name"
                                value={newBrand}
                                onChange={handleChange}
                            />
                            {error.brand && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.brand}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleSubmit}
                        >
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                            </svg>
                            Add new brand
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddBrandModal