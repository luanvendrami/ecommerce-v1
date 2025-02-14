import { Metadata } from "next";
import { Header } from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Home Layout',
  description: "Teste Layout também",
  openGraph:{
    title: 'testando novo Layout',
    description: "Teste também Layout",
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header/>

        {children}
      </body>
    </html>
  );
}
