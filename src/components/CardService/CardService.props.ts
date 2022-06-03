import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IServiceCard } from '../../helpers/helpers.interface';

export interface ICardServiceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  service: IServiceCard;
}
