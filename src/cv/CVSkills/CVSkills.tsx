import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import CVSkillData from '../CVSkillData/CVSkillData';
import styles from './CVSkills.module.css';
import { ICVSkillsProps } from './CVSkills.props';

const CVSkills = forwardRef(
  ({ className, ...props }: ICVSkillsProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.skills, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        id="skills"
        {...props}>
        <CVTitle>Skills</CVTitle>

        <div className={cn(styles.skillsContent, styles.bdGrid)}>
          <CVSkillData list={['Html', 'CSS', 'Sass', 'JavaScript']} />
          <CVSkillData list={['React', 'Next', 'Express', 'Mongodb']} />
        </div>
      </section>
    );
  },
);

export default CVSkills;
