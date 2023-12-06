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
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert
} from "@material-tailwind/react"; 

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
     
      <Card floated={true} shadow={true} className="min-w-[20vw]">
        <CardBody>
          <Typography className="text-sm font-bold tracking-wider bg-defaultColor rounded-full text-center mb-4">
            {key.toUpperCase()}
          </Typography>
          <Typography className="text-center text-[12px] justify-center flex flex-wrap">
            {value}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mx-auto">
          <Link to={`/admin/update/${_id}`}>
            <Button className="rounded mr-1" variant="gradient" size="sm">
              <FaRegEdit className="h-3 w-3 hover:text-cyan-500 font-bold" />
            </Button>
          </Link>
            <Button onClick={handleOpen} className="rounded" variant="gradient" size="sm" color="red">
              <AiFillDelete className="h-3 w-3 hover:text-cyan-500 font-bold" />
            </Button>
        </CardFooter>
      </Card>
      

      <Dialog 
        size="xs" 
        open={open} 
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="border border-b-gray-900/20 rounded-t-lg shadow justify-center"> Confirmation!</DialogHeader>
        <DialogBody className="text-center font-leading">
          Delete <span className="text-teal-300 font-semibold uppercase">{title}</span> ?
        </DialogBody>
        <DialogFooter className="justify-center">
          <Button
            size="sm"
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>

          {
            isClicked ? 
            <Button size="sm" variant="gradient" color="green" className="flex flex-row items-center capitalize justify-center" disabled>
              <ImSpinner2 className="animate-spin mr-1 w-4 h-4" /> Processing...
            </Button>
            :
            <Button size="sm" variant="gradient" color="green" onClick={handleDelete}>
              <span>Confirm</span>
            </Button>
          }           
        </DialogFooter>
      </Dialog>

      <div className="absolute">
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>

            </>
  );
};

export default SettingsCard;