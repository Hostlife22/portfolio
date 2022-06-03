export interface IMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
}

export interface IpersonalInfo {
  title: string;
  value: string;
}

export interface ISkill {
  name: string;
  percent: number;
}

export interface ICardItem {
  icon: JSX.Element;
  years: string;
  title: string;
  description: string;
  id: number;
}
