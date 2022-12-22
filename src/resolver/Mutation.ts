exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: "uuid",
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addBook: (parent, { input }, { books }) => {
    const { id, name, description, quantity, image, price, onSale, cateId } =
      input;

    const newBook = {
      id,
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      cateId,
    };
    books.push(newBook);
    return newBook;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { id, date, title, comment, rating, bookId } = input;

    const newReview = {
      id,
      date,
      title,
      comment,
      rating,
      bookId,
    };
    reviews.push(newReview);

    return newReview;
  },
};
