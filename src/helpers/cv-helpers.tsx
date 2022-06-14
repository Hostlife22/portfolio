import {
  BiAward,
  BiBook,
  BiBriefcaseAlt,
  BiHome,
  BiLinkExternal,
  BiReceipt,
  BiUser,
} from 'react-icons/bi';
import {
  ICVMenuItem,
  IEducationInfo,
  IExperenceInfo,
  IReferenceItem,
} from './cv-helpers.interface';

export const cvMenu: ICVMenuItem[] = [
  {
    route: 'home',
    name: 'Home',
    icon: <BiHome />,
  },
  {
    route: 'profile',
    name: 'Profile',
    icon: <BiUser />,
  },
  {
    route: 'education',
    name: 'Education',
    icon: <BiBook />,
  },
  {
    route: 'skills',
    name: 'Skills',
    icon: <BiReceipt />,
  },
  {
    route: 'experience',
    name: 'Experience',
    icon: <BiBriefcaseAlt />,
  },
  {
    route: 'certificates',
    name: 'Certificates',
    icon: <BiAward />,
  },
  {
    route: 'references',
    name: 'Pet projects',
    icon: <BiLinkExternal />,
  },
];

export const educationInfo: IEducationInfo[] = [
  {
    title: 'Computers, computer systems, and networks',
    studies: 'Grodno state Polytechnic College',
    years: '2015 - 2019',
  },
  {
    title: 'HTML/CSS developer',
    studies: 'Html academy',
    years: '2018 - 2019',
  },
  {
    title: 'Front-End Developer',
    studies: 'Gromcode University',
    years: '2021 - 2022',
  },
];

export const experienceInfo: IExperenceInfo[] = [
  {
    title: 'FRONT-END WEB DEVELOPER',
    company: 'From 2018 to 2019 | Freelance',
    description:
      'Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3.',
  },
  {
    title: 'Operator of automatic and semi-automatic lines',
    company: 'From 2018 to 2019 | Radiovolna',
    description:
      'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity. Set up the software of machine tools for the production of blanks from non-ferrous metal or non-ferrous metal alloy',
  },
  {
    title: 'REACT DEVELOPER',
    company: 'From 2021 to 2022 | Pet project development',
    description:
      'I have worked on many various projects as a web developer for the past one year. I have experience in both front- and backend development. I have programmed websites and web services both REST. My main strength lies in Javascript and CSS, more specifically in React with Redux, Next.js, SASS, LESS and CSS Modules.',
  },
];

export const references: IReferenceItem[] = [
  {
    title: 'Aggregator',
    description: 'Efficient search and comparison of online training courses.',
    email: 'sima.serafim2@mail.ru',
    appUrl: 'https://next-top-app-ten.vercel.app/',
    githubUrl: 'https://github.com/Hostlife22/next-top-app',
    skills: [
      'Next.js, TypeScript',
      'React-hook-form, framer-motion',
      'Axios, date-fns, Eslint, Stylelint',
    ],
  },
  {
    title: 'Youtube clone',
    description: 'Implemented Authorization, search, subscriptions. Youtube API requests.',
    email: 'sima.serafim2@mail.ru',
    appUrl: 'https://clone-4994c.web.app',
    githubUrl: 'https://github.com/Hostlife22/youtube-clone-app',
    skills: [
      'React, TypeScript, Redux-toolkit',
      'React-router-dom, Momentjs',
      'Styled-components, Firebase, Axios',
    ],
  },
];

export const opt = {
  filename: 'myResume.pdf',
  margin: 0,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
};
