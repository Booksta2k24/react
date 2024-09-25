import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </ErrorBoundary>
        </Provider>
    </QueryClientProvider>
)
