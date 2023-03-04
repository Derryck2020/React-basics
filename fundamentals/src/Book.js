const Book = (props) => {
   const { author, title, img, getBook, id, number } = props;
   // console.log(props);
   // const displayTitle = () => {
   //    console.log(title);
   // };
   console.log(number);
   const getSingleBook = () => {
      getBook(id);
   };
   return (
      <article className="book">
         <img src={img} alt={title} />
         <h2>{title}</h2>
         <button onClick={getSingleBook}>Click</button>
         <h4>{author}</h4>
         <span className="number">{`#${number + 1}`}</span>
      </article>
   );
};

export default Book;
