import '../assets/main.css'
import me from "../assets/img/me.jpg";
import { motion } from "framer-motion";

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
      link: "mailto:jerome@jlaflamme.com"
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


  return (
    <div className="main-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="info">
        <img alt="Me" src={me} />
        <div>
          {listData.map((item, index) => {
            return (
              <a key={index} href={item.link} className='info-item'>
                <div className="info-icon">{item.icon}</div>
                <div className="info-text">{item.text}</div>
              </a>
            );
          })}
        </div>
      </motion.div>
      <div className="text-container">
        <h2>profil</h2>
        <hr />
        <div className='text-area'>
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
          <p className='bolder'>
            Expérience : React, Vue, CSS, HMTL,  C#, MySQL,
            NoSQL, Node.JS, Blender, Figma, Photoshop, Lightroom
          </p>
          {/* Three.JS,  Illustrator, After
            Effects, Premiere Pro*/}
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
              <p>Stagiare - Intégrateur/Developpeur web | 2021 - Présentement</p>
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


          <motion.div className="color-palette-container">
            <motion.span className="square dark-blue"></motion.span>
            <motion.span className='square light-blue'></motion.span>
            <motion.span className='square red'></motion.span>
            <motion.span className='square white'></motion.span>
          </motion.div>
        </div>
      </div>
    </div >
  );
}
