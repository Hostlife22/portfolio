import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface IFormData {
  email: string;
  message: string;
  name: string;
  subject: string;
}
