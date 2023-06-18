"use client";
import "./globals.css";
import Links from "@/components/Sidebar/Links";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";
import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const excludePaths = ["/login", "/register"];
  const shouldExclude = excludePaths.some((path) => pathname === path);
  if (shouldExclude) {
    return children;
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {pathname !== "/sign-up" && pathname !== "/" ? (
            <>
              <div className="grid grid-cols-5 gap-8  ">
                <div className="col-span-1 bg-white font-bold shadow-lg p-10  h-screen ">
                  <Links></Links>
                </div>
                <div className="col-span-4 mt-8">
                  <div className="mr-8">
                    <Header></Header>
                  </div>
                  {children}
                </div>
              </div>
            </>
          ) : (
            <>{children}</>
          )}

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
