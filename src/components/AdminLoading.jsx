import { ImSpinner2 } from "react-icons/im";

const AdminLoading = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center h-full h-[72vh]`}>
      <div className="flex flex-col p-5 rounded-lg gap-1 items-center justify-center">
        <ImSpinner2 className="animate-spin spin 3s w-10 h-10" /> 
        <div className="tracking-wider"> Loading... </div>
      </div>
    </div>
  );
};

export default AdminLoading;