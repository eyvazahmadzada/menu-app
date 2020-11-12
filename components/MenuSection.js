import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = (props) => {
  return (
    <div className="row">
      {props.sectionData.length > 0 ? (
        props.sectionData.map((item, index) => {
          return (
            <div className="col-lg-4 col-md-6 mt-2 mb-2" key={index}>
              <MenuItem
                title={item.title}
                ingredients={item.ingredients}
                price={item.price}
              />
            </div>
          );
        })
      ) : (
        <p>No data here</p>
      )}
    </div>
  );
};

export default MenuSection;
