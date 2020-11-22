import React, { useEffect, useState } from "react";
import axios from "../axios";
import Button from "../components/Button";
import Header from "../components/Header";
import MenuSection from "../components/MenuSection";
import Spinner from "../components/Spinner";

export default function Home() {
  const [menuSections, setMenuSections] = useState([]);
  const [menuData, setMenuData] = useState();

  useEffect(() => {
    axios
      .get(`/menus/menu-section/`)
      .then((response) => {
        setMenuSections(response.data);
        const menuId = response.data[0].menu;
        axios.get(`/menus/menu/${menuId}`).then((res) => setMenuData(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  let content = (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <Spinner />
    </div>
  );
  if (menuSections.length > 0 && menuData) {
    content = (
      <React.Fragment>
        <Header
          title={menuData.title}
          greeting={menuData.greeting}
          img={menuData.back_image}
        />

        <div className="row mt-sm-2 mt-0 min-vh-100 d-block">
          {menuSections.map((menuSection) => (
            <div
              className="col-12 mb-sm-2 pl-sm-2 pr-sm-2 p-0 overflow-hidden"
              key={menuSection.id}
            >
              <MenuSection id={menuSection.id} title={menuSection.title} />
            </div>
          ))}
        </div>
        <Button style={{ position: "fixed", left: 0, bottom: 0 }}>
          <i className="fa fa-bell-o" aria-hidden="true"></i>
          Ofisiant çağır
        </Button>
      </React.Fragment>
    );
  }

  return <div>{content}</div>;
}
