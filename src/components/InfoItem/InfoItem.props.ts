import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IpersonalInfo } from '../../helpers/helpers.interface';

export interface IInfoItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: IpersonalInfo;
}
