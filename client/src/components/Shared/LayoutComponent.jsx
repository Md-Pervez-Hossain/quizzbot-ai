import Header from "../Header/Header";
import Links from "../Sidebar/Links";
import Footer from "./Footer";

const LayoutComponent = ({ children }) => {
  return (
    <div>
      {pathname !== "/sign-up" && pathname !== "/" ? (
        <>
          <div className="grid grid-cols-5 gap-8  ">
            <div className="col-span-1 bg-white font-bold shadow-lg p-10  h-screen ">
              <Links></Links>
            </div>
            <div className="col-span-4 mt-8">
              <div className="mr-8">
                <Header />
              </div>
              {children}
            </div>
          </div>
        </>
      ) : (
        <>{children}</>
      )}

      <Footer />
    </div>
  );
};

export default LayoutComponent;
