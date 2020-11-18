import React, { useEffect, useState } from "react";
import axios from "../axios";
import SectionButton from "./SectionButton";
import SectionItem from "./SectionItem";

const MenuSection = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [sectionItems, setSectionItems] = useState([]);
  const { id } = props;

  useEffect(() => {
    if (localStorage.getItem(id)) {
      const storedSectionItems = JSON.parse(localStorage.getItem(id));
      setSectionItems(storedSectionItems);
    } else {
      axios
        .get(`/menus/menu-section/${id}/items/`)
        .then((response) => {
          const fetchedSectionItems = response.data.menu_items;
          localStorage.setItem(id, JSON.stringify(fetchedSectionItems));
          setSectionItems(fetchedSectionItems);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const renderSectionItem = (item, index) => (
    <div className="col-md-6 mb-3" key={index}>
      <SectionItem
        title={item.title}
        ingredients={item.ingredients}
        price={item.price}
      />
    </div>
  );

  let content;
  if (isActive) {
    content =
      sectionItems.length > 0 ? (
        <div className="row">
          {sectionItems.map((item, index) => renderSectionItem(item, index))}
        </div>
      ) : (
        <p>No items here</p>
      );
  }

  return (
    <div className="d-flex flex-column">
      <SectionButton clicked={() => setIsActive(!isActive)} isActive={isActive}>
        {props.title}
      </SectionButton>
      {content}
    </div>
  );
};

export default MenuSection;
