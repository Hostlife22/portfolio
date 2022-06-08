import cn from 'classnames';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, StyleSwitcher } from '../components';
import { selectIsOpenMenu } from '../features/menu/menuSlice';
import { useAppSelector } from '../hooks';
import styles from './Layout.module.css';

function Layout() {
  const isOpen = useAppSelector(selectIsOpenMenu);

  return (
    <>
      <Sidebar />
      <div className={cn(styles.feed, { [styles.open]: isOpen })}>
        <Outlet />
      </div>
      <StyleSwitcher />
    </>
  );
}

export default Layout;
