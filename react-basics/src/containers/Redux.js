import "../App.css";
import { Provider } from "react-redux";
import CakeContainer from "../redux/redux-components/CakeContainer.js";
import BookContainer from "../redux/redux-components/BookContainer.js";
import { store } from "../redux/stores/store.js";
import "../assets/css/redux.css";

const ReduxApp = () => {
  return (
    <>
      <Provider store={store}>
        <h1>Redux Component Implementation</h1>
        <CakeContainer />
        <BookContainer />
      </Provider>
    </>
  );
};

export default ReduxApp;
