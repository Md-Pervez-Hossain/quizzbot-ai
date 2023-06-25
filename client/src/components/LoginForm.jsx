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
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setLoginError('')
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
      const { email, password } = data;
      setLoading(true);
      login(email, password)
        .then((res) => {
          const user = res.user;
          setLoading(false);
          router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          setLoginError("Incorrect email or password.");
          setLoading(false);
        });
    } else {
      console.log("issue");
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
      {loginError && <div className="my-3 text-sm text-red-500">{loginError}</div>}
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
