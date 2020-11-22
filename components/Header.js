import React from "react";

const Header = (props) => {
  return (
    <div className="row header">
      <h1>{props.title}</h1>
      <h5>{props.greeting}</h5>
      <style jsx>{`
        .header {
          position: relative;
          min-height: 40vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: rgb(0, 0, 0, 0.6);
          color: white;
        }

        .header::after {
          position: absolute;
          display: block;
          content: "";
          background-image: url("http://juniorbee.pythonanywhere.com/${props.img}");
          background-size: cover;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default Header;
