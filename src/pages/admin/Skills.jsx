import { AdminNavbar, SkillCard, Loading } from '../../components';
import { useState, useEffect } from 'react';
import { Chip, Button } from '@material-tailwind/react';
import { IoMdAdd } from "react-icons/io";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner2 } from "react-icons/im";
import {
  Dialog,
  DialogHeader, 
  DialogBody,
  DialogFooter,
  Input,
  Alert
} from "@material-tailwind/react";

const Skills = () => {

	const [skills, setSkills] = useState([]);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false); 
	const [isClicked, setIsClicked] = useState(false);
	const [name, setName] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);
	const [openAlert, setOpenAlert] = useState(false);
	const [inAlertName, setInAlertName] = useState('')

	const fetchSkills = () => {
	  fetch(`${import.meta.env.VITE_API_URL}/skills`, {
	    method: 'GET',
	    headers: {
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    }
	  })
	    .then(result => result.json())
	    .then(data => {
	      if (data.length > 0) {
	        setSkills(data.map((skills) => (
	        		<SkillCard skillsProp={skills} key={skills._id} />
	        )))
	      } else {
      	setSkills(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
)
	      }
	      setLoading(false);
	      {
	      	data.length === undefined ? setCount('No data') : setCount(data.length)
	      }

	    });
	}; 

	useEffect(() => {
	  fetchSkills();
	}, [skills]);

const handleOpen = () => {
	setOpen(!open);
	setOpenAlert(false);
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  setIsClicked(true);
  fetch(`${import.meta.env.VITE_API_URL}/skills/add-skill`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      name: name
    })
  })
    .then(result => result.json())
    .then(data => {
    	console.log(data)
      	if (data === true) {
      	  toast.success("Successfully Added!");
      	  setOpen(false);
      	  setIsClicked(false);
      	  setName('');
      	} else if (data.name === name) {
      			setOpenAlert(true);
      			setInAlertName(data.name)
      			setName('');
      			setIsClicked(false);
      			setOpen(false)
      	} else {
      	  toast.error('Error adding new data!');
      	  setTimeout(() => 1000);
      	  setIsClicked(false);
      	  setName('');
      	  setOpen(false)
      	}
    });
};

	return (
		<>
			<AdminNavbar />
			<div className="p-5 flex justify-between">
			  <Chip variant="ghost" value={count} />
			  <Button onClick={handleOpen} variant="gradient" color="blue" size="sm" className="flex flex-row "><IoMdAdd className="h-4 w-4" /> Add new</Button>
			  
			</div>
			<Alert 
				open={openAlert}
				onClose={() => setOpenAlert(false)}
				className="w-[85vw] mx-auto text-sm"
				color="red"
				animate={{
					mount: { y: 0 },
					unmount : {y: 1},
				}}
			>
				{inAlertName.toUpperCase()} already exists!
			</Alert>
			<div className="p-10 w-full max-w-[92vw] h-full max-h-[80vh] lg:max-h-[70vh] overflow-y-auto mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-5">
					{skills}
			</div>

			<Dialog 
			  size="xs" 
			  open={open} 
			  handler={handleOpen}
			  animate={{
			    mount: { scale: 1, y: 0 },
			    unmount: { scale: 0.9, y: -100 },
			  }}
			>
			  <DialogHeader className="border border-b-gray-900/20 rounded-t-lg shadow justify-center"> Add New Skill </DialogHeader>
			  <DialogBody className="text-center font-leading">
			    
			  		<form className="flex flex-col">
			  		  <div className="mb-1 flex flex-col ">
			  		    <Input 
			  		       className="uppercase"
			  		       type="text"
			  		       value={name}
			  		       onChange={e => setName(e.target.value)} 
			  		       label="Name"
			  		       size="lg" 
			  		     />
			  		  </div>
			  		  <div className="flex flex-row justify-center gap-1 mt-8">
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
			  		  			    <ImSpinner2 className="animate-spin mr-1 w-4 h-4" /> Saving...
			  		  			  </Button>
			  		  			  :
			  		  			  <Button onClick={handleFormSubmit} size="sm" variant="gradient" color="green" >
			  		  			    <span>Save</span>
			  		  			  </Button>
			  		  			}
			  		  </div>
			  		</form>
			  </DialogBody>
			</Dialog>

			<div className="absolute">
			  <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			</div>

		</>
	)
}

export default Skills