import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVSocial.module.css';
import { ICVSocialProps } from './CVSocial.props';

const CVSocial = forwardRef(
  ({ className, ...props }: ICVSocialProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const isCV = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.social, styles.section, className, { [styles.cv]: isCV })}
        ref={ref}
        {...props}>
        <CVTitle>SOCIAL</CVTitle>
        <div className={cn(styles.socialContainer, styles.bdGrid)}>
          <a
            href="https://linkedin.com/"
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn /> @Hostlife22
          </a>
          <a
            href="https://www.facebook.com/"
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer">
            <FaFacebook /> @Hostlife22
          </a>
          <a
            href="https://www.instagram.com"
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer">
            <FaInstagram /> @Hostlife22
          </a>
        </div>
      </section>
    );
  },
);

export default CVSocial;
