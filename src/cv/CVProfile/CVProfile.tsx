import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVProfile.module.css';
import { ICVProfileProps } from './CVProfile.props';

const CVProfile = forwardRef(
  ({ className, ...props }: ICVProfileProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.profile, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        id="profile"
        {...props}>
        <CVTitle>Profile</CVTitle>
        <p className={styles.profileDescription}>
          Hello. I am a person, responsible with their work during working hours. I&apos;m
          interested in design and programming. I like to work on projects that entertain and
          inform.
        </p>
      </section>
    );
  },
);

export default CVProfile;
