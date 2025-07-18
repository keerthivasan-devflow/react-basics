import React from 'react'

const MemoComp = (props) => {
    console.log("Memo Component")
  return (
    <>
      <h2>Memo Component - {props.username}</h2>
    </>
  );
};

export default React.memo(MemoComp);
