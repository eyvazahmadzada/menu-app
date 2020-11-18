import React from "react";

const SectionButton = (props) => {
  let className = "btn btn-custom";
  if (props.isActive) {
    className += " active";
  }

  return (
    <div>
      <button className={className} onClick={props.clicked}>
        {props.children}
      </button>
      <style jsx>{`
        .btn-custom {
          background-color: #ccc;
          font-weight: bold;
          border: 1px solid black;
          width: 100%;
          margin: 0.5rem 0;
        }
        .btn-custom:focus {
          box-shadow: none;
        }

        .btn-custom:hover,
        .btn-custom.active {
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default SectionButton;
