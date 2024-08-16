import React, { useState } from 'react';
import './NumberInput.css';

function NumberInput() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [nextNumbers, setNextNumbers] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (!value || isNaN(value)) {
            setMessage('');
            setNextNumbers([]);
            return;
        }

        const num = parseInt(value, 10);

        if (num < 0) {
            setMessage('Enter a positive value');
            setNextNumbers([]);
        } else if (num % 2 === 0) {
            setMessage('');
            setNextNumbers([num + 2, num + 4, num + 6]);
        } else {
            setMessage('');
            setNextNumbers([num + 2, num + 4, num + 6]);
        }
    };

    return (
        <div className="container">
            <h1>Number Checker</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter a number"
            />
            <p className="message">{message}</p>
            {nextNumbers.length > 0 && (
                <div className="next-numbers">
                    <p>Next 3 {inputValue % 2 === 0 ? 'even' : 'odd'} numbers:</p>
                    <ul>
                        {nextNumbers.map((num, index) => (
                            <li key={index}>{num}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NumberInput;
