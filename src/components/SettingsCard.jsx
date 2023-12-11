import React, { useState, useEffect } from "react";
  import { Link } from 'react-router-dom';
  import { FaRegEdit } from "react-icons/fa";
  import { AiFillDelete } from "react-icons/ai";
  import { useNavigate } from 'react-router-dom';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { ImSpinner2 } from "react-icons/im";
  import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    DialogFooter,
    Alert
  } from "@material-tailwind/react"; 
  import CustomDialogBox from './CustomDialogBox';
  import CustomButton from './CustomButton';

  const SettingsCard = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false); 
    const handleOpen = () => setOpen(!open);
    const { _id, key, value } = props.settingsProp;
    const [title, setTitle] = useState('');
    const [settings, setSettings] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/settings/${_id}`)
        .then((result) => result.json())
        .then((data) => {
          setTitle(data.key)
        });
    }, [_id]);



    const handleDelete = async (e) => {
        setIsClicked(true);
        e.preventDefault();
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/settings/${_id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            toast.success(`${key} Successfully Deleted!`);
            setOpen(false)

          } else {
            toast.error('Delete Error! ');
            setTimeout(() => 1000);
          }
        } catch (error) {
          alert("unknown error")
        }
      };
    

    return (
      <>
       
        <Card className="flex flex-wrap " floated={true} shadow={true} className="shadow bg-light">
          <CardBody>
            <Typography className="text-sm font-bold tracking-wider bg-defaultColor rounded-full text-center mb-4">
              {key.toUpperCase()}
            </Typography>
            
            <div className="my-4">
                <textarea
                  disabled
                  value={value}
                  className="peer text-center h-full min-h-[20px] w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-dark/75 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                ></textarea>
                
              </div>

          </CardBody>
          <CardFooter className="pt-0 flex flex-row gap-1 mx-auto">
            <Link to={`/admin/update/${_id}`}>
              <Button className="rounded px-3 py-2 hover:scale-105" variant="gradient">
                <FaRegEdit className="h-3 w-3" />
              </Button>
            </Link>
              <Button onClick={handleOpen} className="rounded px-3 py-2 hover:scale-105" variant="gradient" color="red">
                <AiFillDelete className="h-3 w-3" />
              </Button>
          </CardFooter>
        </Card>
    
        <CustomDialogBox 
              open={open} 
              handleOpen={handleOpen}
              title="Confirmation" 
          >
              Delete <span className="text-teal-300 font-semibold uppercase">{title}</span> ?

            <div className="mt-10 flex flex-row gap-1">
              <CustomButton handleClick={handleOpen} label="cancel" color="black" spinner="hidden" />
              {
                !isClicked ? (
                    <CustomButton handleClick={handleDelete} label="delete" color="green" spinner="hidden" />
                  ) : (
                    <CustomButton label="deleting..." color="green" />
                  )
              }
            
            </div>
        </CustomDialogBox>

        <div className="absolute">
          <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        </div>

              </>
    );
  };

  export default SettingsCard;