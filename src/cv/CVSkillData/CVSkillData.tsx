import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVSkillData.module.css';
import { ICVSkillDataProps } from './CVSkillData.props';

const CVSkillData = forwardRef(
  (
    { className, ...props }: ICVSkillDataProps,
    ref: ForwardedRef<HTMLUListElement>,
  ): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);

    return (
      <ul className={cn(styles.skillsData, className, { [styles.cv]: iscv })} ref={ref} {...props}>
        <li className={styles.skillsName}>
          <span className={styles.skillsCircle} />
          Frontend development: React, Next, Typescript, Redux.
        </li>
        <li className={styles.skillsName}>
          <span className={styles.skillsCircle} />
          Backend development: basics of Node JS, Express, Mongodb.
        </li>
        <li className={styles.skillsName}>
          <span className={styles.skillsCircle} />
          JavaScript (ES5, ES6).
        </li>
        <li className={styles.skillsName}>
          <span className={styles.skillsCircle} />
          HTML5, CSS3 layout. Micro-markup: schema.org
        </li>
        <li className={styles.skillsName}>
          <span className={styles.skillsCircle} />
          Preprocessors: SCSS/SASS, LESS, PostCSS.
        </li>
        <li className={styles.skillsName}>
          <span className={styles.skillsCircle} />
          Tools: npm, webpack, gulp, Git, GitHub.
        </li>
      </ul>
    );
  },
);

export default CVSkillData;
