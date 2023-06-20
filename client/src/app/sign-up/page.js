"use client";

import Divider from "@/components/Divider";
import LoaderSpinner from "@/components/Loader/LoaderSpinner";
import PrimaryButton from "@/components/PrimaryButton";
import EmailInput from "@/components/Shared/EmailInput";
import PasswordInput from "@/components/Shared/PasswordInput";
import SocialMediaLogin from "@/components/SocialMediaLogin";
import { AuthContext } from "@/context/AuthProvider";
import { validateForm } from "@/utils/validateForm";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const page = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setIsAgreed(e.target.checked);
  };

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

  const handleSignUp = () => {
    if (validateForm(data, setErrors, true) && isAgreed) {
      const { fullName, email, password } = data;
      setLoading(true);
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          const userInfo = {
            displayName: fullName,
          };
          updateUser(userInfo)
            .then((result) => {
              setLoading(false);
              router.push("/dashboard");
            })
            .catch((err) => {
              console.log("Error updating name");
            });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      if (!isAgreed) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          agree: "Please agree to the Terms & Condition",
        }));
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-28">
      <div className="text-center w-1/3">
        <h1 className="text-2xl">Let's create your Ai-Quizzbot account!</h1>
        <p className="text-lg mt-2 text-gray-500 mb-10">
          Already have an account?{" "}
          <a href="/" className="text-[#FC495F]">
            Login
          </a>
        </p>
        <SocialMediaLogin />
        <Divider />
        <div className="mb-2 lg:mb-6 w-full flex flex-col items-start">
          <label htmlFor="name" className="block text-gray-700 text-sm mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            className="border border-gray-300 rounded-2xl w-full p-2 pl-4 placeholder:text-xs text-black"
            placeholder="Your name"
            value={data.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          {errors && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
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

        <div className="flex items-start justify-start text-left mt-5 mb-10">
          <input
            type="checkbox"
            id="rememberMe"
            className="form-checkbox text-indigo-600 mt-1"
          />
          <label htmlFor="rememberMe" className="ml-2 text-gray-700 text-sm">
            By clicking Register, you agree to our Terms & Conditions.
          </label>
          <div className="flex justify-start items-start my-10">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-checkbox h-4 w-4 text-indigo-600"
              onChange={handleAgreeChange}
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 text-gray-700 text-sm text-left"
            >
              By clicking on Register button you are agree to our Terms &
              Condition
            </label>
          </div>
          {!isAgreed && (
            <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
          )}
          {loading ? (
            <PrimaryButton loading={loading}>
              <LoaderSpinner /> Signing in
            </PrimaryButton>
          ) : (
            <PrimaryButton funq={handleSignUp}>Sign In</PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
