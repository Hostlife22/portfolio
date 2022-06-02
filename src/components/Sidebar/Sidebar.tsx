import React from 'react';
import { FaBriefcase, FaComments, FaHome, FaListUl, FaUserAlt } from 'react-icons/fa';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.aside}>
      <div className={styles.logo}>
        <a href="#">
          <span>A</span>tlas
        </a>
      </div>
      <div className={styles.navToggle}>
        <span />
      </div>
      <ul className={styles.nav}>
        <li>
          <a href="#" className={styles.active}>
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <FaUserAlt /> About
          </a>
        </li>
        <li>
          <a href="#">
            <FaListUl /> Services
          </a>
        </li>
        <li>
          <a href="#">
            <FaBriefcase /> Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <FaComments /> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
