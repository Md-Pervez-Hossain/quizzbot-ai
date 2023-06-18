"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

const SocialMediaLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      const user = res.user
      console.log(res);

    });
  };

  return (
    <div className="w-full">
      <button
        className=" lg:mb-6 outline flex justify-center  items-center outline-btn-outline
           text-[#000000]  px-16 py-2 mb-2  w-full 
        rounded-3xl
        "
        onClick={handleGoogleLogin}
        
      >
        <FcGoogle className="mr-3 text-xl" />
        Sign In with Google
      </button>
    </div>
  );
};

export default SocialMediaLogin;
