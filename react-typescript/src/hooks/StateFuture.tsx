import React, { useState } from "react";

type PersonObjectProps = {
  name: string;
  email: string;
};

type CarProps = {
  carname: string;
  carmodel: number;
};

const StateFuture = () => {
  const [user, setUser] = useState<PersonObjectProps | null>(null);
  /*<PersonObjectProps>({} as PersonObjectProps):  Which means person object or its 
  properties won't be null at all, you can even access the object properties without 
  optional chaining like "user.name" */

  const [car, SetCarDetails] = useState<CarProps>({} as CarProps);
  const handleLoggedIn = () => {
    setUser({
      name: "Keerthivasan",
      email: "keerthi@gmail.com",
    });
  };

  const handleLoggedOut = () => {
    setUser(null);
  };

  const printCarDetails = () => {
    SetCarDetails({
      ...car,
      carname: "Volvo",
      carmodel: 2017,
    });
  };
  return (
    <div>
      <h3>State Future Component</h3>
      <div>
        <ul>
          <li>{user?.email}</li>
          <li>{user?.name}</li>
        </ul>
        <button onClick={handleLoggedIn}>
          Click to update the state future value
        </button>
        <button onClick={handleLoggedOut}>Click to set null</button>
      </div>
      <section>
        <h3>Car Details</h3>
        <p>Car Name :{car.carname}</p>
        <p>Car Model :{car.carmodel}</p>
        <button onClick={printCarDetails}>print car details</button>
      </section>
    </div>
  );
};

export default StateFuture;
