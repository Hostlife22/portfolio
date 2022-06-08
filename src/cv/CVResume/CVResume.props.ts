import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICVResumeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isCV: boolean;
  scaleCV: () => void;
}
