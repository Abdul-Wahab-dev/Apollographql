export const Query = {
  books: (parent, args, { books }) => {
    const { filter } = args;
    let filteredBooks = books;
    if (filter) {
      filteredBooks = filteredBooks.filter(
        (book) => book.onSale === filter.onSale
      );
    }
    return filteredBooks;
  },
  book: (parent, args, context) => {
    const id = args.id;
    const { books } = context;
    return books.find((book) => book.id === id);
  },

  categories: (parent, args, { categories }) => categories,
  category: (parent, args, context) => {
    const { id } = args;
    const { categories } = context;
    return categories.find((categ) => categ.id === id);
  },
};
