import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "./component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Auth"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>

  );
}
