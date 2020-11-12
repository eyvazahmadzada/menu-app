import React from "react";

const MenuItem = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Ingredients: {props.ingredients}</p>
        <p className="card-text">Price: {props.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
