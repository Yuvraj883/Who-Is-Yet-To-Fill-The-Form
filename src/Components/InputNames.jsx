import React, { useState } from 'react';
import Output from './Output';

function InputnamesList() {
  const [inputValue1, setinputValue1] = useState(''); // Change state variable name
  const [inputValue2, setinputValue2] = useState('');
  const [hasFilledList, setHasFilledList] = useState('');
  const [namesList, setNamesLilst] = useState([]);
  const [showEnterNamesList, setShowEnterNamesList] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [hasNotFilledList, setHasNotFilledList] = useState([]);

  const handleInputChange1 = (event) => { // Change function name
    setinputValue1(event.target.value); // Update state variable
  };

  const handleInputChange2 = (event) => {
    setinputValue2(event.target.value);
  };

  const handleSubmit = () => {
    const newnamesList = inputValue1.split('\n').map(name => name.trim());
    setNamesLilst(newnamesList);
    setinputValue1('');
    setShowEnterNamesList(false);
  };

  const handleSubmit2 = () => {
    const newHasFilledList = inputValue2.split('\n').map(name => name.trim());
    setHasFilledList(newHasFilledList);
    const list = namesList.filter(name => !newHasFilledList.includes(name))
    setHasNotFilledList(list);
    setShowOutput(true);
  };

  return (
    <>
      {showEnterNamesList &&
        <div className='flex flex-col justify-center items-center p-4'>
          <h1 className='font-bold text-lg '>Expected To Fill The Form</h1>
          <textarea
            className='border-2 border-gray-200 p-3 rounded-sm '
            rows="15"
            cols="66"
            value={inputValue1}
            onChange={handleInputChange1}
            placeholder="Enter namesList separated by newlines..."
          />
          <br />
          <button className='bg-blue-700 hover:bg-blue-500 py-3 w-[30%] font-bold text-white rounded-md ' onClick={handleSubmit}>Submit</button>
        </div>
      }

      {!showOutput && !showEnterNamesList &&
        <div className='flex flex-col justify-center items-center p-4'>
          <h1 className='font-bold text-lg '>Has Filled The Form</h1>
          <textarea
            className='border-2 border-gray-200 p-3 rounded-sm '
            rows="15"
            cols="66"
            value={inputValue2}
            onChange={handleInputChange2}
            placeholder="Enter namesList separated by newlines..."
          />
          <br />
          <button className='bg-blue-700 hover:bg-blue-500 py-3 w-[30%] font-bold text-white rounded-md ' onClick={handleSubmit2}>Submit</button>
        </div>
      }
      {showOutput && <Output hasNotFilledList={hasNotFilledList} />}
    </>
  );
}

export default InputnamesList;
