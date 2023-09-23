import React from 'react';
import BookCard from './BookCard';
import PdfLinkInput from './PdfLinkInput';

const BookList = (boo) => {
    // console.log(boo);

  const books = boo.data;

  return (
    <div className="flex flex-wrap -mx-4">
      {books && books.map((book) => (
        <BookCard key={book.id} imageSrc={book.image} name={book.name} pdfLink={book.link} />
      ))}


    
    
    </div>
  );
};

export default BookList;
