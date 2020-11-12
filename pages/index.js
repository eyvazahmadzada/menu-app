import React, { useEffect, useState } from "react";
import axios from "../axios";
import MenuSection from "../components/MenuSection";
import SideBar from "../components/Sidebar";

export default function Home() {
  const [menuSections, setMenuSections] = useState([]);
  const [activeSectionData, setActiveSectionData] = useState([]);
  const [activeSectionId, setActiveSectionId] = useState([]);

  useEffect(() => {
    axios
      .get("/menus/menu-section/")
      .then((response) => {
        setMenuSections(response.data);
        setActiveSectionData(response.data[0]);
        setActiveSectionId(response.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  const sectionChangedHandler = (sectionId) => {
    if (localStorage.getItem(sectionId)) {
      const updatedSectionData = JSON.parse(localStorage.getItem(sectionId));
      setActiveSectionData(updatedSectionData);
    } else {
      axios
        .get(`/menus/menu-section/${sectionId}/items/`)
        .then((response) => {
          const updatedSectionData = response.data.menu_items;
          localStorage.setItem(sectionId, JSON.stringify(updatedSectionData));
          setActiveSectionData(updatedSectionData);
        })
        .catch((err) => console.log(err));
    }
    setActiveSectionId(sectionId);
  };

  return (
    <div>
      <div className="row header flex-column justify-content-center align-items-center">
        <h1>Namli kebap menu</h1>
        <p>Afiyet olsun!</p>
      </div>
      <div className="row main p-3">
        <div className="col-lg-3 col-md-4">
          <SideBar
            menuSections={menuSections}
            onSectionSelected={sectionChangedHandler}
            activeId={activeSectionId}
          />
        </div>
        <div className="col-lg-9 col-md-8">
          <div className="search-bar d-flex flex-row">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
          <MenuSection sectionData={activeSectionData} />
        </div>
      </div>

      <style jsx>{`
        .header {
          position: relative;
          background-color: rgb(0, 0, 0, 0.6);
          color: white;
          height: 40vh;
        }

        .header::after {
          position: absolute;
          display: block;
          content: "";
          background-image: url("/home.jpg");
          background-size: cover;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          z-index: -1;
        }
        .main {
          background-color: whitesmoke;
          min-height: 60vh;
        }
      `}</style>
    </div>
  );
}
