import {
  frontend,
  backend,
  ux,
  javascript,
  php,
  html,
  css,
  reactjs,
  mysql,
  tailwind,
  github,
  wordpress,
  sass,
  figma,
  xd,
  photoshop,
  illustrator,
  woocommerce,
  shopify,
  visualstudiocode,
  nextjs,
  phython,
  vue,
  npm,
  cineflix,
  cineflixbw,
  webteck,
  webteckbw,
  woostore,
  woostorebw,
  sushi,
  sushibw,
  linkedinlogo,
  githublogo,
  maillogo,
  bdw,
  bdwbw,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "WooCommerce",
    icon: woocommerce,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
];

const programs = [
  {
    name: "Github",
    icon: github,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "XD",
    icon: xd,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "VS Code",
    icon: visualstudiocode,
  },
];

const Interested = [
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Phython",
    icon: phython,
  },
  {
    name: "Vue.js",
    icon: vue,
  },
];

const projects = [
  {
    id: "project-1",
    name: "CineFlix",
    description: "A Movie database using React API.",
    fulldescription: `CineFlix is a dynamic movie database application built using ReactJS, HTML5, CSS3, and JavaScript. It serves as a platform for users to explore various movies, view their details, and discover new ones. With a sleek and intuitive user interface, CineFlix offers a seamless browsing experience for movie enthusiasts of all kinds.
    
    My key goal in building this project was to enhance my understanding of RESTful APIs and to apply and reinforce the React concepts I've learned in class. Through CineFlix, I aimed to gain practical experience in integrating APIs with React components and mastering essential frontend development techniques.`,
    image: cineflix,
    imagebw: cineflixbw,
    demo: "https://baagiiavirmd.com/CineFlix/",
    code: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React JS", icon: reactjs },
      { name: "SASS", icon: sass },
      { name: "npm", icon: npm },
      { name: "Figma", icon: figma },
      { name: "PS", icon: photoshop },
      { name: "GitHub", icon: github },
    ],
  },
  {
    id: "project-2",
    name: "BDW-Massage",
    description: "Fully functional massage therapy place used WordPress with WooCommerce plugin.",
    fulldescription: "BDW-Massage is a fully functional massage therapy place website built using WordPress with the WooCommerce plugin. It offers a seamless experience for both customers and administrators, providing an easy-to-use platform for booking massage appointments and purchasing related products. BDWMassage is a website for users to book an appointment for various services with its own specialty therapist depending upon their availability, ensuring personalized care and attention for every client.",
    image: bdw,
    imagebw: bdwbw,
    demo: "https://baagiiavirmd.com/bdw-massage/",
    code: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "WordPress", icon: wordpress },
      { name: "Woo", icon: woocommerce },
      { name: "SASS", icon: sass },
      { name: "JavaScript", icon: javascript },
      { name: "PHP", icon: php },
      { name: "npm", icon: npm },
      { name: "Figma", icon: figma },
      { name: "GitHub", icon: github },
    ],
  },
  {
    id: "project-3",
    name: "Step Up Marketing",
    description: "Step Up Marketing company's responsive website built with HTML 5, JavaScript, Tailwind CSS, Yarn,and Gulp.",
    fulldescription: "The Step Up Marketing website is a modern, fully responsive, and visually appealing digital platform built using the latest web development technologies, including HTML5, JavaScript, Tailwind CSS, Yarn, and Gulp. The website is designed to provide an exceptional user experience across all devices, whether desktop, tablet, or mobile, ensuring seamless navigation and accessibility.",
    image: woostore,
    imagebw: woostorebw,
    demo: "https://thestepupmarketing.com/",
    code: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React JS", icon: reactjs },
      { name: "Tailwind", icon: tailwind },
      { name: "GitHub", icon: github },
    ],
  },
  {
    id: "project-4",
    name: "WebTeck",
    description: "Dynamic website of our company called WebTeck, our website was developed using React, Tailwind CSS, and a headless CMS with WordPress in the backend. ",
    fulldescription: "WebTeck is a dynamic company specializing in the development of various types of websites. Our services include web design, logo design, and SEO optimization. We aim to provide comprehensive solutions to enhance your online presence and drive business growth. Our experienced team is dedicated to delivering high-quality, customized web solutions tailored to meet your specific needs.",
    image: webteck,
    imagebw: webteckbw,
    demo: "https://www.webteck.ca/",
    code: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "Tailwind", icon: tailwind },
      { name: "WordPress", icon: wordpress },
      { name: "React", icon: reactjs },
      { name: "JavaScript", icon: javascript },
      { name: "GitHub", icon: github },
    ],
  },
  {
    id: "project-5",
    name: "Roku Sushi Website",
    description: "Roku Sushi Website developed using Next.js.",
    fulldescription: "A Dynamic website template for Sushi restaurants.",
    image: sushi,
    imagebw: sushibw,
    demo: "https://roku-sushi.vercel.app/",
    code: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "GitHub", icon: github },
    ],
  },
];

const social = [
  {
    icon: linkedinlogo,
    demo: "https://www.linkedin.com/in/byambabayar-avirmed/",
  },
  {
    icon: githublogo,
    demo: "https://github.com/baagii1023",
  },
  {
    icon: maillogo,
    demo: "mailto:baagii1993@yahoo.com",
  },
];

export { services, programs, technologies, Interested, projects, social };
