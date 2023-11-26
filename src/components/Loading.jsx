import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner className="h-16 w-16 text-gray-900/50" color="blue" />
    </div>
  );
};

export default Loading;