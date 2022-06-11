import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { BiBook, BiCar, BiDumbbell, BiHeadphone } from 'react-icons/bi';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVInterests.module.css';
import { ICVInterestsProps } from './CVInterests.props';

const CVInterests = forwardRef(
  ({ className, ...props }: ICVInterestsProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.interests, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        {...props}>
        <CVTitle>Interests</CVTitle>
        <div className={cn(styles.interestsContainer, styles.bdGrid)}>
          <div className={styles.interestsContent}>
            <BiHeadphone />
            <span className={styles.interests}>Music</span>
          </div>
          <div className={styles.interestsContent}>
            <BiCar />
            <span className={styles.interests}>Travel</span>
          </div>
          <div className={styles.interestsContent}>
            <BiBook />
            <span className={styles.interests}>Read</span>
          </div>
          <div className={styles.interestsContent}>
            <BiDumbbell />
            <span className={styles.interests}>Fitness</span>
          </div>
        </div>
      </section>
    );
  },
);

export default CVInterests;
