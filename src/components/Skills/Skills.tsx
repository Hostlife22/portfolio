import cn from 'classnames';
import React from 'react';
import { Row, SkillItem } from '..';
import { skills } from '../../helpers/helpers';
import styles from './Skills.module.css';
import { ISkillsProps } from './Skills.props';

function Skills({ className }: ISkillsProps): JSX.Element {
  return (
    <div className={cn(styles.skills, className)}>
      <Row>
        {skills.map((s) => (
          <SkillItem key={s.name} skill={s} />
        ))}
      </Row>
    </div>
  );
}

export default Skills;
