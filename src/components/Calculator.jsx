import React, { useState } from "react";

const Calculator = ({ onClose }) => {
  const [input, setInput] = useState("");

  // Update input when a number or operator is clicked
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Perform calculation when "=" button is clicked
  const calculate = () => {
    try {
      setInput(eval(input).toString()); // Perform the calculation
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear the input when "C" button is clicked
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-xl max-w-xs w-full z-50">
      {/* Close Button */}
      <button
        onClick={onClose}  // Trigger the onClose function when clicked
        className="absolute top-0 right-1 text-purple-700 text-3xl font-bold hover:text-pink-500 transition-all"
      >
        &times;
      </button>

      {/* Calculator Display */}
      <div className="mb-6 p-4 bg-gradient-to-r from-pink-200 to-purple-300 text-right text-2xl font-extrabold text-purple-900 rounded-lg shadow-md">
        {input || "0"}
      </div>

      {/* Calculator Buttons */}
      <div className="grid grid-cols-4 gap-4">
        <button onClick={() => handleButtonClick("1")} className="btn-calculator">1</button>
        <button onClick={() => handleButtonClick("2")} className="btn-calculator">2</button>
        <button onClick={() => handleButtonClick("3")} className="btn-calculator">3</button>
        <button onClick={() => handleButtonClick("+")} className="btn-calculator">+</button>

        <button onClick={() => handleButtonClick("4")} className="btn-calculator">4</button>
        <button onClick={() => handleButtonClick("5")} className="btn-calculator">5</button>
        <button onClick={() => handleButtonClick("6")} className="btn-calculator">6</button>
        <button onClick={() => handleButtonClick("-")} className="btn-calculator">-</button>

        <button onClick={() => handleButtonClick("7")} className="btn-calculator">7</button>
        <button onClick={() => handleButtonClick("8")} className="btn-calculator">8</button>
        <button onClick={() => handleButtonClick("9")} className="btn-calculator">9</button>
        <button onClick={() => handleButtonClick("*")} className="btn-calculator">*</button>

        <button onClick={() => handleButtonClick("0")} className="btn-calculator">0</button>
        <button onClick={clearInput} className="btn-calculator">C</button>
        <button onClick={calculate} className="btn-calculator">=</button>
        <button onClick={() => handleButtonClick("/")} className="btn-calculator">/</button>
      </div>
    </div>
  );
};

export default Calculator;
