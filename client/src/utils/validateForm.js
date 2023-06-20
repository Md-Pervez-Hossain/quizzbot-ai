export const validateForm = (data, setErrors, validateFullName = true) => {
  let isValid = true;
  const { email, password, fullName } = data;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validateFullName && !fullName) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      fullName: "Please enter your full name",
    }));
    isValid = false;
  }

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
