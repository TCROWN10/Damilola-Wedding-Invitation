import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebecca & Timothy | We're Getting Married",
  description: "Wedding invitation for Rebecca Oluwaseyi Aiyela & Timothy Olarewaju Adeoye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
