import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Title.module.css';
import { ITitleProps } from './Title.props';

const Title = forwardRef(
  (
    { children, className, ...props }: ITitleProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div className={cn(styles.sectionTitle, className)} ref={ref} {...props}>
        <h2>{children}</h2>
      </div>
    );
  },
);

export default Title;
