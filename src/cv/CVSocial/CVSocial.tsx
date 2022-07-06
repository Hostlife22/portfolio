import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { CVTitle } from '..';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVSocial.module.css';
import { ICVSocialProps } from './CVSocial.props';

const CVSocial = forwardRef(
  ({ className, ...props }: ICVSocialProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <section
        className={cn(styles.social, styles.section, className, { [styles.cv]: iscv })}
        ref={ref}
        {...props}>
        <CVTitle>SOCIAL</CVTitle>
        <div className={cn(styles.socialContainer, styles.bdGrid)}>
          <a
            href="https://github.com/Hostlife22"
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer">
            <FaGithub /> @Hostlife22
          </a>
          <a
            href="https://t.me/Hostlife22"
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer">
            <FaTelegram /> @Hostlife22
          </a>
          <a
            href="https://www.linkedin.com/in/hostlife22/"
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer">
            <FaLinkedin /> @Hostlife22
          </a>
        </div>
      </section>
    );
  },
);

export default CVSocial;
