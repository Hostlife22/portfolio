import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import styles from './CVReferenceItem.module.css';
import { ICVReferenceItemProps } from './CVReferenceItem.props';

const CVReferenceItem = forwardRef(
  (
    { className, item, ...props }: ICVReferenceItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div className={cn(styles.referencesContent, styles.bdGrid, className)} ref={ref} {...props}>
        <span className={styles.referencesSubtitle}>{item.subtitle}</span>
        <h3 className={styles.referencesTitle}>{item.title}</h3>
        <ul className={styles.referencesContact}>
          <li>Phone: {item.phone}</li>
          <li>Email: {item.email}</li>
        </ul>
      </div>
    );
  },
);

export default CVReferenceItem;
