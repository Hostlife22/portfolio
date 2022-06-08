import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ILinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  btn?: boolean;
  type?: 'submit';
  target?: '_blank' | '_self' | '_parent' | '_top';
}
