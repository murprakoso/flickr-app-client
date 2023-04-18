import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export default function Routes() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
}
