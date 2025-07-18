import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook } from "../actions/buyBook.js";

const BookView = ({ totalBooks, buyBook }) => {
  const [bookQuantity, setBookQuantity] = useState();

  return (
    <div className="border-2 p-3 w-[300px] flex flex-col gap-2 text-center">
      <p className="font-semibold">Number of available books - {totalBooks}</p>
      <input
        type="text"
        className="border border-gray-300 p-1 w-64"
        value={bookQuantity}
        onChange={(e) => {
          setBookQuantity(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 text-white font-semibold  px-4 py-2"
        onClick={() => {
          buyBook(bookQuantity);
          setBookQuantity("");
        }}
      >
        Buy Book
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalBooks: state.book.numberOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: (number) => dispatch(buyBook(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookView);
