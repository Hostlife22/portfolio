import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVLanguages.module.css';
import { ICVLanguagesProps } from './CVLanguages.props';

const CVLanguages = forwardRef(
  ({ className, ...props }: ICVLanguagesProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.languages, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        {...props}>
        <CVTitle>Languages</CVTitle>
        <div className={styles.languagesContainer}>
          <ul className={cn(styles.languagesContent, styles.bdGrid)}>
            <li className={styles.languagesName}>
              <span className={styles.languagesCircle} /> English
            </li>
            <li className={styles.languagesName}>
              <span className={styles.languagesCircle} /> Russian
            </li>
          </ul>
        </div>
      </section>
    );
  },
);

export default CVLanguages;
