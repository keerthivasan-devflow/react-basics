import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Dashboard = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <h1>All the users data will be displayed in the dashboard</h1>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {showActiveUsers ? (
        <h3>Showing only active users</h3>
      ) : (
        <h3>Showing all the users</h3>
      )}
      <Outlet />
    </>
  );
};

export default Dashboard;
