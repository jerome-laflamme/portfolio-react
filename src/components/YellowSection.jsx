import "../assets/main.css";
import me from "../assets/img/me.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Projects from "./Projects/Projects";
import Profil from "./Profil";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CodeIcon from "@mui/icons-material/Code";
// import CollectionsIcon from "@mui/icons-material/Collections";

export default function YellowSection() {
  const listData = [
    {
      icon: <PhoneIcon />,
      text: "(514) 884-9516",
      link: "tel:5148849516",
    },
    {
      icon: <AlternateEmailIcon />,
      text: "jerome@jlaflamme.com",
      link: "mailto:jerome@jlaflamme.com",
    },
    {
      icon: <CodeIcon />,
      text: "github.com/jerome-laflamme",
      link: "github.com/jerome-laflamme",
    },
    // {
    //   icon: <CollectionsIcon />,
    //   text: "croustine.xyz",
    //   link: "croustine.xyz",
    // },
  ];

  const [contentSelector, setContentSelector] = useState("profil");

  return (
    <div className="">
    <div className="main-background">
      <div className="info">
        <img alt="Me" src={me} />
        <div>
          {listData.map((item, index) => {
            return (
              <a key={index} href={item.link} className="info-item">
                <div className="info-icon">{item.icon}</div>
                <div className="info-text">{item.text}</div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-container">
        <div className="content-selector">
          <h2
            className={contentSelector === "profil" ? "active" : ""}
            onClick={() => setContentSelector("profil")}
          >
            profil
          </h2>
          <h2
            className={contentSelector === "projets" ? "active" : ""}
            onClick={() => setContentSelector("projets")}
          >
            projets
          </h2>
        </div>

        <hr />
        {contentSelector === "profil" ? <Profil /> : <Projects />}
      </div>
      </div>
      <motion.div className="color-palette-container">
        <motion.span className="square dark-blue"></motion.span>
        <motion.span className="square light-blue"></motion.span>
        <motion.span className="square red"></motion.span>
        <motion.span className="square white"></motion.span>
      </motion.div>
    </div>
  );
}
