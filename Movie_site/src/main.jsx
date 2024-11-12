import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogContextProvider } from "./context/logContext";
import { PageContextProvider } from './context/pageContext.jsx';
import { QueryClient, QueryClientProvider }  from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <PageContextProvider>
    <LogContextProvider>
      <App />
    </LogContextProvider>
    </PageContextProvider>
  </QueryClientProvider>
)
