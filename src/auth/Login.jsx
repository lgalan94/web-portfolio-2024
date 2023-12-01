import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button} from "@material-tailwind/react";
import { Logo, Transition, PageTitle } from '../components'
import { IoMdArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';
  
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const BackToHome = () => {
    return navigate('/');
  }

  const retrieveUserDetails = (token) => {
    fetch(`${import.meta.env.VITE_API_URL}/user/user-details`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(result => result.json())
      .then(data => {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        });

        if (data.isAdmin) {
          setTimeout(() => navigate('/admin'), 1000);
          
        } else {
          setTimeout(() => navigate('/'), 900);
        }
      });
  }; 

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(result => result.json())
      .then(data => {
        if (data === false) {
          toast.error('Incorrect email or password!');
          setTimeout(() => 2000);
        } else {
          localStorage.setItem('token', data.auth);
          retrieveUserDetails(data.auth);
          toast.success("Login Successful!");
        }
      });
  };

  return (

   <>
     <PageTitle title="Web Portfolio | Admin Login" />
     <motion.div 
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 2, delay: 0.2 }}
     className="flex relative flex-col h-screen justify-center items-center bg-defaultColor">
       <Typography className="text-3xl mb-5 uppercase font-semibold p-5">Admin Login</Typography>
       <Card className="w-96">
         <CardHeader
           variant="gradient"
           color="gray"
           className="mb-4 grid h-28 place-items-center"
         >
           <Typography 
             variant="h3" 
             color="white"
             className="uppercase"
             >
             <Logo className="text-3xl" />
             
           </Typography>
         </CardHeader>
         <CardBody>
         <form className="flex flex-col gap-4" onSubmit={handleLogin}>
           <Input 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              size="lg" 
            />
           <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              label="Password"
              size="lg"
            />

            <div className="pt-0 flex flex-row gap-1">
            <Button onClick={BackToHome} variant="text" className="outline outline-1 outline-dark/25" >
              <IoMdArrowBack />
            </Button>

            <Button type="submit" className="capitalize" fullWidth>
              login
            </Button>
            </div>
          </form>
         </CardBody>
       </Card>

       

     </motion.div>

     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      
   </>
    
  );
}

export default Transition(Login)