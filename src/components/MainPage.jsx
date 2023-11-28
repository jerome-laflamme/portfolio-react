import React, { useState, useEffect } from "react";
import SelectionMenu from "./SelectionMenu";
import Hero from "./Hero";

import "../assets/main.css";

const MainPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSelection, setShowSelection] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const phraseFontSize = (windowWidth / 1440) * 70;
  const nameFontSize = (windowWidth / 1440) * 50;
  const selectionFontSize = (windowWidth / 1440) * 80;

  const selectionMenuToggle = () => setShowSelection(!showSelection);


  return (
    <>
      <Hero
        phraseFontSize={phraseFontSize}
        selectionMenuToggle={selectionMenuToggle}
        nameFontSize={nameFontSize}
      />
       <SelectionMenu
        selectionMenuToggle={selectionMenuToggle}
        selectionFontSize={selectionFontSize}
        nameFontSize={nameFontSize}
        showSelection={showSelection}
      />
    </>
  );
};

export default MainPage;
