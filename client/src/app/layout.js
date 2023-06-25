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
        <div>
          <AuthProvider>
            {pathname !== "/sign-up" && pathname !== "/" ? (
              <>
                <div className="grid grid-cols-5 gap-8 min-h-screen   ">
                  <div className="col-span-1 bg-white font-bold  px-8 py-16 sticky top-0 border-r-2 border-[#eee] ">
                    <Sidebar></Sidebar>
                  </div>
                  <div className="col-span-4 ">
                    <div className="mr-8">
                      <Header></Header>
                      {pathname === "/generate-questions" ||
                      pathname === "/generate-questions/true-false" ||
                      pathname === "/generate-questions/multiple-questions" ||
                      pathname === "/generate-questions/short-answers" ||
                      pathname === "/generate-questions/blanks" ||
                      pathname === "/generate-questions/matching" ||
                      pathname === "/generate-questions/calculations" ||
                      pathname === "/generate-questions/teacher-tool" ||
                      pathname ===
                        "/generate-questions/teacher-tool/lesson-planer" ||
                      pathname ===
                        "/generate-questions/teacher-tool/project-ideas" ||
                      pathname ===
                        "/generate-questions/teacher-tool/study-points" ||
                      pathname ===
                        "/generate-questions/teacher-tool/group-creator" ||
                      pathname ===
                        "/generate-questions/teacher-tool/seating-chart" ? (
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
        </div>
      </body>
    </html>
  );
}
