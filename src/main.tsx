import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './store.ts';

// const clientId = process.env.GOOGLE_CLIENT_ID || ''


const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ErrorBoundary>
                    <GoogleOAuthProvider clientId="283054795869-5vmb2c1krj0uok8egakrpodj23f95o8i.apps.googleusercontent.com">
                        <App />
                    </GoogleOAuthProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </ErrorBoundary>
            </Provider>
    </QueryClientProvider>
)
