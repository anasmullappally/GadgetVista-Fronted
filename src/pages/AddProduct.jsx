import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
function AddProduct() {
    const [value, setValue] = useState('');
    return (
        <div className="add-product">
            <div className="header">
                <div className="title">Add Product</div>
                <div className="back-to">
                    <button>Back To List</button>
                </div>
            </div>
            <div className="adding-container">
                <div className="image-container">
                    <div className="title">Base Information</div>
                    <div className="base-info">
                        <div className="mt-6 pl-5 ">
                            <label className="block mb-2 text-sm font-medium ">Product Name</label>
                            <input type="text" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                        </div>
                        <div className="brand-container mt-6 pl-5 " >
                            <label className="block mb-2 text-sm font-medium ">Brand</label>
                            <div className="brand">
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
                                        >
                                            <option>HTML</option>
                                            <option>React</option>
                                            <option>Vue</option>
                                            <option>Angular</option>
                                            <option>Svelte</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="add-brand">

                                    <button className="button" type="button">
                                        <span className="button__text">Add Brand</span>
                                        <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="radio-buttons-container pl-5 mt-3">
                            <label className="block mb-2 text-sm font-medium ">Category</label>
                            <div className="radio-button">
                                <input name="radio-group" id="radio2" className="radio-button__input" type="radio" />
                                <label htmlFor="radio2" className="radio-button__label">
                                    <span className="radio-button__custom"></span>

                                    Next
                                </label>
                            </div>
                            <div className="radio-button">
                                <input name="radio-group" id="radio1" className="radio-button__input" type="radio" />
                                <label htmlFor="radio1" className="radio-button__label">
                                    <span className="radio-button__custom"></span>

                                    Svelte
                                </label>
                            </div>
                            <div className="radio-button">
                                <input name="radio-group" id="radio3" className="radio-button__input" type="radio" />
                                <label htmlFor="radio3" className="radio-button__label">
                                    <span className="radio-button__custom"></span>

                                    Remix
                                </label>
                            </div>
                        </div>

                        <div className="images-container pl-5">
                            <div className="image-item">
                                <label className="custom-file-upload" htmlFor="file">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                                    </div>
                                    <div className="text">
                                        <span>Add Image</span>
                                    </div>
                                    <input type="file" id="file" />
                                </label>
                            </div>
                            <div className="image-item">
                                <label className="custom-file-upload" htmlFor="file">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                                    </div>
                                    <div className="text">
                                        <span>Add Image</span>
                                    </div>
                                    <input type="file" id="file" />
                                </label>
                            </div>

                            <div className="image-item">
                                <label className="custom-file-upload" htmlFor="file">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                                    </div>
                                    <div className="text">
                                        <span>Add Image</span>
                                    </div>
                                    <input type="file" id="file" />
                                </label>
                            </div>

                            <div className="image-item">
                                <label className="custom-file-upload" htmlFor="file">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                                    </div>
                                    <div className="text">
                                        <span>Add Image</span>
                                    </div>
                                    <input type="file" id="file" />
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="product-details-container">

                    <div className="description">
                        <div className="title">Description</div>
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            modules={modules}
                            formats={formats}
                        />

                    </div>
                    <div className="other-details">
                        <div className="variants">
                            <div className="variant">
                                
                            </div>
                            <div className="add-variants">

                            </div>
                        </div>

                        <div className="price-details">
                            <div className="mt-6">
                                <label className="block mb-2 text-sm font-medium ">MRP Price</label>
                                <input type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                            </div>
                            <div className="mt-6">
                                <label className="block mb-2 text-sm font-medium ">MRP Price</label>
                                <input type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                            </div>
                            <div className="mt-6 ">
                                <label className="block mb-2 text-sm font-medium ">Price</label>
                                <input type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                            </div>
                            <div className="mt-6 ">
                                <label className="block mb-2 text-sm font-medium ">Quantity</label>
                                <input type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                            </div>
                        </div>

                        <div className="product-add-btn">
                            <button>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct