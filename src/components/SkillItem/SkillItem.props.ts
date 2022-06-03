import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISkill } from '../../helpers/helpers.interface';

export interface ISkillItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skill: ISkill;
}
