import {
  FaBriefcase,
  FaCalendar,
  FaComments,
  FaHome,
  FaLaptopCode,
  FaListUl,
  FaMobileAlt,
  FaPalette,
  FaUserAlt,
} from 'react-icons/fa';
import { ThemeColors } from '../features/theme/theme.interface';
import {
  ImgCrypto,
  ImgDisney,
  ImgFit,
  ImgNetflix,
  ImgOwl,
  ImgTesla,
  ImgTravelya,
  ImgVideoBlog,
  ImgYoutube,
} from '../images';
import {
  ICardItem,
  IColor,
  IMenuItem,
  IpersonalInfo,
  IPortfilioCard,
  IServiceCard,
  ISkill,
} from './helpers.interface';

export const menu: IMenuItem[] = [
  {
    route: '/',
    name: 'Home',
    icon: <FaHome />,
  },
  {
    route: '/about',
    name: 'About',
    icon: <FaUserAlt />,
  },
  {
    route: '/services',
    name: 'Services',
    icon: <FaListUl />,
  },
  {
    route: '/portfolio',
    name: 'Portfolio',
    icon: <FaBriefcase />,
  },
  {
    route: '/contact',
    name: 'Contact',
    icon: <FaComments />,
  },
];

export const personalInfo: IpersonalInfo[] = [
  {
    title: 'Birthday',
    value: '3 feb 2000',
  },
  {
    title: 'Age',
    value: '22',
  },
  {
    title: 'Email',
    value: 'sima.serafim2@mail.ru',
  },
  {
    title: 'Phone',
    value: '+375 29 740 1127',
  },
  {
    title: 'City',
    value: 'Grodno',
  },
  {
    title: 'Website',
    value: 'https://www.linkedin.com/in/serafim-sen-962958241/',
  },
];

export const skills: ISkill[] = [
  {
    name: 'CSS',
    percent: 76,
  },
  {
    name: 'JavaScript',
    percent: 80,
  },
  {
    name: 'TypeScript',
    percent: 78,
  },
  {
    name: 'React',
    percent: 88,
  },
  {
    name: 'Next',
    percent: 82,
  },
  {
    name: 'HTML',
    percent: 92,
  },
  {
    name: 'Bootstrap',
    percent: 76,
  },
];

export const education: ICardItem[] = [
  {
    icon: <FaCalendar />,
    years: '2015 - 2019',
    title: 'Computers, computer systems, and networks',
    description:
      'I graduated from the Grodno State Polytechnic College. I have comprehensive knowledge in the field of both software and hardware of computer technology',
    id: 1,
  },
  {
    icon: <FaCalendar />,
    years: '2018 - 2019',
    title: 'HTML/CSS developer - HTML Academy',
    description:
      'Learning to create web pages. Creating a website according to a design layout, developing an adaptive and responsive layout for various devices using HTML, CSS.',
    id: 2,
  },
  {
    icon: <FaCalendar />,
    years: '2021 - 2022',
    title: 'Front-End Developer - Gromcode University',
    description:
      'Learning to develop front-end applications based on Javascript and, in particular, the React library. Various aspects of Redux and using it to develop applications based on React-Redux, as well as using Fetch for client-server communication and using the REST API on the server side.',
    id: 3,
  },
  {
    icon: <FaCalendar />,
    years: 'from 2021 untill today',
    title: '',
    description: 'Learning new technologies ',
    id: 4,
  },
];
export const experience: ICardItem[] = [
  {
    icon: <FaCalendar />,
    years: '2018 - 2019',
    title: 'Operator of automatic and semi-automatic lines',
    description:
      'Working at Radiovolna OJSC dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity. The work consisted in setting up the software of machine tools for the production of blanks from non-ferrous metal or non-ferrous metal alloy',
    id: 1,
  },
  {
    icon: <FaCalendar />,
    years: '2018 - 2019',
    title: 'Front-end WEB Developer - Freelance',
    description:
      'Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3.',
    id: 2,
  },
  {
    icon: <FaCalendar />,
    years: '2021 - 2022',
    title: 'Front-End Developer - Pet project development',
    description:
      'I have worked on many various projects as a web developer for the past one year. I have experience in both front- and backend development. I have programmed  websites and web services both REST. My main strength lies in Javascript and CSS, more specifically in React with Redux, Next.js, SASS, LESS and CSS Modules.                            ',
    id: 3,
  },
];

