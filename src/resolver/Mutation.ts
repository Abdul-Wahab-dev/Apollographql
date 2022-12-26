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

  deleteCategory: (parent, { id }, { categories, books }) => {
    categories = categories.filter((category) => category.id !== id);
    books = books.map((book) => {
      if (book.cateId === id)
        return {
          ...book,
          cateId: null,
        };
      else return book;
    });
    return true;
  },

  deleteBook: (parent, { id }, { books, reviews }) => {
    books = books.filter((book) => book.id !== id);
    reviews = reviews.filter((review) => review.bookId !== id);
    return true;
  },

  deleteReview: (parent, { id }, { reviews }) => {
    reviews = reviews.filter((review) => review.id !== id);
    return true;
  },

  updateCategory: (parent, { id, input }, { categories }) => {
    const index = categories.findIndex((category) => category.id === id);
    if (index === -1) return null;
    categories[index] = {
      ...categories[index],
      ...input,
    };
    return categories[index];
  },
  updateBook: (parent, { id, input }, { books }) => {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return null;
    books[index] = {
      ...books[index],
      ...input,
    };
    return books[index];
  },
  updateReview: (parent, { id, input }, { reviews }) => {
    const index = reviews.findIndex((review) => review.id === id);
    reviews[index] = {
      ...reviews[index],
      ...input,
    };
    return reviews[index];
  },
};
