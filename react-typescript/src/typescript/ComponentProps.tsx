type CompProps = {
  children?: React.ReactNode;
};
const ComponentProps = (props: CompProps) => {
  return (
    <div>
      <h3>Component Props as a component and type is: React.ReactNode... the next line renders the children component context</h3>
      {props.children}
    </div>
  );
};

export default ComponentProps;
