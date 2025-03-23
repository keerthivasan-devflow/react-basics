export const BUY_BOOK = "BUY_BOOK";
export const buyBook = (qty = 2) => {
  return {
    type: BUY_BOOK,
    payload: qty,
  };
};
