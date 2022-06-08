import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { BiGridAlt } from 'react-icons/bi';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { cvMenu } from '../../helpers/cv-helpers';
import { useAppSelector } from '../../hooks';
import styles from './CVHeader.module.css';
import { ICVHeaderProps } from './CVHeader.props';

const CVTitle = forwardRef(
  ({ className, ...props }: ICVHeaderProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const isCV = useAppSelector(selectScaleCV);

    return (
      <header className={cn(styles.oneHeader, className)} ref={ref} {...props}>
        <nav className={cn(styles.nav, styles.bdContainer, { [styles.cv]: isCV })}>
          <a href="#" className={styles.navLogo}>
            Serafim
          </a>
          <div className={cn(styles.navMenu, { [styles.showMenu]: showMenu })}>
            <ul className={styles.navList}>
              {cvMenu.map((item) => (
                <li className={styles.navItem} key={item.name} onClick={() => setShowMenu(false)}>
                  <a href={`#${item.route}`} className={styles.navLink}>
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navToggle} onClick={() => setShowMenu((prev) => !prev)}>
            <BiGridAlt />
          </div>
        </nav>
      </header>
    );
  },
);

export default CVTitle;
