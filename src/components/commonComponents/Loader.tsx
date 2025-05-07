import { PuffLoader } from "react-spinners";

interface ILoaderProps {
  loading?: boolean;
  bgClassName: string;
}

const Loader = ({ loading = true}: ILoaderProps) => {
  if (!loading) return null;
  

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center ">
      <PuffLoader />
    </div>
  );
};

export default Loader;
