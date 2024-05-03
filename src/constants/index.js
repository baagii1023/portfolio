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
  blackjack,
  cineflix,
  calculator,
  woostore,
  portfolio,
  country,
  linkedinlogo,
  githublogo,
  maillogo,
  bdw,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'WordPress',
    icon: wordpress,
  },
  {
    name: 'WooCommerce',
    icon: woocommerce,
  },
  {
    name: 'Shopify',
    icon: shopify,
  },
  
];

const programs = [
  {
    name: 'Github',
    icon: github,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'XD',
    icon: xd,
  },
  {
    name: 'Photoshop',
    icon: photoshop,
  },
  {
    name: 'Illustrator',
    icon: illustrator,
  },
  {
    name: 'VS Code',
    icon: visualstudiocode,
  },
];

const Interested = [
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Phython',
    icon: phython,
  },
  {
    name: 'Vue.js',
    icon: vue,
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'CineFlix',
    description: 'A Movie database using React API.',
    fulldescription: '',
    image: cineflix,
    demo: 'https://baagiiavirmd.com/CineFlix/',
    code: [{name: 'HTML 5',icon: html,},{name: 'CSS 3',icon: css,},{name: 'JavaScript',icon: javascript,},{name: 'React JS',icon: reactjs,},{name: 'SASS',icon: sass,},],
  },
  {
    id: 'project-2',
    name: 'BDW-Massage',
    description: 'Fully functional massage therapy place used WordPress with WooCommerce plugin.',
    image: bdw,
    demo: 'https://bdwmassage.bcitwebdeveloper.ca/',
    code: [{name: 'HTML 5',icon: html,},{name: 'CSS 3',icon: css,},{name: 'JavaScript',icon: javascript,},{name: 'React JS',icon: reactjs,},{name: 'SASS',icon: sass,},],
  },
  {
    id: 'project-3',
    name: 'woostore',
    description: 'Fully functional online store using WordPress with WooCommerce plugin.',
    image: woostore,
    demo: 'https://baagiiavirmd.com/woostore/',
    code: [{name: 'HTML 5',icon: html,},{name: 'CSS 3',icon: css,},{name: 'JavaScript',icon: javascript,},{name: 'React JS',icon: reactjs,},{name: 'SASS',icon: sass,},],
  },
  {
    id: 'project-4',
    name: 'Fuel cost calculator',
    description: 'Web app that can calculate your trips fuel cost.',
    image: calculator,
    demo: 'https://baagiiavirmd.com/trip-calculator/',
    code: [{name: 'HTML 5',icon: html,},{name: 'CSS 3',icon: css,},{name: 'JavaScript',icon: javascript,},{name: 'React JS',icon: reactjs,},{name: 'SASS',icon: sass,},],
  },
  {
    id: 'project-5',
    name: 'Country Website',
    description: 'Country Website.',
    image: country,
    demo: 'https://baagiiavirmd.com/Country-website/index.html',
    code: [{name: 'HTML 5',icon: html,},{name: 'CSS 3',icon: css,},{name: 'JavaScript',icon: javascript,},{name: 'React JS',icon: reactjs,},{name: 'SASS',icon: sass,},],
  },
]

const social = [
  {
    icon: linkedinlogo,
    demo: 'https://www.linkedin.com/in/byambabayar-avirmed/',
  },
  {
    icon: githublogo,
    demo: 'https://github.com/baagii1023',
  },
  {
    icon: maillogo,
    demo: 'mailto:baagii1993@yahoo.com',
  },
]




export { services, programs, technologies, Interested, projects, social };
