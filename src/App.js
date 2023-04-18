import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Routes from './utils/routes';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
