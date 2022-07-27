import React from "react";

const Button = ({onClick, Children}) => {
  return (
    <>
      <div className="btn-container">
        <button className="btn" type="button" onClick={onClick}>
          I have visited here before
        </button>
      </div>
    </>
  );
};
export default Button;
