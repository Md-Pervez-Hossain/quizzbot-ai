import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Divider from "@/components/Divider";
import PrimaryButton from "@/components/PrimaryButton";
import RememberMe from "@/components/RememberMe";

export default function Home() {
  return (
    <main className="flex h-screen ">
      <div className="flex flex-col justify-center items-center p-8 bg-white w-1/2 lg:px-40">
        <div className="text-black w-full">
          <h1 className="font-bold text-3xl">Login</h1>
          <p>bfvhhjcbxcbvcnxbvxnbvxbvhjxbvhxbjv</p>
        </div>
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <button
          className=" lg:mb-6 outline flex justify-center  items-center outline-btn-outline
           text-[#000000]  px-16 py-2 mb-2  w-full 
        rounded-3xl
        "
        >
          <FcGoogle className="mr-3" />
          Sign In with Google
        </button>
        <button
          className=" lg:mb-6 outline flex justify-center  items-center outline-btn-outline text-[#000000]  px-16 py-2 mb-2  w-full 
        rounded-3xl
        "
        >
          <FaFacebook className="mr-3 text-blue-700" />
          Sign In with Facebook
        </button>
        {/* <Divider /> */}

        <input
          type="email"
          className="border border-gray-300 rounded-3xl w-full p-2 mb-2 lg:mb-6"
          placeholder="mail@quizai.com"
        />
        <input
          type="password"
          className="border border-gray-300 rounded-3xl w-full p-2 mb-2 lg:mb-6"
          placeholder="Min.8 Character "
        />

        {/* Button section */}
        <RememberMe />
        <PrimaryButton>Log In</PrimaryButton>
        {/* Forgot password section */}
        {/* <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" /> Remember me
        </label> */}
        <p className="text-sm text-black mt-6 ">
          New here?{" "}
          <a href="#" className="text-blue-500">
            Register
          </a>
        </p>
      </div>
      <div className="bg-gradient-to-tr from-[#FC495F] from-62%  to-[#FFC371] to-38% w-1/2"></div>
    </main>
  );
}
