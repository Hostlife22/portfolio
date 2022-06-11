export interface ICVMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
}

export interface IEducationInfo {
  title: string;
  studies: string;
  years: string;
}

export interface IExperenceInfo {
  title: string;
  company: string;
  description: string;
}

export interface IReferenceItem {
  githubUrl: string;
  appUrl: string;
  title: string;
  description: string;
  email: string;
  skills: string[];
}
