import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { educationInfo } from '../../helpers/cv-helpers';
import { useAppSelector } from '../../hooks';
import styles from './CVEducation.module.css';
import { ICVEducationProps } from './CVEducation.props';

const CVEducation = forwardRef(
  ({ className, ...props }: ICVEducationProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);

    return (
      <section
        className={cn(styles.education, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        id="education"
        {...props}>
        <CVTitle>Education</CVTitle>

        <div className={cn(styles.educationContainer, styles.bdGrid)}>
          {educationInfo.map((item, i, arr) => (
            <div className={styles.educationContent} key={item.title}>
              <div className={styles.educationTime}>
                <span className={styles.educationRounder} />
                {arr.length - 1 !== i && <span className={styles.educationLine} />}
              </div>
              <div className={cn(styles.educationData, styles.bdGrid)}>
                <h3 className={styles.educationTitle}>{item.title}</h3>
                <span className={styles.educationStudies}>{item.studies}</span>
                <span className={styles.educationYear}>{item.years}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
);

export default CVEducation;
