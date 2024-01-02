import { AppNavbar, Footer, Layout, AnimatedText, Loading, PageTitle } from '../components'
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from "react-icons/bs";
import DataContext from '../DataContext';

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
																		src="pf2.png"
																		className="w-96 h-auto" 
																	  initial={{ opacity: 0 }}
																	  animate={{ opacity: 1 }}
																	  exit={{ opacity: 0 }}
																	  transition={{ duration: 1 }}
																	/>		
															</div>
															{/*div #2*/}
															<div className="basis-3/5 flex justify-center items-center lg:pr-32">
																<div className="">
																	  <AnimatedText text={`Hi, I am`} className="text-xl p-0.5 lg:text-[40px] text-center lg:text-left" />
																

																	  <motion.h1
																	  		className="tracking-wide text-center text-4xl md:text-5xl lg:text-7xl font-semibold"
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
																	  		className="tracking-wide text-center md:text-left lg:tracking-wider p-1 pb-6 text-sm md:text-md lg:text-lg"
																	    initial={{ opacity: 0 }}
																	    animate={{ opacity: 1 }}
																	    exit={{ opacity: 0 }}
																	    transition={{ duration: 1 }}
																	  >
																	    {`${data.banner}`.split('').map((letter, index) => (
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
																	      as={Link} to='/' 
																	      className="flex items-center bg-black text-white p-2 px-6 rounded-lg text-xs md:text-sm lg:text-md font-medium hover:bg-neutral-50 hover:text-neutral-700 border-2 border-solid border-transparent hover:border-neutral-800"
																	    >Resume <BsArrowUpRightSquare className="w-6 ml-1" /> </Link>
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