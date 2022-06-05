import React from 'react';
import { Sidebar, StyleSwitcher } from './components';
import CV from './cv/Row/CV';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <div className="App" style={{ display: 'none' }}>
        <Sidebar />
        <Layout />
        <StyleSwitcher />
      </div>
      <CV />
    </>
  );
}

export default App;
