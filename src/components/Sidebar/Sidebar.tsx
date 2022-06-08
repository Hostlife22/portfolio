import cn from 'classnames';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { selectIsOpenMenu, toggleMenu } from '../../features/menu/menuSlice';
import { menu } from '../../helpers/helpers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Sidebar.module.css';

function Sidebar() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpenMenu);

  const hideSidebar = () => {
    dispatch(toggleMenu(false));
  };

  useEffect(() => {
    const resizeWindow = () => {
      if (window.innerWidth < 1200) {
        hideSidebar();
      }
    };

    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      hideSidebar();
    }
  }, [isOpen]);

  const handleClick = () => {
    dispatch(toggleMenu(!isOpen));
  };

  return (
    <div className={cn(styles.aside, { [styles.open]: isOpen })}>
      <div className={styles.logo}>
        <Link to="/">
          <span>H</span>ostlife
        </Link>
      </div>
      <div className={cn(styles.navToggle, { [styles.open]: isOpen })} onClick={handleClick}>
        <span />
      </div>
      <ul className={styles.nav}>
        {menu.map((item) => (
          <li key={item.route}>
            <NavLink
              to={item.route}
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={hideSidebar}>
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
