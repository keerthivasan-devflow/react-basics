import "./App.css";
import CakeView from "./components/CakeView";
import UserView from "./components/UserView";
import { Provider } from "react-redux";
import { store } from "./utils/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeView />
        <UserView />
      </Provider>
    </>
  );
}

export default App;
