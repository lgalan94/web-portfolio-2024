import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SettingsCard = (props) => {

 const { _id, key, value } = props.settingsProp;

  return (
    <div className="shadow-md shadow-stone-500 bg-gray-50">
      <div className="p-2">
        <p className="text-sm font-semibold text-slate-700">{key.toUpperCase()}</p>
      </div>
      <div className="p-2">
        <p className="border text-sm text-center border-gray-300 text-slate-700 font-semibold p-2">{value}</p>
      </div>
      <div className="p-4 mt-auto">
        <Link to={`/update/${_id}`}>
          <button title="update" className="flex outline outline-slate-300 text-xs hover:bg-gray-500 hover:text-white rounded-sm px-2 py-1 outline-2">
            <AiFillEdit size={14} /> 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SettingsCard;