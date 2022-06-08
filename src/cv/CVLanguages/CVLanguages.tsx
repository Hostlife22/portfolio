import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVLanguages.module.css';
import { ICVLanguagesProps } from './CVLanguages.props';

const CVLanguages = forwardRef(
  ({ className, ...props }: ICVLanguagesProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const isCV = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.languages, styles.section, className, { [styles.cv]: isCV })}
        ref={ref}
        {...props}>
        <CVTitle decoration>Languages</CVTitle>
        <div className={styles.languagesContainer}>
          <ul className={cn(styles.languagesContent, styles.bdGrid)}>
            <li className={styles.languagesName}>
              <span className={styles.languagesCircle} /> English
            </li>
            <li className={styles.languagesName}>
              <span className={styles.languagesCircle} /> Russian
            </li>
            <li className={styles.languagesName}>
              <span className={styles.languagesCircle} /> Belarusian
            </li>
          </ul>
        </div>
      </section>
    );
  },
);

export default CVLanguages;
