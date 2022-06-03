import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IPortfilioCard } from '../../helpers/helpers.interface';

export interface ICardPortfolioProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  project: IPortfilioCard;
}
