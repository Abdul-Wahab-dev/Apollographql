export const Book = {
  category: (parent, args, context) => {
    const { cateId } = parent;
    const { categories } = context;
    return categories.find((categ) => categ.id === cateId);
  },
  reviews: (parent, args, contexet) => {
    const { id } = parent;
    const { reviews } = contexet;
    return reviews.filter((review) => review.bookId === id);
  },
};
