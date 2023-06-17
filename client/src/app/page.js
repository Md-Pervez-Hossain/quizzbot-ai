import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Divider from "@/components/Divider";
import PrimaryButton from "@/components/PrimaryButton";
import RememberMe from "@/components/RememberMe";

export default function Home() {
  return (
    <main className="flex h-screen ">
      <div className="flex flex-col justify-center items-center p-8 bg-white w-1/2 lg:px-40">
        <div className="flex justify-start w-full mb-10">
          <img src="./asset/logo.png" alt="" className="w-48" />
        </div>
        <div className="text-black w-full">
          <h1 className="font-bold text-3xl mb-2">Login</h1>
          <p className="text-gray-500">Ignite Your Mind with QuizBot AI</p>
        </div>
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <button
          className=" lg:mb-6 outline flex justify-center  items-center outline-btn-outline
           text-[#000000]  px-16 py-2 mb-2  w-full 
        rounded-3xl
        "
        >
          <FcGoogle className="mr-3 text-xl" />
          Sign In with Google
        </button>
        <button
          className=" outline flex justify-center  items-center outline-btn-outline text-[#000000]  px-16 py-2 mb-2  w-full 
        rounded-3xl
        "
        >
          <FaFacebook className="mr-3 text-blue-700 text-xl" />
          Sign In with Facebook
        </button>
        <Divider />

        <div className="mb-2 lg:mb-6 w-full">
          <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-3xl w-full p-2 pl-4 placeholder:text-xs"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-2 lg:mb-6 w-full">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm mb-2"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-3xl w-full p-2 pl-4 placeholder:text-xs"
            placeholder="min 8 characters"
          />
        </div>

        <RememberMe />
        <PrimaryButton>Log In</PrimaryButton>

        <p className="text-sm text-black mt-6 ">
          New here?{" "}
          <a href="#" className="text-[#FC495F]">
            Register
          </a>
        </p>
      </div>
      <div className="bg-gradient-to-tr from-[#FC495F] from-62%  to-[#FFC371] to-38% w-1/2">
        
      </div>
    </main>
  );
}
