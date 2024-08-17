import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

function startApp() {
  const rootElement = document.getElementById('root');

  if (!rootElement) return <h1>Falha ao encontrar a div root</h1>;

  return createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

startApp();
