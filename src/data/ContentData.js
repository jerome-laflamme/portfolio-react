import me from "../assets/img/me.jpg";
import cv from "../assets/files/CV_EN.pdf";

const content = {
    photoContent :{
        title: "Photo",
        images: [
          "https://images.unsplash.com/photo-1634135904710-0e2e4e1c6a9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
          "https://images.unsplash.com/photo-1634135904710-0e2e4e1c6a9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
          "https://images.unsplash.com/photo-1634135904710-0e2e4e1c6a9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        ],
      },
      drawingCOntent : {
        title: "Drawing",
        images: [
          "https://images.unsplash.com/photo-1634135904710-0e2e4e1c6a9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
          "https://images.unsplash.com/photo-1634135904710-0e2e4e1c6a9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
          "https://images.unsplash.com/photo-1634135904710-0e2e4e1c6a9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80",
        ],
      },
      aboutContent : {
        title: "About",
        photo: me,
        text: [
          "TRAINED as a full-stack developer, I am self-sufficient and naturally curious. With a strong blend of creativity and logic, I learn quickly and proactively. Challenges are essential to keep me stimulated and engaged.",
          "THIS page was created as a project so I can show the people who are interested my art, design and development abilities.",
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