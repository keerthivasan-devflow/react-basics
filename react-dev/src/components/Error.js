import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col w-1/2 mx-4 p-4 text-red-500">
      <h1 className="font-bold text-4xl">
        {err.status} {err.statusText}{" "}
      </h1>
      <p className="text-xl">{err.data}</p>
    </div>
  );
};

export default Error;
