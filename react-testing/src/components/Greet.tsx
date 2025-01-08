import GreetProp from "./Greet.types";

function Greet({ name, email }: GreetProp) {
  return (
    <div>
      <p>{name} is a good girl - {email}</p>
    </div>
  );
}

export default Greet;
