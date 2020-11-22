import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="btn btn-custom" style={props.style}>
        {props.children}
      </button>
      <style jsx>{`
        .btn-custom {
          background-color: #ffb733;
          font-weight: bold;
          width: 100%;
          border-radius: 0;
          display: none;
        }

        .btn-custom:hover {
          background-color: #e59500;
        }

        .btn-custom:focus {
          box-shadow: none;
        }

        .btn-custom > i {
          font-size: 1.2rem;
        }

        @media only screen and (max-width: 576px) {
          .btn-custom {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Button;
