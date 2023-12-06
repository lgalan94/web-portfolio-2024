import { ImSpinner2 } from "react-icons/im";

const Loading = ({ className }) => {
  return (
    <div className={`${className} flex gap-1 items-center justify-center h-screen `}>
      <div className="bg-dark/80 text-light flex flex-col p-5 rounded-lg gap-1 items-center justify-center">
        <ImSpinner2 className="animate-spin spin 3s delay-700 w-10 h-10" /> 
        <div className="tracking-wider"> Loading... </div>
      </div>
    </div>
  );
};

export default Loading;