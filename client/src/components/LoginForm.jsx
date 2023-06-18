"use client";
import RememberMe from "@/components/RememberMe";
import PrimaryButton from "@/components/PrimaryButton";
import { AuthContext } from "@/context/AuthProvider";
import { useContext, useState } from "react";
import LoaderSpinner from "./Loader/LoaderSpinner";
import Divider from "./Divider";
import SocialMediaLogin from "./SocialMediaLogin";
import EmailInput from "./Shared/EmailInput";
import PasswordInput from "./Shared/PasswordInput";
import { validateForm } from "@/utils/validateForm";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSignIn = () => {
    if (validateForm(data, setErrors, false)) {
      console.log('click')
      const { email, password } = data;
      console.log(email, password);
      setLoading(true);
      login(email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          setLoading(false);
          router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    else{
      console.log("issue")
    }
  };

  return (
    <div className="w-full">
      <div className="text-black w-full mb-10">
        <h1 className="font-bold text-3xl mb-2">Login</h1>
        <p className="text-gray-500">Ignite Your Mind with QuizBot AI</p>
      </div>
      <SocialMediaLogin />
      <Divider />
      <EmailInput
        email={data.email}
        handleChange={handleChange}
        error={errors.email}
      />
      <PasswordInput
        password={data.password}
        handleChange={handleChange}
        error={errors.password}
      />
      <RememberMe />
      {loading ? (
        <PrimaryButton loading={loading}>
          <LoaderSpinner /> Logging in
        </PrimaryButton>
      ) : (
        <PrimaryButton funq={handleSignIn}>Log In</PrimaryButton>
      )}

      <p className="text-sm text-black mt-6 ">
        New here?{" "}
        <a href="/sign-up" className="text-[#FC495F]">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
