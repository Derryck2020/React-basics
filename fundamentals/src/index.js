import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
   return (
      <section className="booklist">
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
      </section>
   );
};

const Book = () => {
   return (
      <article className="book">
         <Image />
         <Title />
         <Author />
      </article>
   );
};

const Image = () => (
   <img
      src="https://images-na.ssl-images-amazon.com/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg"
      alt="The Courage to Be Free"
   />
);
const Title = () => <h2>The Courage to Be Free</h2>;
const Author = () => {
   return <h3>Ron DeSantis</h3>;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
