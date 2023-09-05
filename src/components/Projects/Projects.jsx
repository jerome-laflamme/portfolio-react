import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

import ProjectsAccordion from "./ProjectsAccordion";

export default function Projects() {
  const accordionData = [
    { id: 1, title: 'Site custom', content: 'Content for section 1' },
    { id: 2, title: 'Projet JS', content: 'Content for section 2' },
    { id: 3, title: 'Projet Modélisation', content: 'Content for section 3' },
    { id: 4, title: 'Photos', content: 'Content for section 4' },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="projects-area"
    >
      <div className="projects-accordion">
        {accordionData.map(({id, title, content }) => (
          <ProjectsAccordion key={id} title={title} content={content} />
        ))}
      </div>
    </motion.div>
  );
}
