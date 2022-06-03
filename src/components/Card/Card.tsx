import cn from 'classnames';
import React from 'react';
import { CardItem, Row } from '..';
import styles from './Card.module.css';
import { ICardProps } from './Card.props';

function Card({ className, title, items }: ICardProps): JSX.Element {
  return (
    <div className={cn(styles.experience, className)}>
      <h3 className={styles.title}>{title}</h3>
      <Row>
        <div className={styles.timelineBox}>
          <div className={styles.timeline}>
            {items.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Card;
