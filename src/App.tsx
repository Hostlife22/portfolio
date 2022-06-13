import 'react-lazy-load-image-component/src/effects/blur.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { About, Contact, Home, Portfolio, Services } from './pages';
import CV from './pages/CV/CV';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;
