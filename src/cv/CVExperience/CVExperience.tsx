import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { experienceInfo } from '../../helpers/cv-helpers';
import { useAppSelector } from '../../hooks';
import styles from './CVExperience.module.css';
import { ICVExperienceProps } from './CVExperience.props';

const CVExperience = forwardRef(
  ({ className, ...props }: ICVExperienceProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const isCV = useAppSelector(selectScaleCV);

    return (
      <section
        className={cn(styles.education, styles.section, className, { [styles.cv]: isCV })}
        ref={ref}
        id="experience"
        {...props}>
        <CVTitle decoration>Experience</CVTitle>

        <div className={cn(styles.educationContainer, styles.bdGrid)}>
          {experienceInfo.map((item, i, arr) => (
            <div className={styles.experienceContent} key={item.title}>
              <div className={styles.experienceTime}>
                <span className={styles.experienceRounder} />
                {arr.length - 1 !== i && <span className={styles.experienceLine} />}
              </div>
              <div className={cn(styles.experienceData, styles.bdGrid)}>
                <h3 className={styles.experienceTitle}>{item.title}</h3>
                <span className={styles.experienceCompany}>{item.company}</span>
                <span className={styles.experienceDescription}>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
);

export default CVExperience;
