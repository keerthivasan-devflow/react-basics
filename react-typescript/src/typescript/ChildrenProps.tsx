type ChildrenProp = {
  children: string;
};

const ChildrenProps = (props: ChildrenProp) => {
  return (
    <div>
      <h3>Children Props Component...</h3>
      <p>
        <strong>
          <i>{props.children}</i>
        </strong>
      </p>
    </div>
  );
};

export default ChildrenProps;
