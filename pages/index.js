import React, { useEffect, useState } from "react";
import axios from "../axios";
import Header from "../components/Header";
import MenuSection from "../components/MenuSection";
import Spinner from "../components/Spinner";

export default function Home() {
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    axios
      .get("/menus/menu-section/")
      .then((response) => setMenuSections(response.data))
      .catch((err) => console.log(err));
  }, []);

  let content = <Spinner />;
  if (menuSections.length > 0) {
    content = menuSections.map((menuSection) => (
      <div className="col-12" key={menuSection.id}>
        <MenuSection id={menuSection.id} title={menuSection.title} />
      </div>
    ));
  }

  return (
    <div>
      <Header />
      <div className="row align-items-center justify-content-center mt-2">
        {content}
      </div>
    </div>
  );
}
