import cv from "../assets/files/CV_EN.pdf";

function importAll(r) {
  return r.keys().map(r);
 }
 
 const photosDirectory = require.context('../assets/img/photos', false, /\.(png|jpe?g|JPG|svg|webp)$/);
 const photos = importAll(photosDirectory);
 
 const drawingsDirectory = require.context('../assets/img/drawings', false, /\.(png|jpe?g|JPG|svg|webp)$/);
 const drawings = importAll(drawingsDirectory);
 

const content = {
    photoContent :{
        title: "Photo",
        images: photos,
      },
      drawingCOntent : {
        title: "Drawing",
        images: drawings, 
      },
      aboutContent : {
        title: "About",
        text: [
          "TRAINED as a full-stack developer, I am self-sufficient and naturally curious. With a strong blend of creativity and logic, I learn quickly and proactively. Challenges are essential to keep me stimulated and engaged.",
          "THIS React website was created as a side project so I can show the people who are interested my art, design and development abilities.",
          "Download my resume here:",
        ],
        resume: cv,
        contact: {
          email: {
            text: "email",
            url: "mailto:jerome@jlaflamme.com",
            icon: "https://img.icons8.com/fluency/48/000000/email-open.png",
          },
          github: {
            text: "github",
            url: "https://github.com/jerome-laflamme",
            icon: "https://img.icons8.com/fluency/48/000000/github.png",
          },
          linkedin: {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/j%C3%A9r%C3%B4me-laflamme-71a53a27/",
            icon: "https://img.icons8.com/fluency/48/000000/linkedin.png",
          },
        },
      },
    }

export default content;