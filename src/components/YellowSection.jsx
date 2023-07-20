import me from "../assets/img/me.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CodeIcon from "@mui/icons-material/Code";
import CollectionsIcon from "@mui/icons-material/Collections";

export default function YellowSection() {
  const listData = [
    {
      icon: <PhoneIcon />,
      text: "(514) 884-9516",
    },
    {
      icon: <AlternateEmailIcon />,
      text: "jerome@jlaflamme.com",
    },
    {
      icon: <CodeIcon />,
      text: "github.com/jerome-laflamme",
    },
    {
      icon: <CollectionsIcon />,
      text: "croustine.xyz",
    },
  ];

  return (
    <div className="main-background">
      <div className="info">
        <img alt="Me" src={me} />
        <div>
          {listData.map((item, index) => {
            return (
              <div key={index} className="info-item">
                <div className="info-icon">{item.icon}</div>
                <div className="info-text">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-area">
      <h2>Profil</h2>
          <div>
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
            <p>
              Expérience : JS, TS, React, Vue, CSS, HMTL, Three.JS, C#, MySQL,
              MongoDB, Node.JS, Blender, Figma, Photoshop, Illustrator, After
              Effects, Premiere Pro
            </p>
            <div className="color-palette-container">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
      </div>
    </div>
  );
}