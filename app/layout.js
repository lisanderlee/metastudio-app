import { Inter } from "next/font/google";
import { Providers } from "./providers";
import LayoutUi from "@/components/layout-ui";
import clsx from "clsx";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MetastudioApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark">
      <body className={clsx("h-full antialiased  ", inter.className)}>
        <Providers>
          <LayoutUi>{children}</LayoutUi>
        </Providers>
      </body>
    </html>
  );
}