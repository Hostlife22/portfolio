import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICardItem } from '../../helpers/helpers.interface';

export interface ICardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  items: ICardItem[];
}
