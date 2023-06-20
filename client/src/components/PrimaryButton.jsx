const PrimaryButton = ({ children, funq, loading }) => {
  return (
    <button
      onClick={funq}
      disabled={loading}
      //   className="btn btn-primary text-white  transition-all
      //   w-full py-3 rounded-2xl
      //  duration-500 bg-gradient-to-r from-[#FC495F] from-62%  to-[#FFC371] to-38% bg-size-200
      //  bg-pos-0 hover:bg-pos-100 flex justify-center items-center gap-3 "
      className="btn btn-primary text-white  transition-all w-full py-3 rounded-2xl
       duration-500 bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 bg-pos-0 hover:bg-pos-100 flex justify-center items-center gap-3 "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
