import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, Portfolio, Services } from '../pages';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.feed}>
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
