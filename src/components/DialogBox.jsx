import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const DialogBox = (props) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { _id, key, value } = props.settingsProp;
  const { settingsId } = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/settings/${settingsId}`)
      .then((result) => result.json())
      .then((data) => {
        setTitle(data.key);
      });
  }, [settingsId]);

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/settings/${settingsId}`, {
      method: 'DELETE',
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
          toast.success("Delete Successful!");
          setOpen(!open); // Close the dialog box
          setTimeout(() => history.push('/admin'), 1000);
        } else {
          toast.error('Error!');
          setOpen(!open);
        }
      });
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Card className="mt-6">
        <CardBody>
          <Typography color="light" className="text-sm font-bold tracking-wider bg-defaultColor rounded-full text-center mb-4">
            {key.toUpperCase()}
          </Typography>
          <Typography className="text-center text-sm">
            {value}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mx-auto">
          <Link to={`/update/${_id}`}>
            <Button className="rounded" variant="gradient" size="sm">
              <FaRegEdit className="h-3 w-3 hover:text-cyan-500 font-bold" />
            </Button>
          </Link>
          <Button onClick={handleOpen} className="rounded" variant="gradient" size="sm" color="red">
            <AiFillDelete className="h-3 w-3 hover:text-cyan-500 font-bold" />
          </Button>
        </CardFooter>
      </Card>

      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader>Are you sure you want to delete this data?</DialogHeader>
        <DialogBody>
          Delete {key}?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDelete}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
};

export default DialogBox;