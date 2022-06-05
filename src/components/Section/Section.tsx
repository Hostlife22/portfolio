import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Section.module.css';
import { ISectionProps } from './Section.props';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const Section = forwardRef(
  (
    { children, className, ...props }: ISectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <section className={cn(styles.section, className)} ref={ref} {...props}>
        <motion.div
          className={styles.container}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          exit={{ y: '300px', opacity: 0 }}
          //   variants={textAnimation}
          layout>
          {children}
        </motion.div>
      </section>
    );
  },
);

export default Section;
