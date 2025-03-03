import "./App.css";
import CakeView from "./components/CakeView";
import UserViewData from "./components/UsersViewData";
import { Provider } from "react-redux";
import { store } from "./utils/store";

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
