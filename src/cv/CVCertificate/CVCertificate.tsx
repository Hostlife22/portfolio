import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVCertificate.module.css';
import { ICVCertificateProps } from './CVCertificate.props';

const CVCertificate = forwardRef(
  (
    { className, ...props }: ICVCertificateProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.certificate, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        id="certificates"
        {...props}>
        <CVTitle decoration>Certificates</CVTitle>

        <div className={cn(styles.certificateContainer, styles.bdGrid)}>
          <div className={styles.certificateContent}>
            <h3 className={styles.certificateTitle}>
              Certified for compliance in the work area (2012)
            </h3>
            <p className={styles.certificateDescription}>
              For meeting the expectations of leading the team to work the specified tasks in the
              labor field.
            </p>
          </div>
          <div className={styles.certificateContent}>
            <h3 className={styles.certificateTitle}>
              Certificate of attendance on computer technology.
            </h3>
            <p className={styles.certificateDescription}>
              For meeting the expectations of leading the team to work the specified tasks in the
              labor field.
            </p>
          </div>
          <div className={styles.certificateContent}>
            <h3 className={styles.certificateTitle}>
              Achievement medal for productivity excellence during the year (2019)
            </h3>
            <p className={styles.certificateDescription}>
              For meeting the expectations of leading the team to work the specified tasks in the
              labor field.
            </p>
          </div>
        </div>
      </section>
    );
  },
);

export default CVCertificate;
