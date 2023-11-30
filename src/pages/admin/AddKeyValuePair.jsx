import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsArrowLeftShort } from "react-icons/bs";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminNavbar } from '../../components';
import { IoMdArrowBack } from "react-icons/io";

import {
  Card,
  CardBody,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const AddKeyValuePair = () => {

  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const BackToHome = () => {
    return navigate('/admin');
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/settings/add-key-value`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        key: key,
        value: value
      })
    })
      .then(result => result.json())
      .then(data => {
        console.log(data)
        if (data === true) {
          toast.success("Add Successful!");
          setTimeout(() => navigate('/admin'), 1000);
        } else {
          toast.error('Error adding new data!');
          setTimeout(() => 1000);
        }
      });
  };



  return (
    
    <>
      <AdminNavbar />

       <div className="flex relative flex-col mt-10 items-center" >
         <Card className="w-96 " color="" shadow={false}>
          <Typography className="capitalize text-center p-4" variant="h5" color="blue-gray">
            add new
          </Typography>
          
          <CardBody>
            <form className="flex flex-col">
              <div className="mb-1 flex flex-col ">
                <Input 
                   type="text"
                   value={key}
                   onChange={e => setKey(e.target.value)} 
                   id="key"
                   label="Key"
                   size="lg" 
                 />
                <div className="relative my-4">
                    <textarea
                      value={value}
                      onChange={e => setValue(e.target.value)} 
                      className="peer h-full min-h-[100px] w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-dark/75 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark/75 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-dark/75 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-dark/75 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Value
                    </label>
                  </div>
                
              </div>

              <div className="pt-0 mt-2 flex flex-row gap-1">
                <Button onClick={BackToHome} size="sm" >
                  <IoMdArrowBack />
                </Button>
                <Button onClick={handleFormSubmit} fullWidth>
                  SAVE
                </Button>

               
              </div>
              
              

              
              
            </form>
          </CardBody>
          
        </Card>
       </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>

  );
};

export default AddKeyValuePair;


 
