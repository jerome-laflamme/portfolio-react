import React from 'react'
import { motion } from "framer-motion";
import "../assets/main.css";

export default function Profil() {
    return (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
           className="text-area">
            <p>
              Développeur full-stack de formation, je me passionne pour l’art et
              le design.
            </p>
            <p>
              J’aime toucher à plusieurs domaines tels que la musique, la photo,
              les arts visuels, la modélisation 3D, le UI/UX Design, et le
              motion design. Je porte un grand intérêt aux nouvelles
              technologies et j'ai une soif de les apprendre. Les défis sont de
              mises pour me garder stimulé et intéressé.
            </p>
            <p className="bolder">
              Expérience : React, Vue, CSS, HMTL, C#, MySQL, NoSQL, Node.JS,
              Blender, Figma, Photoshop, Lightroom
            </p>
            {/* Three.JS*/}
            <div className="exp-container">
              <div className="exp">
                <h3>La Croix Bleue</h3>
                <p>Stagiare | Printemps 2023</p>
              </div>
              <div className="exp">
                <h3>À mon compte</h3>
                <p> Développeur web | 2021 - Présentement</p>
              </div>
              <div className="exp">
                <h3>Astropof Inc</h3>
                <p>
                  Stagiare - Intégrateur/Developpeur web | 2021 - Présentement
                </p>
              </div>
            </div>
            <div className="school-container">
              <div className="school">
                <p>Collège de Shawinigan - AEC Développement logiciel | 2023</p>
              </div>
              <div className="school">
                <p>Treehouse.com - Bootcamp front-end web | 2023</p>
              </div>
            </div>
          </motion.div>
    )
}