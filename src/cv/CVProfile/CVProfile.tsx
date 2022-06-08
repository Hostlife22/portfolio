import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVProfile.module.css';
import { ICVProfileProps } from './CVProfile.props';

const CVProfile = forwardRef(
  ({ className, ...props }: ICVProfileProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const isCV = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.profile, styles.section, className, { [styles.cv]: isCV })}
        ref={ref}
        id="profile"
        {...props}>
        <CVTitle>Profile</CVTitle>
        <p className={styles.profileDescription}>
          I am a person, responsible with their work during working hours. Finish various technical
          and higher studies at large universities. I have several years of experience and
          achievements in the labor field.
        </p>
      </section>
    );
  },
);

export default CVProfile;
