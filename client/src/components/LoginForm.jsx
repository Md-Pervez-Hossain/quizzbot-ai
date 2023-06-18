"use client";

import RememberMe from "@/components/RememberMe";
import PrimaryButton from "@/components/PrimaryButton";
import { AuthContext } from "@/context/AuthProvider";
import { useContext, useState } from "react";
import LoaderSpinner from "./Loader/LoaderSpinner";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
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
      [name]: "", // Clear the error message when the user starts typing again
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const { email, password } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      isValid = false;
    }

    if (!password || password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters long",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      const { email, password } = data;
      setLoading(true);
      login(email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }
  };

  return (
    <div className="w-full">
      <div className="mb-2 lg:mb-6 w-full">
        <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 rounded-3xl w-full p-2 pl-4 placeholder:text-xs text-black"
          placeholder="john@example.com"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-2 lg:mb-6 w-full">
        <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-300 rounded-3xl w-full p-2 pl-4 placeholder:text-xs text-black"
          placeholder="min 8 characters"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <RememberMe />
      {loading ? (
        <PrimaryButton loading={loading}>
          <LoaderSpinner /> Loading
        </PrimaryButton>
      ) : (
        <PrimaryButton funq={handleSignIn}>Log In</PrimaryButton>
      )}

      <p className="text-sm text-black mt-6 ">
        New here?{" "}
        <a href="#" className="text-[#FC495F]">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
