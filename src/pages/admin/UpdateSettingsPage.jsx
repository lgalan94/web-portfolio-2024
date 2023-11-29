import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsArrowLeftShort } from "react-icons/bs";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateSettingsPage = () => {
  const navigate = useNavigate();
  const { settingsId } = useParams();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/settings/${settingsId}`)
      .then((result) => result.json())
      .then((data) => {
        setKey(data.key);
        setValue(data.value);
      });
  }, [settingsId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/settings/${settingsId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
        value
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === true) {
          toast.success("Update Successful!");
          setTimeout(() => navigate('/admin-home'), 1000);
        } else {
          toast.error('Error updating settings!');
          setTimeout(() => 1000);
        }
      });
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    setIsDirty(true);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-grow">
        {/* Top Bar */}
        
        <h1 className="p-2"></h1>
        <div className="p-20">
          <p className="text-lg text-orange-600 font-bold mb-4">UPDATE {key.toUpperCase()}</p>
          <div className="shadow-md shadow-stone-500 bg-gray-50 p-4">
          <Link as={Link} to="/admin" >
            <button
              type="submit"
              className=" 
                        text-xs
                        hover:bg-gray-500 
                        hover:text-white 
                        rounded-sm p-1 mb-3" 
                        
            >
              <BsArrowLeftShort size={22}/>
            </button>
          </Link>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="value" className="text-sm font-semibold">
                  Key
                </label>
                <input
                  disabled
                  type="text"
                  id="key"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 border text-sm text-red-400 border-gray-300 px-2 py-1 rounded-sm w-full"
                  value={key}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="value" className="text-sm font-semibold">
                  Value
                </label>
                <textarea
                  id="value"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 px-2 py-1 rounded-sm w-full"
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
              {isDirty ? (
                <button
                  type="submit"
                  className="outline 
                            outline-slate-300 
                            text-xs
                            hover:bg-gray-500 
                            hover:text-white 
                            rounded-sm px-2 py-1 
                            outline-2"
                >
                  Save
                </button>
              ) : (
                <p
                  className="w-32 text-center outline 
                            outline-slate-300 
                            text-xs
                            hover:bg-gray-500 
                            hover:text-white 
                            rounded-sm px-2 py-1 
                            outline-2"
                >
                  No changes made
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  );
};

export default UpdateSettingsPage;