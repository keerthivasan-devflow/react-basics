import { createRoot } from "react-dom/client";
import FakeProductCategorySelector from "./FakeProductCategorySelector";

const App = () => {
  return (
    <>
      <FakeProductCategorySelector />
    </>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
