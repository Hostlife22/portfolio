import cn from 'classnames';
import React from 'react';
import styles from './CardItem.module.css';
import { ICardItemProps } from './CardItem.props';

function CardItem({ className, item }: ICardItemProps): JSX.Element {
  return (
    <div className={cn(styles.timelineItem, className)}>
      <div className={styles.circleDot} />
      <h3 className={styles.timelineDate}>
        {item.icon} {item.years}
      </h3>
      <h4 className={styles.timelineTitle}>{item.title}</h4>
      <p className={styles.timelineText}>{item.description}</p>
    </div>
  );
}

export default CardItem;
