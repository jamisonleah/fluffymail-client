// app/layout.js
import "@/app/globals.css";
import { Livvic, Lobster, Lilita_One } from "next/font/google";

// Load fonts
const livvic = Livvic({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-livvic' });
const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lobster' });
const lilita_one = Lilita_One({ subsets: ['latin'], weight: '400', variable: '--font-lilita-one' });
export const metadata = {
  title: "FluffyMail",
  description: "A cozy bunny-themed secure mail server",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lobster.variable} ${livvic.variable} ${lilita_one.variable}`}>
      <body className="antialiased font-sans bg-linear-to-b from-rose-200 to-bunny-blush min-h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
