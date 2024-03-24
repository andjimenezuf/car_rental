import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider,ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'
import { Navbar } from "@/components/Navbar";



export const metadata: Metadata = {
  title: "AutoCraze Rentals",
  description: "Rent Cars anywhhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <head>
      <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider>
          
          <Navbar />
          {children}
          
          </MantineProvider> 
      </body>

    </html>
  );
}
