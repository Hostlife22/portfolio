import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IReferenceItem } from '../../helpers/cv-helpers.interface';

export interface ICVReferenceItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: IReferenceItem;
}
