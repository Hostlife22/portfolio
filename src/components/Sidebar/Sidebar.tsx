import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../helpers/helpers';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.aside}>
      <div className={styles.logo}>
        <Link to="/">
          <span>A</span>tlas
        </Link>
      </div>
      <div className={styles.navToggle}>
        <span />
      </div>
      <ul className={styles.nav}>
        {menu.map((item) => (
          <li key={item.route}>
            <NavLink to={item.route} className={({ isActive }) => (isActive ? styles.active : '')}>
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
