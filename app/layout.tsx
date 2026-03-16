import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import "./variables.css"; // custom colors, spacing, typography
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "SHEE-MG | Immigration & Expatriate Solutions",
    template: "%s | SHEE-MG", // each page adds its own title
  },
  description: "Kenya's trusted immigration consultancy. Work permits, investor permits, dependent passes and more.",
  keywords: ["immigration Kenya", "work permits Kenya", "expatriate services Nairobi"],
  metadataBase: new URL("https://www.shee-mg.co.ke"),
  openGraph: {
    title: "SHEE-MG | Immigration & Expatriate Solutions",
    description: "Kenya's trusted immigration consultancy.",
    url: "https://www.shee-mg.co.ke",
    siteName: "SHEE-MG",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_KE",
    type: "website",
  }, icons: {
    icon: "logo.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} antialiased bg-white text-gray-800 font-sans`}
      >
        <Navbar />
        <main className="bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
