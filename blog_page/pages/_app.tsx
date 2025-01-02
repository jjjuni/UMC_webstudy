import "@/styles/globals.css";
import "./font.css"
import { Navbar } from "./component/navbar";
import { Container } from "./component/Container";
import Footer from "./component/footer";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}
