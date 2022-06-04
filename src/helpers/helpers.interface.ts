import { ThemeColors } from '../features/theme/theme.interface';

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

export interface IServiceCard {
  icon: JSX.Element;
  title: string;
  description: string;
  id: number;
}

export interface IPortfilioCard {
  img: string;
  name: string;
  id: number;
}

export interface IColor {
  name: string;
  color: ThemeColors;
}
