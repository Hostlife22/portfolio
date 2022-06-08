import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVTitle.module.css';
import { ICVTitleProps } from './CVTitle.props';

const CVTitle = forwardRef(
  (
    { children, className, decoration, ...props }: ICVTitleProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const isCV = useAppSelector(selectScaleCV);

    return (
      <div className={cn(styles.sectionTitleContainer, className)} ref={ref} {...props}>
        <h2
          className={cn(styles.sectionTitle, {
            [styles.titleShow]: decoration,
            [styles.cv]: isCV,
          })}>
          {children}
        </h2>
      </div>
    );
  },
);

export default CVTitle;
