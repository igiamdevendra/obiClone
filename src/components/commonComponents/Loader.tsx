import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { isLoading } from "../../features/Loader/loaderSlice";

const Loader = () => {
  const loading = useSelector(isLoading);
  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white/20">
      <div className="p-5 bg-white rounded-full">
      <HashLoader size="30" color="#000000"/>
      </div>
    </div>


  );
};

export default Loader;
