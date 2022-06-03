import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
