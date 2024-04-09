import { useState } from 'react';
import { CiSquareRemove } from 'react-icons/ci';

function ColorInput() {
    const [colorInputs, setColorInputs] = useState([{ color: '', colorCode: '' }]);

    // Function to handle adding a new set of color inputs
    const addColorInput = () => {
        setColorInputs([...colorInputs, { color: '', colorCode: '' }]);
    };
    const removeColorInput = (indexToRemove) => {
        setColorInputs(colorInputs.filter((_, index) => index !== indexToRemove));
    };
    return (
        <div className="colors m-6">
            {colorInputs.map((colorInput, index) => (
                <div key={index} className="color-inputs">
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1">Color</label>
                        <input
                            type="text"
                            value={colorInput.color}
                            onChange={(e) => {
                                const updatedInputs = [...colorInputs];
                                updatedInputs[index].color = e.target.value;
                                setColorInputs(updatedInputs);
                            }}
                            className="bg-white-50 border border-white-500 text-sm rounded-lg block p-2.5 dark:bg-gray-800"
                        />
                    </div>
                    <div className="mt-1 w-100">
                        <label className="block mb-2 text-sm font-medium pl-1">Color code</label>
                        <input
                            type="text"
                            value={colorInput.colorCode}
                            onChange={(e) => {
                                const updatedInputs = [...colorInputs];
                                updatedInputs[index].colorCode = e.target.value;
                                setColorInputs(updatedInputs);
                            }}
                            className="bg-white-50 border border-white-500 text-sm rounded-lg block p-2.5 dark:bg-gray-800"
                        />
                    </div>
                    <CiSquareRemove className='mt-6 remove-icon' size={30} onClick={() => removeColorInput(index)} />
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
