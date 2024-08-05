import { AppNavbar, Footer, Layout, AnimatedText, Loading, PageTitle } from '../components'
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import DataContext from '../DataContext';
import { Button, Typography } from '@material-tailwind/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const fadeIn2 = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const Home = () => {

	const [isLoading, setIsLoading] = useState(true);

	const { data } = useContext(DataContext);

	useEffect(() => {
	  setTimeout(() => setIsLoading(false), 2000)
	}, []);

	return (
		<>
			<PageTitle title="Web Portfolio | Home" />

			<AppNavbar />
					<Layout className="h-[85vh]">

							<div className="flex flex-col lg:flex-row gap-6">
							{/*div #1*/}
									<div className="basis-2/5 flex justify-center lg:justify-end ">
											
										{
												!isLoading ? (
															<motion.img 
																src="profile-pic.png"
																className="w-[85%] mt-10 h-auto rounded-full border shadow shadow-lg border-[10px] border-gray-400" 
															  initial={{ opacity: 0 }}
															  animate={{ opacity: 1 }}
															  exit={{ opacity: 0 }}
															  transition={{ duration: 1, ease: 'easeOut' }}
															/>
													) : (
															<div className="flex animate-pulse flex-wrap items-center gap-8">
											      <div className="grid h-[300px] w-[300px] lg:h-[420px] lg:w-[420px] mt-10 rounded-full border shadow shadow-lg border-[10px] border-gray-400 place-items-center bg-gray-300">
											        <svg
											          xmlns="http://www.w3.org/2000/svg"
											          fill="none"
											          viewBox="0 0 24 24"
											          strokeWidth={2}
											          stroke="currentColor"
											          className="h-12 w-12 text-gray-500"
											        >
											          <path
											            strokeLinecap="round"
											            strokeLinejoin="round"
											            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
											          />
											        </svg>
											      </div>
											    </div>
													)
										}

									</div>

									{/*div #2*/}
									<div className="basis-3/5 flex items-center justify-center lg:justify-start">
										
										{
												isLoading ? (
																			<div className="mt-6 animate-pulse flex flex-col">

																      <Typography
																        as="div"
																        variant="h3"
																        className="mb-4 h-8 lg:h-10 w-[60vw] lg:w-64 rounded-lg bg-gray-300 self-center lg:self-start"
																      >
																        &nbsp;
																      </Typography>
																      <Typography
																        as="div"
																        variant="h1"
																        className="mb-4 h-16 w-[90vw] lg:w-[560px] rounded-lg bg-gray-300 self-center lg:self-start"
																      >  
																        &nbsp;
																      </Typography>
																      <Typography
																        as="div"
																        variant="paragraph"
																        className="mb-8 h-4 w-80 rounded-lg bg-gray-300 self-center lg:self-start"
																      >
																        &nbsp;
																      </Typography>
																      <div className="flex flex-row gap-2 self-center lg:self-start">
																      	<Typography
																      	  as="div"
																      	  variant="button"
																      	  className="mb-2 h-10 w-24 rounded-lg bg-gray-300 "
																      	>
																      	  &nbsp;
																      	</Typography>
																      	<Typography
																      	  as="div"
																      	  variant="paragraph"
																      	  className="mb-2 h-10 w-24 rounded-lg bg-gray-300 "
																      	>
																      	  &nbsp;
																      	</Typography>
																      </div>
																    </div>
													) : (
																<div className="mt-6">
																
																			<motion.p
																					className="text-xl p-0.5 text-black/70 lg:text-[40px] text-center lg:text-left"
																					variants={fadeIn2}
																			  initial="hidden"
																			  animate="visible"
																			  exit="exit"
																			  transition={{ duration: 0.5 }}

																			  transition={{ duration: 0.05 }}
																			>
																			  {`Hello, this is`.split('').map((letter, index) => (
																			    <motion.span
																			      key={index}
																			      initial={{ opacity: 0, x: -20 }}
																			      animate={{ opacity: 1, x: 0 }}
																			      transition={{ duration: 0.5, delay: index * 0.05 }}
																			    >
																			      {letter}
																			    </motion.span>
																			  ))}
																			</motion.p>

																	  <motion.h1
																	  		className="tracking-wide text-black/80 text-center text-5xl md:text-6xl lg:text-8xl font-bold"
																	    initial={{ opacity: 0 }}
																	    animate={{ opacity: 1 }}
																	    exit={{ opacity: 0 }}
																	    transition={{ duration: 1 }}
																	  >
																	    {`Lito Galan Jr`.split('').map((letter, index) => (
																	      <motion.span
																	        key={index}
																	        initial={{ opacity: 0, x: -20 }}
																	        animate={{ opacity: 1, x: 0 }}
																	        transition={{ duration: 1, ease: "easeOut" }}
																	      >
																	        {letter}
																	      </motion.span>
																	    ))}
																	  </motion.h1>

																	  <motion.p
																	    className="tracking-wide text-center md:text-left lg:tracking-wider p-1 pb-6 text-xs md:text-md lg:text-lg"
																	    variants={fadeIn}
																	    initial="hidden"
																	    animate="visible"
																	    exit="exit"
																	    transition={{ duration: 0.5 }}
																	  >
																	    {`I'm a Full-stack Web Developer`.split('').map((letter, index) => (
																	      <motion.span
																	        key={index}
																	        initial={{ opacity: 0, x: -70 }}
																	        animate={{ opacity: 1, x: 0 }}
																	        transition={{ duration: 0.5, delay: index * 0.05 }}
																	      >
																	        {letter}
																	      </motion.span>
																	    ))}
																	  </motion.p>

																	  <motion.div 
																	  		initial={{ opacity: 0 }}
																	  		animate={{ opacity: 1 }}
																	  		exit={{ opacity: 0 }}
																	  		transition={{ duration: 4, ease: "easeOut" }}
																	  		className="flex justify-center lg:justify-start items-center mt-1 lg:mt-2">
																	    
																	    
																	    	<Link 
																	    			as={Link}
																	    			to="/contact"
																	    		> <Button variant="outlined" className="capitalize flex flex-row gap-1 items-center">  Contact</Button> </Link>

																	    		<Link 
																	    		as={Link}
																	    		to="/projects"
																	    	> <Button color="" className="ml-4 capitalize flex flex-row gap-1 items-center"> <GoProjectSymlink /> Projects</Button> </Link>

																	    
																	  </motion.div>
															 </div>
													)
										}

										
									</div>
							</div>
						
					</Layout>
			<Footer />
			
		</>
	)
}

export default Home