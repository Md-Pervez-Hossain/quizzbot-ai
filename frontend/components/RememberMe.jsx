import Link from "next/link";

const RememberMe = () => {
  return (
    <div className="flex justify-between items-center w-full mb-4">
      <div class="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          class="form-checkbox h-4 w-4 text-indigo-600"
        />
        <label for="rememberMe" class="ml-2 text-gray-700">
          Remember Me
        </label>
      </div>
      <div>
        <Link href="/" className="text-[#000000]">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default RememberMe;
