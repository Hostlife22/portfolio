import cn from 'classnames';
import React from 'react';
import styles from './CardService.module.css';
import { ICardServiceProps } from './CardService.props';

function CardService({ className, service }: ICardServiceProps): JSX.Element {
  return (
    <div className={cn(styles.serviceItem, className)}>
      <div className={styles.serviceItemIner}>
        <div className={styles.icon}>{service.icon}</div>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export default CardService;
