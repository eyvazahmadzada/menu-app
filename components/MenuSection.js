import React, { useEffect, useState } from "react";
import axios from "../axios";

const MenuSection = (props) => {
  const [sectionData, setSectionData] = useState([]);
  const sectionId = props.sectionId;

  useEffect(() => {
    if (sectionId) {
      axios
        .get(`/menus/menu-section/${sectionId}/items/`)
        .then((response) => setSectionData(response.data.menu_items))
        .catch((err) => console.log(err));
    }
  }, [sectionId]);

  return (
    <div>
      {sectionData.length > 0 ? (
        sectionData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Ingredients: {item.ingredients}</p>
                <p className="card-text">Price: {item.price}</p>
              </div>
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
