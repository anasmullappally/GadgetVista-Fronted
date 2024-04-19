/* eslint-disable react/prop-types */
import { CiSquareRemove } from 'react-icons/ci';

function ColorInput({ colorInputs, setColorInputs, setVariants, variant, colorError, colorValidation, removeColorError }) {

    const addColorInput = () => {
        const isValid = colorValidation(colorInputs, variant.key)
        if (!isValid) return false

        setColorInputs([...colorInputs, { color: '', colorCode: '' }]);
        setVariants((prevVariants) => {
            return prevVariants.map((item) => {
                if (item.key === variant.key) {
                    item.colors = colorInputs;
                }
                return item;
            });
        });
    };
    const removeColorInput = (indexToRemove) => {
        setColorInputs(colorInputs.filter((_, index) => index !== indexToRemove));
        setVariants((prevVariants) => {
            return prevVariants.map((item) => {
                if (item.key === variant.key) {
                    const { colors } = item
                    item.colors = colors.filter((_, index) => index !== indexToRemove)
                }
                return item;
            });
        });
    };
    const handleChangeValues = (value, index, fieldName) => {
        const updatedInputs = [...colorInputs];
        updatedInputs[index][fieldName] = value;
        setColorInputs(updatedInputs);
        if (colorError[variant.key]) {
            removeColorError(variant.key)
        }
        setVariants((prevVariants) => {
            return prevVariants.map((item) => {
                if (item.key === variant.key) {
                    item.colors = updatedInputs;
                }
                return item;
            });
        });
    }
    return (
        <div className="colors m-6 w-11/12">
            {colorInputs.map((colorInput, index) => (
                <div key={index}>
                    <div className={`color-inputs ${index === colorError?.index && variant?.key === colorError?.variant && " mt-4 border px-5 py-3 border-dashed border-red-500"}`}>
                        <div className="mt-1 w-100">
                            <label className="block mb-2 text-sm font-medium pl-1">Color</label>
                            <input
                                type="text"
                                value={colorInput.color}
                                onChange={(e) => handleChangeValues(e.target.value, index, "color",)}
                                className="bg-white-50 border border-white-500 text-sm rounded-lg block p-2.5 dark:bg-gray-800"
                            />
                        </div>
                        <div className="mt-1 w-100">
                            <label className="block mb-2 text-sm font-medium pl-1">Color code</label>
                            <input
                                type="text"
                                value={colorInput.colorCode}
                                onChange={(e) => handleChangeValues(e.target.value, index, "colorCode",)}
                                className="bg-white-50 border border-white-500 text-sm rounded-lg block p-2.5 dark:bg-gray-800"
                            />
                        </div>
                        <CiSquareRemove className='mt-6 remove-icon' size={30} onClick={() => removeColorInput(index)} />
                    </div>
                    {colorError[variant.key] && colorError[variant.key].index === index && <div className="mt-2 w-full flex justify-center items-center text-center text-sm  text-red-600 dark:text-red-500">{colorError[variant.key].message}</div>}
                </div>
            ))}
            <div className="add-colors add-btn mt-6">
                <button type="button" className="button" onClick={addColorInput}>
                    <span className="button__text">Add Color</span>
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
    );
}

export default ColorInput;
