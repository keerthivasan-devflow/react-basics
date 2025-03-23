type BasicPropTypes = {
  fullname?: string;
  age?: number;
  isMarried?: boolean;
  babies?: string[];
  address?: {
    doorno?: number;
    street?: string;
    pincode?: number;
  };
  employement?: {
    office?: string;
    years?: number;
  }[];
};

const BasicProps = ({
  fullname,
  age,
  isMarried,
  babies,
  address,
  employement,
}: BasicPropTypes) => {
  return (
    <div className="mx-auto w-[750px] bg-gray-100 p-3">
      <section className="m-2">
        <h2 className="font-semibold">Basic Details</h2>
        <p>Name: {fullname}</p>
        <p>Age: {age}</p>
        <p>Babies: {babies.join(" ")}</p>
        <p>Marital Status: {isMarried ? "Yes" : "No"}</p>
      </section>

      <section className="m-2">
        <h2 className="font-semibold">Work History</h2>
        {employement.map((data) => (
          <div>
            <p>
              {data.office} - {data.years}
            </p>
          </div>
        ))}
      </section>

      <section className="m-2">
        <h2 className="font-semibold">Address</h2>
        <p>
          {address.doorno}, {address.street}, {address.pincode}
        </p>
      </section>
    </div>
  );
};

export default BasicProps;

// import PropTypes from "prop-types";

// MyComponent.propTypes = {
//   status: PropTypes.oneOf(["loading", "success", "error"]).isRequired,
// };
