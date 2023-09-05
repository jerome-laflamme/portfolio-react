import React, { useState } from "react";

const ProjectsAccordion = ({ title, content }, index) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? "-" : "+"}</div>
        <div>{title}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default ProjectsAccordion;
