import { AppNavbar, Footer, Layout, Logo, AnimatedText, Transition, PageTitle } from '../components'
import React, {useState} from 'react';
import { ImSpinner2 } from "react-icons/im";
import {
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const AlertMessage = ({ message, color }) => {
		return <Alert color={color}> {message} </Alert>
}

const Contact = () => {

	const navigate = useNavigate();

	const [open, setOpen] = React.useState(1);
	const [name, setName] = React.useState('');
	const [email,  setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [isClicked, setIsClicked] = React.useState(false);
	const [isDisabled, setIsDisabled] = React.useState(true);
	
	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const handleFormSubmit = (event) => {
	  event.preventDefault();
	  setIsClicked(true);
	  fetch(`${import.meta.env.VITE_API_URL}/messages/send-message`, {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	      name: name,
	      email: email,
	      message: message
	    })
	  })
	    .then(result => result.json())
	    .then(data => {
	      console.log(data)
	      if (data === true) {
	        toast.info("Thank you for your message!");
	        setName('');
	        setEmail('');
	        setMessage('');
	       	setTimeout(() => navigate('/contact'), 2500);
	       	setTimeout(() => setIsClicked(false), 2500);
	      } else {
	        toast.error('Error sending message!');
         setTimeout(() => 2000);
	      }
	    });
	};


	return (
		<>
				<PageTitle title="Web Portfolio | Contact" />
				<AppNavbar />
				
				<AnimatedText text="contact me" className="mt-4 mb-2 capitalize" />
				<AnimatedText text="For further questions, please email galanlito.94@gmail.com or contact using the contact form below." className="!font-semibold !text-lg text-center px-2 md:px-10 mb-5 text-dark/50" />
				<Layout className="!h-[580px] md:h-[720px] lg:h-[500px]">
						<motion.div 
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 2, delay: 0.2 }}
								className="flex flex-col w-100 justify-center items-center">
								<form onSubmit={handleFormSubmit} >
								<div className="">
						    <div className="flex w-80 md:w-full flex-col md:flex-row gap-2">
						    		<Input 
						    				type="text"
						    				value={name}
						    				onChange={e => setName(e.target.value)} 
						    				label="Name" 
						    				size="lg" 
						    		/>
						      <Input 
						      		type="email"
						      		label="Email" 
						      		size="lg" 
						      		value={email}
						      		onChange={e => setEmail(e.target.value)} 
						      />
						    </div>
						    <div className="relative my-4 w-80 md:w-full ">
						        <textarea
						        		value={message}
						        		onChange={e => setMessage(e.target.value)} 
						          className="peer h-full min-h-[100px] w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-dark/75 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
						          placeholder=" "
						        ></textarea>
						        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark/75 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-dark/75 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-dark/75 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						          Message
						        </label>
						      </div>
						    <div className="flex w-80 md:w-full flex-row gap-1">
						    		<Button variant="text" className="outline outline-1 outline-dark/25" >
						    		  <FaUndo />
						    		</Button>
						      
						    		{
						    			!isClicked ? (
						    					<Button type="submit" className="capitalize" variant="gradient" fullWidth>
						    					  send message
						    					</Button>
						    				) : (
						    					<Button className="flex flex-row items-center capitalize justify-center" disabled fullWidth>
						    					  <ImSpinner2 className="animate-spin mr-1 w-4 h-4" /> Processing...
						    					</Button>
						    				)
						    		}

						    </div>
						</div>	
						</form>
						</motion.div>	
				</Layout>
				<ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
				<Footer />
		</>
	)
}

export default Transition(Contact)

