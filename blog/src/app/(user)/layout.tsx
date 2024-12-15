import { Geist, Geist_Mono } from "next/font/google";
import { Container } from "../component/Container";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <Container>
      {children}
    </Container>
  );
}
