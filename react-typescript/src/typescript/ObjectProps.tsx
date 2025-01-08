type PersonProps = {
  details: {
    firstname: string;
    lastname: string;
  };
};

const ObjectProps = (props: PersonProps) => {
  return (
    <div>
      <h3>Object Props Component...</h3>
      <p>My firstname is : {props.details.firstname}</p>
      <p>My Lastname is : {props.details.lastname}</p>
    </div>
  );
};

export default ObjectProps;
