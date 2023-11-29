import me from "../assets/img/me.jpg";
import cv from "../assets/files/CV_EN.pdf";

function importAll(r) {
  return r.keys().map(r);
 }
 
 const photosDirectory = require.context('../assets/img/photos', false, /\.(png|jpe?g|JPG|svg)$/);
 const photos = importAll(photosDirectory);
 
 const drawingsDirectory = require.context('../assets/img/drawings', false, /\.(png|jpe?g|svg)$/);
 const drawings = importAll(drawingsDirectory);
 

const content = {
    photoContent :{
        title: "Photos",
        images: photos,
      },
      drawingCOntent : {
        title: "Drawings",
        images: drawings, 
      },
      aboutContent : {
        title: "About",
        photo: me,
        text: [
          "TRAINED as a full-stack developer, I am self-sufficient and naturally curious. With a strong blend of creativity and logic, I learn quickly and proactively. Challenges are essential to keep me stimulated and engaged.",
          "THIS React website was created as a side project so I can show the people who are interested my art, design and development abilities.",
          "Download my resume here:",
        ],
        resume: cv,
        contact: {
          email: {
            text: "jerome@jlaflamme.com",
            icon: "https://img.icons8.com/fluency/48/000000/email-open.png",
          },
          phone: {
            text: "+1 514 999 9999",
            icon: "https://img.icons8.com/fluency/48/000000/phone.png",
          },
          github: {
            text: "jlaflamme",
            icon: "https://img.icons8.com/fluency/48/000000/github.png",
          },
          linkedin: {
            text: "jerome-laflamme",
            icon: "https://img.icons8.com/fluency/48/000000/linkedin.png",
          },
        },
      },
    }

export default content;