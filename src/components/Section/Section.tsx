import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Section.module.css';
import { ISectionProps } from './Section.props';

const Section = forwardRef(
  (
    { children, className, ...props }: ISectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <section className={cn(styles.section, className)} ref={ref} {...props}>
        <div className={styles.container}>{children}</div>
      </section>
    );
  },
);

export default Section;
