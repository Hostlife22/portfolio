import { Sidebar, StyleSwitcher } from './components';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Layout />
      <StyleSwitcher />
    </div>
  );
}

export default App;
