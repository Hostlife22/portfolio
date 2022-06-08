import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICVTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  decoration?: boolean;
}
