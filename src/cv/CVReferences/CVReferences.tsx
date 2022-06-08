import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { references } from '../../helpers/cv-helpers';
import { useAppSelector } from '../../hooks';
import CVReferenceItem from '../CVReferenceItem/CVReferenceItem';
import styles from './CVReferences.module.css';
import { ICVReferencesProps } from './CVReferences.props';

const CVReferences = forwardRef(
  ({ className, ...props }: ICVReferencesProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.references, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        id="references"
        {...props}>
        <CVTitle decoration>References</CVTitle>
        <div className={cn(styles.referencesContainer, styles.bdGrid)}>
          {references.map((item) => (
            <CVReferenceItem key={item.subtitle} item={item} />
          ))}
        </div>
      </section>
    );
  },
);

export default CVReferences;
