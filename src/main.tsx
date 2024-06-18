import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SortContextProvider } from './context/Sort/SortContext.tsx';
import { App } from './App.tsx';

import './index.css';
import './static/themes.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SortContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </SortContextProvider>
);
