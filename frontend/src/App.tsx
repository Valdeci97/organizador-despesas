import { RouterProvider } from 'react-router-dom';

import CreateAppRouter from './Routes';

const router = CreateAppRouter();

export default function App() {
  return <RouterProvider router={router} />;
}
