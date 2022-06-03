import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICardItem } from '../../helpers/helpers.interface';

export interface ICardItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ICardItem;
}
