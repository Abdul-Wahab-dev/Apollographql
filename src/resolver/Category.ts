export const Category = {
  books: (parent, args, { books }) => {
    const { id } = parent;
    let filteredBooks = books.filter((book) => book.cateId === id);

    const { filter } = args;
    if (filter) {
      filteredBooks = filteredBooks.filter(
        (book) => book.onSale === filter.onSale
      );
    }
    return filteredBooks;
  },
};
