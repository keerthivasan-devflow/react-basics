type ClickEventProp = {
  // handleClickEvent: (event: React.MouseEvent<HTMLButtonElement>)=>void
  handleClickEvent: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  handleHoverEvent: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const ClickEventProps = (props: ClickEventProp) => {
  return (
    <div>
      <button onClick={(event) => props.handleClickEvent(event, 1)}>
        Click Event
      </button>

      <button onMouseOver={(event) => props.handleHoverEvent(event, 10)}>
        Hover Event
      </button>
    </div>
  );
};

export default ClickEventProps;
