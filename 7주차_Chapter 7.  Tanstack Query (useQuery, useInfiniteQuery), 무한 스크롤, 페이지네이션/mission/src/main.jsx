import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogContextProvider } from "./context/logContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <LogContextProvider>
      <App />
    </LogContextProvider>

    <ReactQueryDevtools initialIsOpen={true} />

  </QueryClientProvider>
)
