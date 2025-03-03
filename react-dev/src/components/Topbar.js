import { MdKeyboardArrowUp } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="flex justify-end rounded-full w-1/12 absolute right-0 bottom-0">
      <MdKeyboardArrowUp className="text-6xl border-2 rounded-full border-gray-300 text-gray-300" />
    </div>
  );
};

export default Topbar;
