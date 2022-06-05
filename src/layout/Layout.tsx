import cn from 'classnames';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectIsOpenMenu } from '../features/menu/menuSlice';
import { useAppSelector } from '../hooks';
import { About, Contact, Home, Portfolio, Services } from '../pages';
import styles from './Layout.module.css';

function Layout() {
  const isOpen = useAppSelector(selectIsOpenMenu);

  return (
    <div className={cn(styles.feed, { [styles.open]: isOpen })}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Layout;
