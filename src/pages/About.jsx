import { AppNavbar, Footer, AnimatedText,Layout } from '../components'
import {
	Typography
} from "@material-tailwind/react"

import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});


  useEffect(() => {
     if(isInView){
      motionValue.set(value);
     } 
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
         ref.current.textContent = latest.toFixed(0);
      }
    } )
  }, [springValue, value]) 

  return <span ref={ref}></span>

}

const About = () => {
	return (
		<>
			<AppNavbar />

						<AnimatedText text="about me" className="m-10" />

						<Layout>
									<div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
													<div class="flex flex-auto w-full items-center lg:w-64 p-10">
																<div className="flex flex-col items-start justify-start">
																 <motion.h2 
																   className="mb-2 text-lg font-bold uppercase text-black/75" >
																   {`Who am I?`.split('').map((letter, index) => (
																     <motion.span
																       key={index}
																       initial={{ opacity: 0, x: -20 }}
																       animate={{ opacity: 1, x: 0 }}
																       transition={{ duration: 0.5, delay: index * 0.2 }}
																     >
																       {letter}
																     </motion.span>
																   ))}
																 </motion.h2>

																 <motion.p 
																     initial={{ opacity: 0 }}
																     animate={{ opacity: 1 }}
																     exit={{ opacity: 0 }}
																     transition={{ duration: 2.5 }}
																     className="font-small text-sm mb-10 text-justify">I am a Full-Stack Web Developer with a passion for building web applications. I can create the user interface (front-end) and the code that makes the website work (back-end). I have experience with a variety of programming languages and technologies, including HTML, CSS, JavaScript, Node.js, MongoDB as database, and the node.js framework, which is express.js. I also have experience in building small projects in React.js.
																 </motion.p>

																 <motion.h2 
																   className="mb-2 text-lg font-bold uppercase text-black/75" >
																   {`Career Objectives`.split('').map((letter, index) => (
																     <motion.span
																       key={index}
																       initial={{ opacity: 0, x: -20 }}
																       animate={{ opacity: 1, x: 0 }}
																       transition={{ duration: 0.5, delay: index * 0.3 }}
																     >
																       {letter}
																     </motion.span>
																   ))}
																 </motion.h2>

																 <motion.p 
																   initial={{ opacity: 0 }}
																   animate={{ opacity: 1 }}
																   exit={{ opacity: 0 }}
																   transition={{ duration: 2.5 }}
																   className="font-medium text-sm text-justify"
																 >To be able to secure a challenging professional career in a reputable organization with opportunity of challenges and advancement; and to expand my learnings and knowledge for mutual growth success. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills. Motivated to learn, grow and excel in terms of developing Web Applications.
																 </motion.p>
																</div>
											  </div>

											  <div class="flex px-14 lg:px-0 items-center flex-auto w-full lg:w-32">
			  		         <div className="relative rounded-2xl border-2 border-solid border-dark bg-light p-8">
			  		           <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark/75"  />
			  		           <img 
			  		             src="profile.jpg" 
			  		             alt="profile-img" 
			  		             className="w-full h-auto rounded-2xl" 
			  		           />
			  		         </div>
											  </div>

											  <div class="flex flex-row lg:flex-col justify-center flex-auto items-center lg:items-end w-full lg:w-2 p-10 lg:gap-0 gap-12">
											    	 <div className="flex flex-col items-center lg:items-end justify-center mb-0 lg:mb-8">
											    	    <span className="inline-block text-5xl font-bold"><AnimatedNumbers value={5} /> +</span>
											    	    <Typography variant="h5" className="text-center font-medium capitalize text-black/75">Personal Projects</Typography>
											    	 </div>
											    	 <div className="flex flex-col items-center lg:items-end justify-center">
											    	    <span className="inline-block text-5xl font-bold"><AnimatedNumbers value={1} /> +</span>
											    	    <Typography variant="h5" className="text-center font-medium capitalize text-black/75" >Years experience</Typography>
											    	 </div>
											  </div>
									</div>
						</Layout>
						         						         				
			<Footer />
		</>
	)
}

export default About