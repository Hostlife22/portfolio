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
  subtitle: string;
  title: string;
  phone: string;
  email: string;
}
