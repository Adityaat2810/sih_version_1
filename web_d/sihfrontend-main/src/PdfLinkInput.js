import React, { useState, useEffect } from 'react';

const PdfLinkInput = () => {
  const [pdfLink, setPdfLink] = useState('');
  const [question, setQuestion] = useState('');
  const [pdfText, setPdfText] = useState('');

  const handlePdfLinkChange = (event) => {
    setPdfLink(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://pdf-extract-3vk9.onrender.com/get-pdf', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: pdfLink }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch PDF data');
      }
      const data = await response.text();
      console.log(data);
      setPdfText(data);
    } catch (error) {
      console.error('Error fetching PDF data:', error);
    }
  };

  return (
    <div className="mb-8 mt-10">
      <h2 className="text-lg font-bold mb-2">Enter your PDF link:</h2>
      <input type="text" placeholder="https://example.com/mybook.pdf" className="border border-gray-400 rounded-md py-2 px-4 w-full mb-4" value={pdfLink} onChange={handlePdfLinkChange} />
      <h2 className="text-lg font-bold mb-2">What's your question?</h2>
      <input type="text" placeholder="Type your question here" className="border border-gray-400 rounded-md py-2 px-4 w-full" value={question} onChange={handleQuestionChange} />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md cursor-pointer">Submit</button>
      <div className="mt-4">
        <h2 className="text-lg font-bold">PDF Text:</h2>
        <div className="border border-gray-400 rounded-md py-2 px-4 w-full">{pdfText}</div>
      </div>
    </div>
  );
};

export default PdfLinkInput;
