import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
