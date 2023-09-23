import React from 'react';


const BookCard = ({ imageSrc, name, pdfLink }) => {
console.log(pdfLink);
  return (
    <div className="w-665 sm:w-1/2 md:w-1/3 p-4 pl-14">
      <div className="bg-white rounded-lg shadow-md overflow-hidden align-middle justify-center">
        <img src={imageSrc} alt={name} className="w-60 h-72 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
