/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"


function AddProduct({ setAddProductModal }) {
    const navigate = useNavigate()
    return (
        <div className="relative p-4 max-w-[600px] max-h-full w-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-center text-center  p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Add New Brand
                    </h3>
                    <button
                        type="button"
                        onClick={() => setAddProductModal(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1 7 7m0 0 6 6M7 7l6-6M7 7l-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="grid grid-cols-2 w-full gap-2 max-[500px]:grid-cols-1 px-3 mt-6 pb-5">
                    <div
                        className="group w-full rounded-lg bg-[var(--second)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_var(--primary)]"
                        onClick={() => navigate("/add-product")}
                    >
                        <p className="text-white text-lg">Add Product</p>

                    </div>
                    <div
                        className="group w-full rounded-lg bg-[var(--third)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_var(--primary)]"
                        onClick={() => navigate("/add-variant")}

                    >
                        <p className="text-white text-lg">Add Product Variant</p>

                    </div>
                </div>


            </div>
        </div >
    )
}

export default AddProduct