export const services: IServiceCard[] = [
  {
    icon: <FaMobileAlt />,
    title: 'HTML & CSS Responsive Web Design',
    description:
      'Responsive website development where CSS is at the heart of front end development along with JavaScript and HTML',
    id: 1,
  },
  {
    icon: <FaLaptopCode />,
    title: 'React JS Development',
    description:
      'ReactJS is renowned for its extensibility, adjustability, and convenience. Application development for your business, including  mobile application user interfaces',
    id: 2,
  },
  {
    icon: <FaPalette />,
    title: 'Node.js Development',
    description:
      "Develop dynamic web page content before the page is sent to the end user's web browser, using event-driven programming to communicate with web servers through speedy JavaScript interpreters",
    id: 3,
  },
];

export const portfolio: IPortfilioCard[] = [
  {
    img: ImgVideoBlog,
    name: 'Project 9',
    id: 9,
    githubLink: 'https://github.com/Hostlife22/video-blog',
    projectLink: 'https://videoapp-blog.web.app/',
  },
  {
    img: ImgOwl,
    name: 'Project 2',
    id: 2,
    githubLink: 'https://github.com/Hostlife22/next-top-app',
    projectLink: 'https://next-top-app-ten.vercel.app/',
  },
  {
    img: ImgYoutube,
    name: 'Project 5',
    id: 5,
    githubLink: 'https://github.com/Hostlife22/youtube-clone-app',
    projectLink: 'https://clone-4994c.web.app',
  },
  {
    img: ImgCrypto,
    name: 'Project 3',
    id: 3,
    githubLink: 'https://github.com/Hostlife22/cryptocurrency',
    projectLink: 'https://eclectic-buttercream-17464e.netlify.app/',
  },
  {
    img: ImgFit,
    name: 'Project 8',
    id: 8,
    githubLink: 'https://github.com/Hostlife22/fit-club',
    projectLink: 'https://luxury-chebakia-bb357f.netlify.app/',
  },
  {
    img: ImgTesla,
    name: 'Project 6',
    id: 6,
    githubLink: 'https://github.com/Hostlife22/tesla-clone-app',
    projectLink: 'https://angry-sinoussi-fee981.netlify.app/',
  },
  {
    img: ImgTravelya,
    name: 'Project 7',
    id: 7,
    githubLink: 'https://github.com/Hostlife22/react-tailwind-website',
    projectLink: 'https://peaceful-rosalind-8f71ec.netlify.app/',
  },
  {
    img: ImgDisney,
    name: 'Project 10',
    id: 10,
    githubLink: 'https://github.com/Hostlife22/disney-clone-app',
    projectLink: 'https://disney-clone-43d3c.web.app/',
  },
];

export const colors: IColor[] = [
  {
    name: 'One',
    color: ThemeColors.Red,
  },
  {
    name: 'Two',
    color: ThemeColors.Orange,
  },
  {
    name: 'Three',
    color: ThemeColors.Green,
  },
  {
    name: 'Four',
    color: ThemeColors.Blue,
  },
  {
    name: 'Five',
    color: ThemeColors.Purple,
  },
];

export const tags: string[] = [
  'HTML5',
  'CSS3',
  'Javascript',
  'ES2015',
  'ES2016',
  'React',
  'Next',
  'SASS',
  'LESS',
  'Github',
  'Webpack',
  'Gulp',
  'Babel',
  'Bootstrap',
  'Node',
  'Git',
  'mongoDb',
  'Express',
  'Eslint',
  'Stylelint',
  'Prettier',
];
