import HookState from "./useStateHook/HookState";
import { createRoot } from "react-dom/client";
import HookEffect from "./useEffectHook/HookEffect";
import { BrowserRouter, Routes, Route } from "react-router";
import HookContext from "./useContextHook/HookContext";
import Routing from "./Routing";
import ParentComponent from "./memoization/ParentComponent";
import HookReducer from "./useReducerHook/HookReducer";
import HookMemo from "./useMemoHook/HookMemo";
import HookRef from "./useRefHook/HookRef";
import HookCallback from "./useCallbackHook/HookCallback";

const App = () => {
  return (
    <div className="m-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Routing />} />
          <Route path="/react-memo" element={<ParentComponent />} />
          <Route path="/use-state" element={<HookState />} />
          <Route path="/use-effect" element={<HookEffect />} />
          <Route path="/use-context" element={<HookContext />} />
          <Route path="/use-reducer" element={<HookReducer />} />
          <Route path="/use-ref" element={<HookRef />} />
          <Route path="/use-memo" element={<HookMemo />} />
          <Route path="/use-callback" element={<HookCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
