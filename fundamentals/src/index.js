import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Booky from './Book';

const BookList = () => {
   const getBook = (id) => {
      const book = books.find((book) => book.id === id);
      console.log(book);
   };
   return (
      <>
         <h1 className="title">EzyShop</h1>
         <section className="booklist">
            {books.map((book, index) => {
               return (
                  <Booky
                     {...book}
                     key={book.id}
                     getBook={getBook}
                     number={index}
                  />
               );
            })}
         </section>
      </>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
