import { AppNavbar, Footer, AnimatedText, Layout, WordAnimation, Transition, Loading, Experience, Education, MySkills, ButtonGroupAbout, PageTitle, MyProjects, MyCertificates } from '../components'
import {	Typography } from "@material-tailwind/react"

import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState, useContext } from 'react';
import DataContext from '../DataContext.js';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
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
	const [isLoading, setIsLoading] = useState(true);
	const { data } = useContext(DataContext);

	useEffect(() => {
			if (data.whoAmIContent !== null && data.careerObjContent !== null) {
						setIsLoading(false)
			}
	}, [data])

	return (
		<>
			<PageTitle title="Web Portfolio | About Me" />

			{
				isLoading ? (
							<Loading />
					) : (
							<>

								<AppNavbar />
								
								<ButtonGroupAbout />
											

											<Layout className="">
												<div id="about-section"> 
														<AnimatedText text="about me" className="mt-4 mb-2 lg:mb-5 capitalize" />
																	<div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
																					<div className="flex flex-auto w-full items-center lg:w-64 p-10">
																								<div className="flex flex-col items-start justify-start">
																								 <motion.h2 
																								   className="mb-2 text-lg font-bold font-poetsen uppercase text-cyan-600" >
																								   {`Who am I?`.split('').map((letter, index) => (
																								     <motion.span
																								       key={index}
																								       initial={{ opacity: 0, x: -20 }}
																								       animate={{ opacity: 1, x: 0 }}
																								       transition={{ duration: 0.2, delay: index * 0.1 }}
																								     >
																								       {letter}
																								     </motion.span>
																								   ))}
																								 </motion.h2>

																								 <motion.p 
																								   initial={{ opacity: 0 }}
																								   animate={{ opacity: 1 }}
																								   exit={{ opacity: 0 }}
																								   transition={{ duration: 1, delay: 0.1 }}
																								   className="text-sm text-justify mb-6"
																								 >
																								 {data.whoAmIContent}
																								 </motion.p>

																								 <motion.h2 
																								   className="mb-2 text-lg font-bold uppercase text-cyan-600" >
																								   {`Career Objectives`.split('').map((letter, index) => (
																								     <motion.span
																								       key={index}
																								       initial={{ opacity: 0, x: -20 }}
																								       animate={{ opacity: 1, x: 0 }}
																								       transition={{ duration: 1, delay: index * 0.1 }}
																								     >
																								       {letter}
																								     </motion.span>
																								   ))}
																								 </motion.h2>

																								 <motion.p 
																								   initial={{ opacity: 0 }}
																								   animate={{ opacity: 1 }}
																								   exit={{ opacity: 0 }}
																								   transition={{ duration: 1, delay: 0.1 }}
																								   className="text-sm text-justify"
																								 >
																								 {data.careerObjContent}
																								 </motion.p>
																								</div>
																			  </div>

																			  <div className="flex px-14 lg:px-0 items-center flex-auto w-full lg:w-32">
											  		         <div className="relative rounded-2xl border-2 border-solid border-dark bg-light p-8">
											  		           <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark/75"  />
											  		           <motion.img 
											  		             src="profile.jpg" 
											  		             alt="profile-img" 
											  		             className="w-full h-auto rounded-2xl" 
											  		             initial={{ opacity: 0 }}
											  		             animate={{ opacity: 1 }}
											  		             exit={{ opacity: 0 }}
											  		             transition={{ duration: 2, delay: 0.2 }}
											  		           />
											  		         </div>
																			  </div>

																			  <div className="flex flex-row lg:flex-col justify-center flex-auto items-center lg:items-end w-full lg:w-2 p-10 lg:gap-0 gap-12">
																			    	 <div className="flex flex-col items-center lg:items-end justify-center mb-0 lg:mb-8">
																			    	    <span className="inline-block text-5xl font-bold text-dark/75"><AnimatedNumbers value={3} /> +</span>
																			    	    <Typography variant="h5" className="text-center font-medium capitalize text-black/75">Personal Projects</Typography>
																			    	 </div>
																			    	 <div className="flex flex-col items-center lg:items-end justify-center">
																			    	    <span className="inline-block text-5xl font-bold text-dark/75"><AnimatedNumbers value={1} /> +</span>
																			    	    <Typography variant="h5" className="text-center font-medium capitalize text-black/75" >Years experience</Typography>
																			    	 </div>
																			  </div>
																	</div>
												</div>
											</Layout>

											<Layout className="mb-36">
													
													<div id="experience-section">
															<AnimatedText text="work experience" className="mt-24 mb-10 capitalize" />
															<Experience />
													</div>

													<div id="education-section">
															<AnimatedText text="education" className="mt-24 mb-10 capitalize" />
															<Education />
													</div>

													<div id="skills-section">
															<AnimatedText text="skills" className="mt-24 mb-10 capitalize" />
															<MySkills />
													</div>

													<div id="certificates-section">
															<AnimatedText text="certifications" className="mt-24 mb-10 capitalize" />
															<MyCertificates />
													</div>

											</Layout>
											         						         				
								<Footer />
							</>
					)
			}
		</>
	)
}

export default Transition(About)