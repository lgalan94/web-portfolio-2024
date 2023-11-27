import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import {
  Logo,
  Transition
} from '../components'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
  
const Login = () => {

const navigate = useNavigate();

const BackToHome = () => {
  return navigate('/');
}

  return (

   <>
     <Helmet>
      <title>Login</title>
     </Helmet>
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
         <CardBody className="flex flex-col gap-4">
           <Input label="Email" size="lg" />
           <Input label="Password" size="lg" />
         </CardBody>
         <CardFooter className="pt-0 flex flex-row gap-1">
               <Button onClick={BackToHome} variant="text" className="outline outline-1 outline-dark/25" >
                 <IoMdArrowBack />
               </Button>
             <Button className="capitalize" variant="gradient" fullWidth>
               login
             </Button>
           
         </CardFooter>
       </Card>
     </motion.div>


   </>
    
  );
}

export default Transition(Login)