import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);

  const params = useParams();
  const userID = params.userId;
  return (
    <>
      <h1>User Component {userID}</h1>
      <button type="button" onClick={handleNavigate}>
        Go Back
      </button>
    </>
  );
};

export default User;
