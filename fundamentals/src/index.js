import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const author = 'Ron DeSantis';
const title = 'The Courage to Be Free';
const img1 = './images/bookImg.jpg';
const img2 = './images/85.jpg';
const img3 = './images/71.jpg';

const BookList = () => {
   return (
      <section className="booklist">
         <Book author={author} title={title} img={img1} />
         <Book author={author} title={title} img={img2} />
         <Book author={author} title={title} img={img3} />
      </section>
   );
};

const Book = (props) => {
   console.log(props);
   return (
      <article className="book">
         <img src={props.img} alt={props.title} />
         <h2>${props.title}</h2>
         <h4>{props.author}</h4>
      </article>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
