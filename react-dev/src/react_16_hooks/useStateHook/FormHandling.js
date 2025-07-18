import React, { useState } from "react";

const FormHandling = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  const updateUser = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="border border-gray-500 w-[500px] m-3 p-3 text-center">
      <h1 className="font-semibold text-xl m-2">Form Handling</h1>
      <form className="flex gap-2">
        <input
          type="text"
          value={user.firstname}
          placeholder="Enter the firstname"
          name="firstname"
          onChange={updateUser}
          className="border p-2 border-gray-500 text-gray-500"
        />
        <input
          type="text"
          value={user.lastname}
          name="lastname"
          placeholder="Enter the lastname"
          onChange={updateUser}
          className="border p-2 border-gray-500 text-gray-500"
        />
      </form>
      <p className="m-2">{JSON.stringify(user)}</p>
    </div>
  );
};

export default FormHandling;
