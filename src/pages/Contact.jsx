import { AppNavbar, Footer, Layout, Logo, AnimatedText, Transition, PageTitle } from '../components'
import React, {useState} from 'react';
import { ImSpinner2 } from "react-icons/im";
import {
  Typography,
  Input,
  Checkbox,
  Button,
  Alert
} from "@material-tailwind/react";
import { FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MdError } from "react-icons/md";

const Contact = () => {

	const navigate = useNavigate();

	const [name, setName] = React.useState('');
	const [email,  setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [isClicked, setIsClicked] = React.useState(false);
	const [isNameChecked, setIsNameChecked] = React.useState(false);
	const [isEmailChecked, setIsEmailChecked] = React.useState(false);
	const [isMessageChecked, setIsMessageChecked] = React.useState(false);

	const [openNameAlert, setOpenNameAlert] = React.useState(false);
	const [openEmailAlert, setOpenEmailAlert] = React.useState(false);
	const [openMessageAlert, setOpenMessageAlert] = React.useState(false);
	
	const handleFormSubmit = (event) => {
	  event.preventDefault();
	  setIsClicked(true);

	  if (name.length < 2) {
	  	setOpenNameAlert(true)
	  } 

	  if (email.length < 1) {
	  	setOpenEmailAlert(true)
	  } 

	  if (message.length < 2) {
	  	setOpenMessageAlert(true)
	  }  

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
	        toast.success("Thank you for your message!");
	        setName('');
	        setEmail('');
	        setMessage('');
	       	setTimeout(() => navigate('/contact'), 2500);
	       	setTimeout(() => setIsClicked(false), 2500);
	      } else {
	        toast.error('Error sending message!');
         	setTimeout(() => 2000);
         	setIsClicked(false)
	      }
	    });
	};

	React.useEffect(() => {
		if (name.length >= 2) {
			setOpenNameAlert(false)
		}
	}, [name])

	React.useEffect(() => {
		if (email.length > 0) {
			setOpenEmailAlert(false)
		}
	}, [email])

	React.useEffect(() => {
		if (message.length >= 2) {
			setOpenMessageAlert(false)
		}
	}, [message])

	const Reset = () => {
		setName('');
		setEmail('');
		setMessage('');
	}

	function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

	return (
		<>
				<PageTitle title="Web Portfolio | Contact" />
				<AppNavbar />
				
				<AnimatedText text="contact me" className="mt-4 mb-2 capitalize" />
				<AnimatedText text="For further questions, please email galanlito.94@gmail.com or message using the contact form below." className="!font-semibold !text-lg text-center px-2 md:px-10 mb-5 text-dark/50" />
				<Layout className="!h-[70vh] ">
						<motion.div 
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 2, delay: 0.2 }}
								className="flex flex-col w-100 justify-center items-center">

								<form onSubmit={handleFormSubmit} >
								
								<div className="flex flex-col flex-wrap w-80 md:w-full gap-1">
									<Alert 
										className="text-xs"
										icon={<Icon />}
										open={openNameAlert} 
										color="red"
										animate={{
											mount: { y: 0 },
											unmount : {y: 1},
										}}
									>
										Name must not be empty and characters must be greater than 1!
									</Alert>
									<Alert 
										className="text-xs"
										icon={<Icon />}
										open={openEmailAlert} 
										color="red"
										animate={{
											mount: { y: 0 },
											unmount : {y: 1},
										}}
									>
										Email must not be empty!
									</Alert>
									<Alert 
										className="text-xs"
										icon={<Icon />}
										open={openMessageAlert} 
										color="red"
										animate={{
											mount: { y: 0 },
											unmount : {y: 1},
										}}
									>
										Message must not be empty and characters must be greater than 1!
									</Alert>
								</div>

								<div className="mt-2">
						    <div className="flex w-80 md:w-full flex-col md:flex-row gap-2">
						    		<Input 
						    				type="text"
						    				value={name}
						    				onChange={e => setName(e.target.value)} 
						    				label="Name" 
						    				size="lg" 
						    				className="capitalize"
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
						    		<Button onClick={Reset} variant="text" className="outline outline-1 outline-dark/25" >
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

				<ToastContainer size="sm" position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
				<Footer />
		</>
	)
}

export default Transition(Contact)

