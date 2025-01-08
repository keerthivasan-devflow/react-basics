import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/asyncSlice";

const UserViewData = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>Fetching users data</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </>
  );
};

export default UserViewData;
