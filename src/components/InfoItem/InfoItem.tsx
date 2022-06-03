import cn from 'classnames';
import React from 'react';
import styles from './InfoItem.module.css';
import { IInfoItemProps } from './InfoItem.props';

function InfoItem({ className, item, ...props }: IInfoItemProps): JSX.Element {
  return (
    <div className={cn(styles.infoItem, className)} {...props}>
      <p>
        {item.title} : <span>{item.value}</span>
      </p>
    </div>
  );
}

export default InfoItem;
