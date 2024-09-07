import { createBrowserRouter } from 'react-router-dom';

import { Login } from './Pages';

export default function createAppRouter() {
  return createBrowserRouter([{ path: '/', element: <Login /> }]);
}
