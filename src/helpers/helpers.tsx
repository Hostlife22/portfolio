import {
  FaBriefcase,
  FaBullhorn,
  FaCalendar,
  FaCode,
  FaComments,
  FaHome,
  FaLaptopCode,
  FaListUl,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaUserAlt,
} from 'react-icons/fa';
import { ThemeColors } from '../features/theme/theme.interface';
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
    title: 'Website',
    value: 'www.domain.com',
  },
  {
    title: 'Email',
    value: 'sima.serafim2@mail.ru',
  },
  {
    title: 'Degree',
    value: 'CS',
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
    title: 'Freelance',
    value: 'Available',
  },
];

export const skills: ISkill[] = [
  {
    name: 'CSS',
    percent: 76,
  },
  {
    name: 'JS',
    percent: 86,
  },
  {
    name: 'PHP',
    percent: 66,
  },
  {
    name: 'HTML',
    percent: 96,
  },
  {
    name: 'Bootstrap',
    percent: 76,
  },
];

export const education: ICardItem[] = [
  {
    icon: <FaCalendar />,
    years: '2013 - 2015',
    title: 'Master in Computer Science',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 1,
  },
  {
    icon: <FaCalendar />,
    years: '2013 - 2015',
    title: 'Master in Computer Science',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 2,
  },
  {
    icon: <FaCalendar />,
    years: '2013 - 2015',
    title: 'Master in Computer Science',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 3,
  },
];

export const services: IServiceCard[] = [
  {
    icon: <FaMobileAlt />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 1,
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 2,
  },
  {
    icon: <FaPalette />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 3,
  },
  {
    icon: <FaCode />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 4,
  },
  {
    icon: <FaSearch />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 5,
  },
  {
    icon: <FaBullhorn />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia quae unde fugiat, tempora placeat at maiores ea impedit aspernatur labore numquam autem cum beatae.',
    id: 6,
  },
];

export const portfolio: IPortfilioCard[] = [
  {
    img: 'https://via.placeholder.com/300x200',
    name: 'Project 2',
    id: 2,
  },
  {
    img: 'https://via.placeholder.com/300x200',
    name: 'Project 3',
    id: 3,
  },
  {
    img: 'https://via.placeholder.com/300x200',
    name: 'Project 4',
    id: 4,
  },
  {
    img: 'https://via.placeholder.com/300x200',
    name: 'Project 5',
    id: 5,
  },
  {
    img: 'https://via.placeholder.com/300x200',
    name: 'Project 6',
    id: 6,
  },
  {
    img: 'https://via.placeholder.com/300x200',
    name: 'Project 7',
    id: 7,
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
