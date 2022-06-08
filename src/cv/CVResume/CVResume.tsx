import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import {
  CVCertificate,
  CVEducation,
  CVExperience,
  CVHome,
  CVInterests,
  CVLanguages,
  CVProfile,
  CVReferences,
  CVSkills,
  CVSocial,
} from '..';
import styles from './CVResume.module.css';
import { ICVResumeProps } from './CVResume.props';

const CVResume = forwardRef(
  (
    { className, isCV, scaleCV, ...props }: ICVResumeProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <main
        className={cn(styles.oneMain, styles.bdContainer, className, { [styles.cv]: isCV })}
        {...props}>
        <div className={styles.resume} ref={ref}>
          <div className={styles.resumeLeft}>
            <CVHome handler={scaleCV} isCV />
            <CVSocial isCV />
            <CVProfile isCV />
            <CVEducation isCV />
            <CVSkills isCV />
          </div>
          <div className={styles.resumeRight}>
            <CVExperience isCV />
            <CVCertificate isCV />
            <CVReferences isCV />
            <CVLanguages isCV />
            <CVInterests isCV />
          </div>
        </div>
      </main>
    );
  },
);

export default CVResume;
