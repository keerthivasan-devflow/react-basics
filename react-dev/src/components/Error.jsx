import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="flex flex-col w-[600px] mx-24">
        <h1 className="font-bold text-red-600 text-4xl">
          Error 404: Page Not Found
        </h1>
        <h3 className="text-red-600">
          {err.statusText}[{err.status}] - {err.data}
        </h3>
      </div>
    </>
  );
};

export default Error;
