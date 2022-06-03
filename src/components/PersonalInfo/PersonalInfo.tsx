import cn from 'classnames';
import React from 'react';
import { Link, Row } from '..';
import { personalInfo } from '../../helpers/helpers';
import InfoItem from '../InfoItem/InfoItem';
import styles from './PersonalInfo.module.css';
import { IPersonalProps } from './PersonalInfo.props';

function PersonalInfo({ className }: IPersonalProps): JSX.Element {
  return (
    <div className={cn(styles.personalInfo, className)}>
      <Row>
        {personalInfo.map((item) => (
          <InfoItem key={item.title} item={item} />
        ))}
      </Row>
      <Row>
        <div className={styles.buttons}>
          <Link href="#">Download CV</Link>
          <Link href="/contact" className={styles.hireMe}>
            Hire Me
          </Link>
        </div>
      </Row>
    </div>
  );
}

export default PersonalInfo;