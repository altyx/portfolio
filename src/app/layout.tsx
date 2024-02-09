import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import styles from './layout.module.css';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samir",
  description: "Samir's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      <header className={styles.header}>
        <section className={styles.name}>Samir Moutawakil</section>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Projets</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <hr/>
      {children}
      </body>
    </html>
  );
}
