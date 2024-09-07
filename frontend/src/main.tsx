import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { GlobalContextProvider } from './shared';
import { Providers } from './providers';

function startApp() {
  const rootElement = document.getElementById('root');

  if (!rootElement) return <h1>Falha ao encontrar a div root</h1>;

  return createRoot(rootElement).render(
    <StrictMode>
      <GlobalContextProvider>
        <Providers>
          <App />
        </Providers>
      </GlobalContextProvider>
    </StrictMode>,
  );
}

startApp();
