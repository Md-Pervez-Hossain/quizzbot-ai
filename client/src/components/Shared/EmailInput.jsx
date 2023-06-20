const EmailInput = ({ email, handleChange, error }) => {
  return (
    <div className="mb-2 lg:mb-6 w-full flex flex-col items-start">
      <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="border border-gray-300 rounded-2xl w-full p-2 pl-4 placeholder:text-xs text-black"
        placeholder="john@example.com"
        value={email}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default EmailInput;
