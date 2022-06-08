import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVSkillData.module.css';
import { ICVSkillDataProps } from './CVSkillData.props';

const CVSkillData = forwardRef(
  (
    { className, list, ...props }: ICVSkillDataProps,
    ref: ForwardedRef<HTMLUListElement>,
  ): JSX.Element => {
    const isCV = useAppSelector(selectScaleCV);

    return (
      <ul className={cn(styles.skillsData, className, { [styles.cv]: isCV })} ref={ref} {...props}>
        {list.map((item) => (
          <li className={styles.skillsName} key={item}>
            <span className={styles.skillsCircle} />
            {item}
          </li>
        ))}
      </ul>
    );
  },
);

export default CVSkillData;
