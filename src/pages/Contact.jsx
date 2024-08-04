import { AppNavbar, Footer, Layout, Logo, AnimatedText, PageTitle } from '../components'
import React, {useState} from 'react';
import { ImSpinner2 } from "react-icons/im";
import {
  Typography,
  Input,
  Checkbox,
  Button,
  Alert,
  Textarea
} from "@material-tailwind/react";
import { FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MdError } from "react-icons/md";

const Contact = () => {

	const navigate = useNavigate();

	let emailAdd = "galanlito.94@gmail..com";
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
	const [messageSentAlert, setMessageSentAlert] = React.useState(false);

	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [messageError, setMessageError] = useState(false);

	const handleFormSubmit = (event) => {
	  event.preventDefault();
	  setIsClicked(true);

	  if (name.length < 2) {
	  	setOpenNameAlert(true)
	  	setNameError(true)
	  } 

	  if (email.length < 1) {
	  	setOpenEmailAlert(true)
	  	setEmailError(true)
	  } 

	  if (message.length < 2) {
	  	setOpenMessageAlert(true)
	  	setMessageError(true)
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
	      if (data === true) {
	      	toast.success("Your message has successfully sent!")
	        setMessageSentAlert(true);
	        setName('');
	        setEmail('');
	        setMessage('');
	       	setTimeout(() => navigate('/contact'), 2500);
	       	setTimeout(() => setIsClicked(false), 2500);
	       	setTimeout(() => setMessageSentAlert(false), 5000);
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
			setNameError(false)
		}
	}, [name])

	React.useEffect(() => {
		if (email.length > 0) {
			setOpenEmailAlert(false)
			setEmailError(false)
		}
	}, [email])

	React.useEffect(() => {
		if (message.length >= 2) {
			setOpenMessageAlert(false)
			setMessageError(false)
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
	
	function checkIcon() {
	  return (
	    <svg
	      xmlns="http://www.w3.org/2000/svg"
	      viewBox="0 0 24 24"
	      fill="currentColor"
	      className="h-6 w-6"
	    >
	      <path
	        fillRule="evenodd"
	        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
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
				<AnimatedText text={`For further questions, please email me at galanlito.94gmail.com or message using the contact form below.`} className="!font-semibold !text-lg text-center px-2 md:px-10 mb-5 text-dark/50" />
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
							      icon={<checkIcon />}
							      animate={{
							      	mount: { y: 0 },
							      	unmount : {y: 1},
							      }}
							      open={messageSentAlert}
							      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
							    >
							      Thank you for your message. Have a Good day!
							    </Alert>
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
										Name is required!
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
										Email is required!
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
										Message must not be empty!
									</Alert>
								</div>

								<div className="mt-2 flex flex-col gap-2">
						    <div className="flex w-80 md:w-full flex-col md:flex-row gap-2">
						    		<Input 
						    				type="text"
						    				value={name}
						    				onChange={e => setName(e.target.value)} 
						    				label="Name" 
						    				size="lg" 
						    				className="capitalize"
						    				color="teal"
						    				error={nameError}
						    		/>
						      <Input 
						      		type="email"
						      		label="Email" 
						      		size="lg" 
						      		value={email}
						      		onChange={e => setEmail(e.target.value)} 
						      		color="teal"
						      		error={emailError}
						      />
						    </div>

						    <div className="w-full">
		          <Textarea 
		          		label={`Message (${message.length})`}
		          		value={message}
		          		onChange={e => setMessage(e.target.value)}  
		          		color="teal"
		          		error={messageError}
		          		autoComplete
		          />
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
						    					  <ImSpinner2 className="animate-spin mr-1 w-4 h-4" /> Sending...
						    					</Button>
						    				)
						    		}

						    </div>
						</div>	
						</form>
						</motion.div>	
				</Layout>

				<ToastContainer size="sm" position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
				<Footer />
		</>
	)
}

export default Contact

