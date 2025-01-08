export const BUY_BOOK = "BUY_BOOK";
export const buyBook = (qty = 2) => {
  return {
    type: BUY_BOOK,
    info: "Book Purchasing Concept...",
    payload: qty,
  };
};
