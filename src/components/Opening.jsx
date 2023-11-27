import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../assets/main.css";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [gradientAngle, setGradientAngle] = useState(0);

  const calculateGradient = ev => {
    const x = ev.clientX;
    const y = ev.clientY;
    const angle = Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) * 180 / Math.PI;
    setGradientAngle(angle);
  };

  useEffect(() => {
    window.addEventListener("mousemove", calculateGradient);

    return () => {
      window.removeEventListener("mousemove", calculateGradient);
    };
  }, []);

  return (
    <>
      <h1>Jerome Laflamme</h1>
      <div className="container">
        <p className="the">the</p>
        <p className="medium">medium</p>
        <p
          // className="echoes"
          style={{
            position: "absolute",
            left: "1111px",
            top: "237px",
            fontWeight: 100,
            fontSize: "50px",
            background: `linear-gradient(${gradientAngle}deg, #000000 -0.99%, rgba(0, 0, 0, 0) 94.06%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          echoes
        </p>
        <p className="louder">louder</p>
        <p className="than_the">than the</p>
        <p className="message">message</p>
        <p className="down_arrow">
          <KeyboardArrowDownIcon fontSize="large" />
        </p>
      </div>
    </>
  );
};

export default MainPage;
