import { Spinner } from "@material-tailwind/react";

const Loading = ({ position }) => {
  return (
    <div className={`${position} flex items-center justify-center h-screen `}>
      <Spinner className="h-16 w-16 text-gray-900/50"  />
    </div>
  );
};

export default Loading;