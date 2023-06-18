import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-center lg:text-left">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="">
            <img src="./assets/logo.png" alt="logo" className="w-64" />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1 mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">
              My Account
            </h5>
            <ul className="mb-0 list-none text-white">
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/sign-up">Sign up</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1 mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">
              My Account
            </h5>
            <ul className="mb-0 list-none text-white">
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/sign-up">Sign up</Link>
              </li>
            </ul>
          </div>
          {/* Repeat the above code for other link sections */}
        </div>
      </div>
      <hr className="text-white" />
      <div className="bg-black p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023{" "}
        <Link href="/">Ai-Quizzbot</Link>
      </div>
    </footer>
  );
};

export default Footer;
