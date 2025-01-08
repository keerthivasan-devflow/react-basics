import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook } from "../actions/buyBook.js";

const BookContainer = (props) => {
  const [number, setNumber] = useState(1);
  const changeHandler = (event) => {
    setNumber(event.target.value);
  };
  return (
    <>
      <div className="redux-container">
        <h2 className="redux-header">Book Container Component</h2>
        <p className="redux-count">
          Number of available books: {props.booksCount}
        </p>
        <input
          type="text"
          className="redux-input"
          value={number}
          onChange={changeHandler}
        />
        <button className="buy-button" onClick={() => props.shopBook(number)}>
          Buy Book
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // state.book.numberOfBooks because of combinedReducers - book is a key in rootReducers
    booksCount: state.book.numberOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    shopBook: (number) => dispatch(buyBook(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
