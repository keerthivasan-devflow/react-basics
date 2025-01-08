import { Provider } from "react-redux";
import "./App.css";

import CakeView from "./components/CakeView";
import UserViewData from "./components/UsersViewData";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeView />
        <UserViewData />
      </Provider>

    </>
  );
}

export default App;
