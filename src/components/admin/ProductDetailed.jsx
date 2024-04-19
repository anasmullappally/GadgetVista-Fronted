/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ProductVariants from './ProductVariants';
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


function ProductDetailed({ handleChange, data, handleChangeDescription, addVariants, removeVariant, variants, setVariants }) {
    return (
        <div className="product-details-container">
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
            <div className="other-details">
                <div className="accessories">
                    <div className="mt-6">
                        <label className="block mb-2 text-sm font-medium ">Accessories</label>
                        <input name="accessories" value={data.accessories} onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                    </div>
                    <div className="mt-6">
                        <label className="block mb-2 text-sm font-medium ">Warranty Information</label>
                        <input name="warrantyInfo" value={data.warrantyInfo} onChange={handleChange} type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                    </div>
                </div>
                <ProductVariants
                    addVariants={addVariants}
                    removeVariant={removeVariant}
                    variants={variants}
                    setVariants={setVariants}
                />
                <div className="product-add-btn add-btn flex justify-center mt-5" >
                    <button type="button" className="button" >
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
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailed