import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { FaGithub, FaPuzzlePiece } from 'react-icons/fa';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import styles from './CVReferenceItem.module.css';
import { ICVReferenceItemProps } from './CVReferenceItem.props';

const CVReferenceItem = forwardRef(
  (
    { className, item, ...props }: ICVReferenceItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);
    return (
      <div
        className={cn(styles.referencesContent, styles.bdGrid, className, { [styles.cv]: iscv })}
        ref={ref}
        {...props}>
        <div className={styles.referenceLinks}>
          <a href={item.githubUrl} className={styles.referencesSubtitle}>
            <FaGithub /> GitHub code
          </a>
          <span>|</span>
          <a href={item.appUrl} className={styles.referencesSubtitle}>
            <FaPuzzlePiece /> App
          </a>
        </div>
        <h3 className={styles.referencesTitle}>{item.title}</h3>
        <ul className={styles.referencesContact}>
          <li>{item.description}</li>
          <li>Tech stack:</li>
          {item.skills.map((skill) => (
            <li key={skill}> - {skill}</li>
          ))}
        </ul>
      </div>
    );
  },
);

export default CVReferenceItem;
