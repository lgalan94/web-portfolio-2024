import { AppNavbar, Footer, AnimatedText, Layout } from '../components'
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

					<Layout className="bg-defaultColor p-10">
						<AnimatedText text="about me" className="pb-16" />
						<div className="flex lg:flex-row flex-col w-full gap-16">
						         <div className="flex-col flex-auto lg:w-64 items-start justify-start">

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

						         <div className="col-span-3 relative h-max rounded-2xl p-5 border-[10px] border-solid border-black/75 bg-white">
						         <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg"  />
						            <motion.img 
						              src="pf.png" 
						              alt="profile-img" 
						              className="w-full h-auto rounded-2xl" 
						              initial={{ opacity: 0 }}
						              animate={{ opacity: 1 }}
						              exit={{ opacity: 0 }}
						              transition={{ duration: 2 }}
						            />
						         </div>

						         <div className="col-span-2 flex flex-col items-end justify-center">
						          
						          <div className="flex flex-col items-end justify-center mb-8">
						             <span className="inline-block text-5xl font-bold"><AnimatedNumbers value={5} /> +</span>
						             <h2 className="text-xl font-medium capitalize text-black/75">Personal Projects</h2>
						          </div>
						          <div className="flex flex-col items-end justify-center">
						             <span className="inline-block text-5xl font-bold"><AnimatedNumbers value={1} /> +</span>
						             <h2 className="text-xl font-medium capitalize text-black/75" >Years experience</h2>
						          </div>
						         </div>

						       </div>				
				</Layout>


			<Footer />
		</>
	)
}

export default About