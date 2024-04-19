/* eslint-disable react/prop-types */
import { useState } from "react";
import ColorInput from "./ColorInput"

function ProductVariants({ removeVariant, variants, setVariants, index, variant, colorError, colorValidation, removeColorError, variantError, removeVariantError }) {
    const [colorInputs, setColorInputs] = useState(variant.colors);
    const handleVariantChange = (index, fieldName, value) => {
        const updatedVariants = [...variants];
        updatedVariants[index][fieldName] = value;
        if (variantError[variant?.key]?.label === fieldName) {
            removeVariantError(variant.key)
        }
        setVariants(updatedVariants);
    };

    return (
        <>
            <div className="variant">
                <div className="variant-details m-6">
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1">RAM</label>
                        <input onChange={(e) => handleVariantChange(index, 'ram', e.target.value)} name="ram" value={variant.ram} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {variantError[variant.key] && variantError[variant.key].label === "ram" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{variantError[variant.key].message}</p>}
                    </div>
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1 ">ROM</label>
                        <input onChange={(e) => handleVariantChange(index, 'rom', e.target.value)} name="rom" value={variant.rom} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {variantError[variant.key] && variantError[variant.key].label === "rom" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{variantError[variant.key].message}</p>}

                    </div>
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1">MRP</label>
                        <input onChange={(e) => handleVariantChange(index, 'mrp', e.target.value)} name="mrp" value={variant.mrp} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {variantError[variant.key] && variantError[variant.key].label === "mrp" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{variantError[variant.key].message}</p>}

                    </div>
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1 ">Price</label>
                        <input name="price" onChange={(e) => handleVariantChange(index, 'price', e.target.value)} value={variant.price} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {variantError[variant.key] && variantError[variant.key].label === "price" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{variantError[variant.key].message}</p>}

                    </div>
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1 ">Shipping Charge</label>
                        <input onChange={(e) => handleVariantChange(index, 'shippingCharge', e.target.value)} name="shippingCharge" value={variant.shippingCharge} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {variantError[variant.key] && variantError[variant.key].label === "shippingCharge" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{variantError[variant.key].message}</p>}

                    </div>
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1 ">Quantity</label>
                        <input onChange={(e) => handleVariantChange(index, 'quantity', e.target.value)} name="quantity" value={variant.quantity} type="number" className="bg-white-50 border border-white-500 text-sm rounded-lg  block p-2.5 dark:bg-gray-800  " />
                        {variantError[variant.key] && variantError[variant.key].label === "quantity" && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{variantError[variant.key].message}</p>}

                    </div>
                </div>
                <ColorInput
                    variant={variant}
                    setVariants={setVariants}
                    colorInputs={colorInputs}
                    setColorInputs={setColorInputs}
                    colorError={colorError}
                    colorValidation={colorValidation}
                    removeColorError={removeColorError}
                />
            </div >
            <div className="remove-variant w-100 flex items-center justify-center">
                <button
                    onClick={() => removeVariant(variant.key)}
                    className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                >
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                        <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                        Button
                    </svg>
                </button>
            </div>
            <div className="line"></div>

        </>
    )
}

export default ProductVariants

