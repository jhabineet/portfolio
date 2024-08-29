import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

// export const LINKS = [
//   { id: "projects", name: "projects" },
//   { id: "about", name: "about" },
//   { id: "experience", name: "experience" },
//   { id: "contact", name: "Contact" },
// ];

export const MARQUEE_TEXT = " React, Express.js, Node, MongoDb, Tailwind, MySql, Javascript, Django, Redis,  ";

export const PROJECTS = [
  {
    id: 1,
    title: "Movie Recommender System",
    description:
      "A full-featured Movie Recommender System website built with Streamlit(Python) and Machine Learning.",
    imgSrc: project1,
    link: "https://github.com/jhabineet/Movie-recommend-system",
  },
  {
    id: 2,
    title: "Nearby-Tracker",
    description:
      "A nearby tracking application with real-time upadate.",
    imgSrc: project2,
    link: "https://github.com/jhabineet/nearby-tracker",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://github.com/jhabineet/portfolio",
  },
  {
    id: 4,
    title: "Let-s-Game-on",
    description:
      "A Bubble Game to score as many runs in stipulated time. ",
    imgSrc: project4,
    link: "https://github.com/jhabineet/Let-s-Game-on",
  },
  {
    id: 5,
    title: "Password Generator",
    description: "A password generator tool to generate a short password depending upon your choice.",
    imgSrc: project5,
    link: "https://github.com/jhabineet/passGenerator",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An online learning platform offering various courses and resources.",
    imgSrc: project6,
    link: "https://example.com/online-learning-platform",
  },
  {
    id: 7,
    title: "Ig-reels",
    description: "A mobile application to watch and post instagram reels.",
    imgSrc: project7,
    link: "https://example.com/fitness-tracker",
  },
  {
    id: 8,
    title: "Recipe App",
    description: "An app for browsing and saving various cooking recipes.",
    imgSrc: project8,
    link: "https://example.com/recipe-app",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description:
      "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project9,
    link: "https://jhabineet.github.io/weather_repo",
  },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Google Developer Student CLub - JISCE ( Present )",
    role: "MERN DEVELOPER",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Mavenwit ( Ex-Intern )",
    role: "FRONTEND DEVELOPER",
    year: "07/2021 - 10/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
  {
    company: "Pehchaan - The Street School ( Ex-Intern )",
    role: "WEBSITE DEVELOPER",
    year: "02/2023 - 08/2023",
    description:
      "Implemented user interfaces for web applications using JavaScript. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100083220318919",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/bineet______jha___/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Bineetjha30",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/jhabineet",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bineetjha246338/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "jhabineet0@gmail.com",
  phone: "(+91 760-588-7369)",
};
