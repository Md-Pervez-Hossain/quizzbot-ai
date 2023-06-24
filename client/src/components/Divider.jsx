const Divider = () => {
  return (
    <div className="flex w-full items-center my-4">
      <hr className="flex-grow border-[0.5px] w-1/3 border-[#eee]"></hr>
      <div className="mx-4 text-gray-400 w-1/3 flex-grow-2 whitespace-nowrap text-xs">
        Sign in with email
      </div>
      <hr className="flex-grow border-[0.5px] w-1/3 border-[#eee]"></hr>
    </div>
  );
};

export default Divider;
