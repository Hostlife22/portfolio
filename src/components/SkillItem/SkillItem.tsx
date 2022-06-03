import cn from 'classnames';
import React from 'react';
import styles from './SkillItem.module.css';
import { ISkillItemProps } from './SkillItem.props';

function SkillItem({ className, skill }: ISkillItemProps): JSX.Element {
  return (
    <div className={cn(styles.skillItem, className)}>
      <h5>{skill.name}</h5>
      <div className={styles.progress}>
        <div className={styles.progressIn} style={{ width: `${skill.percent}%` }} />
        <div className={styles.skillPercent}>{skill.percent}%</div>
      </div>
    </div>
  );
}

export default SkillItem;
