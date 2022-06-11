import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
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

        <div className={cn(styles.certificateContainer)}>
          <div className={styles.certificateContent}>
            <h3 className={styles.certificateTitle}>
              <span className={styles.certificateCircle} />
              Certificate of completion of training in html/css developer (2019)
            </h3>
          </div>
          <div className={styles.certificateContent}>
            <h3 className={styles.certificateTitle}>
              <span className={styles.certificateCircle} />
              Profession "Front end developer" from Gromcode University (2022)
            </h3>
          </div>
        </div>
      </section>
    );
  },
);

export default CVCertificate;
