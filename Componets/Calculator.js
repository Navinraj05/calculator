// src/components/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {

    const [display, setDisplay] = useState('0');

    const handleButtonClick = (value) => {
        setDisplay((prevDisplay) =>
            prevDisplay === '0' ? value : prevDisplay + value
        );
    };

    const clearDisplay = () => {
        setDisplay('0');
    };

    const calculateResult = () => {
        try {
            const result = eval(display);
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                <button onClick={clearDisplay}>AC</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;
