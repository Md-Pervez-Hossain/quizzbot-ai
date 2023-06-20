"use client";
import "./globals.css";

import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";
import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { Varela_Round } from "next/font/google";
import Footer from "@/components/Shared/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import Options from "@/components/Options/Options";

const varela_round = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const excludePaths = ["/login", "/register"];
  const shouldExclude = excludePaths.some((path) => pathname === path);
  if (shouldExclude) {
    return children;
  }
  return (
    <html lang="en">
      <body className={varela_round.className}>
        <AuthProvider>
          {pathname !== "/sign-up" && pathname !== "/" ? (
            <>
              <div className="grid grid-cols-5 gap-8  ">
                <div className="col-span-1 bg-white font-bold  p-10 sticky top-0 ">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-span-4 mt-8">
                  <div className="mr-8">
                    <Header></Header>

                    {pathname === "/generate-questions" ? (
                      <>
                        <Options></Options>
                      </>
                    ) : (
                      <></>
                    )}
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
