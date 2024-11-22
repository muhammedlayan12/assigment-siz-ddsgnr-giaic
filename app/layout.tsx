import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ddsgnr",
  description: "Design by Muhammad Layan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-poppins">
        {children}
      </body>
    </html>
  );
}
