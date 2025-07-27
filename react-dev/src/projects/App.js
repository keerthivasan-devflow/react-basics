import { createRoot } from "react-dom/client";
import FakeProductCategorySelector from "./FakeProductCategorySelector";
import Demo from "./Demo";

const App = () => {
  return (
    <div className="mx-auto w-[800px]">
      {/* <FakeProductCategorySelector /> */}
      <Demo />
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
