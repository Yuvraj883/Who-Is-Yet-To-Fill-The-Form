import React, { useState } from 'react';

function InputNames() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Split the input value by newline characters and trim whitespace
    const newNames = inputValue.split('\n').map(name => name.trim());
    setNames(newNames);
  };

  return (
    <div>
      <h1>Enter Names</h1>
      <textarea
        rows="10"
        cols="50"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter names separated by newlines..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h2>Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputNames;
