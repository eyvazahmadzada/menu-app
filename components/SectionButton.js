import React from "react";

const SectionButton = (props) => {
  let btnClassName = "btn btn-custom";
  let iconClassName = "fa-angle-down";
  if (props.isActive) {
    btnClassName += " active";
    iconClassName = "fa-angle-up";
  }

  return (
    <div>
      <button className={btnClassName} onClick={props.clicked}>
        <span>{props.children}</span>
        <i className={"fa " + iconClassName} aria-hidden="true"></i>
      </button>
      <style jsx>{`
        .btn-custom {
          display: flex;
          justify-content: space-between;
          background-color: #ccc;
          font-weight: bold;
          border: 1px solid gray;
          width: 100%;
          box-shadow: 1px 1px 1px #ccc;
        }

        .btn-custom:hover {
          background-color: #d6d6d6;
        }

        .btn-custom.active {
          background-color: white;
        }

        .btn-custom > i {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default SectionButton;
