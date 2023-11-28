import React from "react";

const Name = ({ nameFontSize, nameColor }) => {
  return (
    <h1
      style={{
        fontSize: nameFontSize,
        color: nameColor,
      }}
    >
      Jerome Laflamme
    </h1>
  );
};

export default Name;
