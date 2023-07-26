import '../assets/main.css'
import me from "../assets/img/me.jpg";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CodeIcon from "@mui/icons-material/Code";
import CollectionsIcon from "@mui/icons-material/Collections";


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
    {
      icon: <CollectionsIcon />,
      text: "croustine.xyz",
      link: "croustine.xyz",
    },
  ];

  return (
    <div className="main-background">
      <div className="info">
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
      </div>
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
            Expérience : JS, TS, React, Vue, CSS, HMTL, Three.JS, C#, MySQL,
            MongoDB, Node.JS, Blender, Figma, Photoshop, Illustrator, After
            Effects, Premiere Pro
          </p>
          <div className="color-palette-container">
            <span className="square dark-blue"></span>
            <span className='square light-blue'></span>
            <span className='square red'></span>
            <span className='square white'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
