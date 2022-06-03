import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ILinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}
