import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
        <Footer />
      </AuthProvider>
    </html>
  );
}
