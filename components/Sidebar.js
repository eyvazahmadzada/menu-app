import React from "react";

const sidebar = (props) => {
  return (
    <div className="d-flex flex-column">
      {props.menuSections.map((item) => (
        <button
          className={
            props.activeId === item.id
              ? "btn btn-success m-2"
              : "btn btn-primary m-2"
          }
          key={item.id}
          onClick={props.onSectionSelected.bind(this, item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default sidebar;
