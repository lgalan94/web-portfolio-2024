import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { motion } from 'framer-motion';

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Loading, AdminNavbar, DefaultSidebar, AdminLayout, AdminLoading } from '../../components';
import { IoMdArrowBack } from "react-icons/io";

import {
  Card,
  CardBody,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const UpdateSettingsPage = () => {

  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { settingsId } = useParams();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isValueChecked, setIsValueChecked] = useState(false);


  const BackToHome = () => {
    return navigate('/admin');
  }


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/settings/${settingsId}`)
      .then((result) => result.json())
      .then((data) => {
        setKey(data.key);
        setValue(data.value);
        setLoading(false);
      });

  }, [settingsId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsClicked(true);
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
          setTimeout(() => navigate('/admin'), 1000);
        } else {
          toast.error('Error updating settings!');
          setTimeout(() => 1000);
        }
      });
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    setIsDisabled(false)
  };

  useEffect(() => {
    if (key.length >= 3 && value.length >= 5) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [key, value])

  useEffect(() => {
    if (value.length >= 5) {
        setIsValueChecked(true)
    } else {
      setIsValueChecked(false)
    }
  }, [value])

  const handleClick = () => {
    navigate('/admin')
  }

  return (
    
    <>
      <AdminNavbar />
      <div className="flex flex-row">
        <DefaultSidebar />
        <AdminLayout
          chipClass="hidden"
          buttonName="back"
          buttonIcon={<IoMdArrowBack />}
          handleClick={handleClick}
        >

         {
          loading ? <AdminLoading /> : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .4 }}
              >
               
               <div className="flex relative flex-col mt-10 items-center" >
                 <Card className="w-96 " color="" shadow={false}>
                  <Typography className="text-center p-4" variant="h5" color="blue-gray">
                    UPDATE {key.toUpperCase()}
                  </Typography>
                  
                  <CardBody>
                    <form className="flex flex-col gap-4">
                      <div className="mb-1 flex flex-col gap-6">
                        <Input
                          size="lg"
                          value={key}
                          disabled
                          className="capitalize !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        <div className="relative ">
                            <textarea
                              value={value}
                              onChange={handleValueChange}
                              className="peer h-full min-h-[75px] w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-dark/75 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                              placeholder=" "
                            ></textarea>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark/75 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-dark/75 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-dark/75 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              VALUE
                            </label>
                          </div>
                        
                      </div>

                      <div className="pt-0 mt-2 flex flex-row gap-1">
                       

                        {
                          isClicked ? (
                              <Button className="flex flex-row items-center capitalize justify-center" disabled fullWidth>
                                <ImSpinner2 className="animate-spin mr-1 w-4 h-4 capitalize"/> Updating...
                              </Button>
                            ) : (
                              <Button className="capitalize" disabled={isDisabled} onClick={handleSubmit} fullWidth>
                                update
                              </Button>
                            )
                        }
                      
                      </div>
                      
                      

                      
                      
                    </form>
                  </CardBody>
                  
                </Card>


               
                <div className="mt-3">
                  <Checkbox  
                    color="green"
                    className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    checked={isValueChecked}
                    label={
                      <Typography variant="small" color="gray" className="font-normal">
                        Value must be greater than 4 characters.
                      </Typography>
                    }
                  />
                </div>

               </div>


            </motion.div>
          )
         }

        </AdminLayout>
      </div>


      <div className="absolute">
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>




      
    </>

  );
};

export default UpdateSettingsPage;


 
