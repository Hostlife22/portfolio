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
    name: 'References',
    icon: <BiLinkExternal />,
  },
];

export const educationInfo: IEducationInfo[] = [
  {
    title: 'MASTER OF DESIGN',
    studies: 'University od Studies',
    years: '2010 - 2015',
  },
  {
    title: 'WEB DEVELOPER',
    studies: 'Institute Studies',
    years: '2016 - 2019',
  },
  {
    title: 'MASTER IN UI/UX',
    studies: 'Institute Studies',
    years: '2019 - 2022',
  },
];

export const experienceInfo: IExperenceInfo[] = [
  {
    title: 'MASTER OF DESIGN',
    company: 'From 2013 to 2015 | Tech Soft',
    description:
      'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity',
  },
  {
    title: 'UI / UX DESIGN AREA',
    company: 'From 2017 to 2019 | Adobe Inc',
    description:
      'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity',
  },
  {
    title: 'MOBILE APPLICATION DEVELOPER',
    company: 'From 2019 to 2022 | App Tech',
    description:
      'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity',
  },
];

export const references: IReferenceItem[] = [
  {
    subtitle: 'Sr. Director',
    title: 'Mr. Clay Do',
    phone: '+375 29 740 1127',
    email: 'sima.serafim2@mail.ru',
  },
  {
    subtitle: 'Mag. Developer',
    title: 'Mr. Robbinson Bass',
    phone: '+375 29 740 1127',
    email: 'sima.serafim2@mail.ru',
  },
];

export const opt = {
  filename: 'myResume.pdf',
  margin: 0,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
};
