import { RotatingLines } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      width="20"
      visible={true}
    />
  );
};

export default LoaderSpinner;
