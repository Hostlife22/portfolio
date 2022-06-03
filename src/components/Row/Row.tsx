import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Row.module.css';
import { IRowProps } from './Row.props';

const Row = forwardRef(
  (
    { children, className, ...props }: IRowProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div className={cn(styles.row, className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

export default Row;
