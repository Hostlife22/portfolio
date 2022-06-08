import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICVHomeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  handler: () => void;
}
