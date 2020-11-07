import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import MenuSection from "../components/MenuSection";
import SideBar from "../components/Sidebar";

export default function App() {
  const [menuSections, setMenuSections] = useState([]);
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    axios
      .get("/menus/menu-section/")
      .then((response) => {
        setMenuSections(response.data);
        setActiveSectionId(response.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Head>
        <title>Menu App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Head>

      <main className="container-fluid p-3">
        <div className="row">
          <div className="col-6">
            <SideBar
              menuSections={menuSections}
              onSectionSelected={(id) => setActiveSectionId(id)}
              activeId={activeSectionId}
            />
          </div>
          <div className="col-6">
            <MenuSection sectionId={activeSectionId} />
          </div>
        </div>
      </main>
    </div>
  );
}
