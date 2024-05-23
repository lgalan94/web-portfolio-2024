import { AppNavbar, Footer, Layout, AnimatedText, Loading, PageTitle } from '../components'
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import DataContext from '../DataContext';
import { Button } from '@material-tailwind/react';

const Home = () => {

	const [isLoading, setIsLoading] = useState(true);

	const { data } = useContext(DataContext);

	useEffect(() => {
	  if (data.name !== null && data.banner !== null) {
	    setIsLoading(false);
	  }
	}, [data]);

	return (
		<>
			<PageTitle title="Web Portfolio | Home" />

			{
				isLoading ? (
							<Loading />
					) : (

							<>

									<AppNavbar />
											<Layout className="h-[85vh]">

													<div className="flex flex-col lg:flex-row ">
													{/*div #1*/}
															<div className="basis-2/5 flex justify-center lg:justify-end ">
																	<motion.img 
																		src="profile-pic.png"
																		className="w-[85%] mt-10 h-auto rounded-full border shadow shadow-lg border-[10px] border-gray-400" 
																	  initial={{ opacity: 0 }}
																	  animate={{ opacity: 1 }}
																	  exit={{ opacity: 0 }}
																	  transition={{ duration: 1 }}
																	/>		
															</div>

															{/*div #2*/}
															<div className="basis-3/5 flex justify-center items-center lg:pr-32">
																<div className="mt-6">
																	  <AnimatedText text={`Hello, this is`} className="text-xl p-0.5 lg:text-[40px] text-center lg:text-left" />
																
 
																	  <motion.h1
																	  		className="tracking-wide text-[#545454] text-center text-5xl md:text-6xl lg:text-8xl font-bold"
																	    initial={{ opacity: 0 }}
																	    animate={{ opacity: 1 }}
																	    exit={{ opacity: 0 }}
																	    transition={{ duration: 1 }}
																	  >
																	    {`${data.name}`.split('').map((letter, index) => (
																	      <motion.span
																	        key={index}
																	        initial={{ opacity: 0, x: -20 }}
																	        animate={{ opacity: 1, x: 0 }}
																	        transition={{ duration: 0.5, delay: index * 0.1 }}
																	      >
																	        {letter}
																	      </motion.span>
																	    ))}
																	  </motion.h1>

																	  <motion.p
																	  		className="tracking-wide text-center md:text-left lg:tracking-wider p-1 pb-6 text-xs md:text-md lg:text-lg"
																	    initial={{ opacity: 0 }}
																	    animate={{ opacity: 1 }}
																	    exit={{ opacity: 0 }}
																	    transition={{ duration: 1 }}
																	  >
																	    {`I'm a ${data.banner}`.split('').map((letter, index) => (
																	      <motion.span
																	        key={index}
																	        initial={{ opacity: 0, x: -70 }}
																	        animate={{ opacity: 1, x: 0 }}
																	        transition={{ duration: 2, delay: index * 0.1 }}
																	      >
																	        {letter}
																	      </motion.span>
																	    ))}
																	  </motion.p>
																	  <motion.div 
																	  		initial={{ opacity: 0 }}
																	  		animate={{ opacity: 1 }}
																	  		exit={{ opacity: 0 }}
																	  		transition={{ duration: 2, delay: 0.3 }}
																	  		className="flex justify-center lg:justify-start items-center mt-1 lg:mt-2">
																	    
																	    <Link 
																	    		as={Link}
																	    		to="/projects"
																	    	> <Button color="" className="capitalize flex flex-row gap-1 items-center"> <GoProjectSymlink /> Projects</Button> </Link>
																	    <Link 
																	    		as={Link}
																	    		to="/contact"
																	    		className="ml-4 text-xs md:text-sm lg:text-md font-medium capitalize text-neutral-800 underline">Contact</Link>
																	  </motion.div>
																	  </div>
																	</div>

													</div>
												
											</Layout>
									<Footer />

							</>

					)
			}

			
		</>
	)
}

export default Home