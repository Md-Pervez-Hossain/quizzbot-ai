const PasswordInput = ({ password, handleChange, error }) => {
  return (
    <div className="mb-2 lg:mb-6 w-full flex flex-col items-start">
      <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
        Password <span className="text-red-500">*</span>
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="border border-[#eee] rounded-2xl w-full p-2 pl-4 placeholder:text-xs text-black"
        placeholder="min 8 characters"
        value={password}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
