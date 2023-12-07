import { EducationCard,  AdminNavbar, Loading } from '../../components';
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

const Education = () => {

	const [title, setTitle] = useState('');
	const [school, setSchool] = useState('');
	const [schoolLink, setSchoolLink] = useState('');
	const [timeRange, setTimeRange] = useState('');
	const [address, setAddress] = useState('');
	const [learnings, setTLearnings] = useState('');
	const [education, setEducation] = useState([]);

	const [count, setCount] = useState(0);
	const [isClicked,setIsClicked] = useState(false);
	const [loading, setLoading] = useState(true);
	const [openDialog, setOpenDialog] = useState(false);

		const fetchEducation = () => {
		  fetch(`${import.meta.env.VITE_API_URL}/education`, {
		    method: 'GET',
		    headers: {
		      Authorization: `Bearer ${localStorage.getItem('token')}`
		    }
		  })
		    .then(result => result.json())
		    .then(data => {
		      if (data.length > 0) {
		        setEducation(data.map((education) => (
		        		<EducationCard educationProps={education} key={education._id} />
		        )))
		      } else {
	      	setEducation(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
	)
		      }
		      setLoading(false);
		      {
		      	data.length === undefined ? setCount('No data') : setCount(data.length)
		      }

		    });
		}; 

		useEffect(() => {
		  fetchEducation();
		}, [education]);

		const handleOpen = () => {
			setOpenDialog(!openDialog);
		}

		const handleFormSubmit = (event) => {
		  event.preventDefault();
		  setIsClicked(true);
		  fetch(`${import.meta.env.VITE_API_URL}/education/add`, {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json',
		      Authorization: `Bearer ${localStorage.getItem('token')}`
		    },
		    body: JSON.stringify({
		      title: title,
		      school: school,
		      schoolLink: schoolLink,
		      timeRange: timeRange,
		      address: address,
		      learnings: learnings,

		    })
		  })
		    .then(result => result.json())
		    .then(data => {
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
					{
						loading ? <Loading /> : (

								<>
										<div className="p-5 flex justify-between">
										  <Chip variant="ghost" value={count} />
										  <Button onClick={handleOpen} variant="gradient" color="blue" size="sm" className="flex flex-row "><IoMdAdd className="h-4 w-4" /> Add new</Button>
										</div>
										<div className="p-10 w-full max-w-[92vw] h-full max-h-[80vh] lg:max-h-[70vh] overflow-y-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5">
												{education}
										</div>

										<Dialog 
										  size="xs" 
										  open={openDialog} 
										  handler={handleOpen}
										  animate={{
										    mount: { scale: 1, y: 0 },
										    unmount: { scale: 0.9, y: -100 },
										  }}
										>
										  <DialogHeader className="border border-b-gray-900/20 rounded-t-lg shadow justify-center"> New Education </DialogHeader>
										  <DialogBody className="text-center font-leading">
										    
										  		<form className="flex flex-col">
										  		  <div className="mb-1 flex flex-col gap-2">
										  		    <Input 
										  		       type="text"
										  		       value={name.toUpperCase()}
										  		       onChange={e => setName(e.target.value.toUpperCase())} 
										  		       label="Title"
										  		       size="lg" 
										  		     />
										  		     <Input 
										  		       type="text"
										  		       value={name.toUpperCase()}
										  		       onChange={e => setName(e.target.value.toUpperCase())} 
										  		       label="School"
										  		       size="lg" 
										  		     />
										  		     <Input 
										  		       type="text"
										  		       value={name.toUpperCase()}
										  		       onChange={e => setName(e.target.value.toUpperCase())} 
										  		       label="School Link"
										  		       size="lg" 
										  		     />
										  		     <Input 
										  		       type="text"
										  		       value={name.toUpperCase()}
										  		       onChange={e => setName(e.target.value.toUpperCase())} 
										  		       label="Time Range"
										  		       size="lg" 
										  		     />
										  		     <Input 
										  		       type="text"
										  		       value={name.toUpperCase()}
										  		       onChange={e => setName(e.target.value.toUpperCase())} 
										  		       label="Address"
										  		       size="lg" 
										  		     />
										  		  </div>
										  		  <div className="relative my-1 w-80 md:w-full ">
										  		      <textarea
										  		      		
										  		        className="peer h-full min-h-[100px] w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-dark/75 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
										  		        placeholder=" "
										  		      ></textarea>
										  		      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark/75 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-dark/75 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-dark/75 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
										  		        Learnings or Experiences
										  		      </label>
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
					
				</>
		)
}

export default Education