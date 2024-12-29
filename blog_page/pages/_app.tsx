import "@/styles/globals.css";
import "./font.css"
import { Navbar } from "./component/navbar";
import { Container } from "./component/Container";
import Footer from "./component/footer";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}
