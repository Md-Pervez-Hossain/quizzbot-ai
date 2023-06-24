const TextInput = ({ label, name }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="px-6 py-2 w-full rounded-2xl border-2 border-[#eee] mt-2"
      />
    </div>
  );
};

export default TextInput;
