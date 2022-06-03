import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
