import { useRouteError } from "react-router";

const Error = () => {
   const err =  useRouteError()
   console.log(err)
  return (
    <>
      <h1>Error 404: Page Not Found</h1>
      <h3>{err.statusText}[{err.status}] - {err.data}</h3>
    </>
  );
};

export default Error