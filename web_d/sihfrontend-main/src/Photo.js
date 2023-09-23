import { useState, useEffect } from 'react';
import Hello from './Hello';

export default function Photo() {
  const [selectedOption, setSelectedOption] = useState('Physics');
//    console.log(selectedOption);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://books-api-nxnu.onrender.com/api/category/${selectedOption}`);
        
        const data = await response.json();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedOption]);


  return (
    <>
    <div className="flex justify-between items-center p-4   mt-20">
      <h1 className="text-2xl font-bold">Select an Option:</h1>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            selectedOption === 'Physics' ? 'bg-gray-800 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSelectedOption('Physics') }
        >
          Physics
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedOption === 'Chemistry' ? 'bg-gray-800 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSelectedOption('Chemistry')}
        >
          Chemistry
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedOption === 'Computer' ? 'bg-gray-800 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSelectedOption('Computer')}
        >
          Computer
        </button>
      </div>
    </div>

    <Hello data={books}></Hello>
    </>
  );
}
