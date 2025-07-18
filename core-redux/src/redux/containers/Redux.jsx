import { Provider } from "react-redux";
import CakeView from "./CakeView";
import BookView from "./BookView";
import { store } from "../stores/store.js";
import FetchUsers from "../async-actions-noredux/FetchUsers";

const Redux = () => {
  return (
    <div className="flex justify-start gap-4 m-4">
      <Provider store={store}>
        <CakeView name="owner of the cake shop is Keerthivasan" />
        <BookView />
        <FetchUsers />
      </Provider>
    </div>
  );
};

export default Redux;
