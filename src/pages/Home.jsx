import { AppNavbar, Footer, Layout, AnimatedText, Loading, Transition, PageTitle } from '../components'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from "react-icons/bs";

const Home = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState('');
	const [bannerSubtitle, setBannerSubtitle] = useState('');

	useEffect(() => {
	    fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`)
	      .then((result) => result.json())
	      .then((data) => {
	        const nameSetting = data.find((setting) => setting.key === 'name'); 
	        const bannerSubtitleSetting = data.find((setting) => setting.key === 'bannerSubtitle');
	        if (nameSetting && bannerSubtitleSetting) {
	          setName(nameSetting.value);
	          setBannerSubtitle(bannerSubtitleSetting.value);
	        }
	        setIsLoading(false);
	      });
	  }, []);

	return (
		<>
			<PageTitle title="Web Portfolio | Home" />

			{
				isLoading ? (
							<Loading />
					) : (

							<>

									<AppNavbar />
											<Layout className="h-screen">

													<div className="flex flex-col md:flex-row ">
													{/*div #1*/}
															<div className="basis-2/5 flex justify-center md:justify-end ">
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
															<div className="basis-3/5 flex items-center pl-10 pr-12 lg:pr-32">
																<div className="">
																	  <AnimatedText text={`Hi, I am`} className="text-xl p-0.5 lg:text-[40px] text-center md:text-left" />
																

																	  <motion.h1
																	  		className="tracking-wide text-center text-4xl md:text-5xl lg:text-7xl font-semibold"
																	    initial={{ opacity: 0 }}
																	    animate={{ opacity: 1 }}
																	    exit={{ opacity: 0 }}
																	    transition={{ duration: 1 }}
																	  >
																	    {`${name}`.split('').map((letter, index) => (
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
																	    {`${bannerSubtitle}`.split('').map((letter, index) => (
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
																	  		className="flex justify-center md:justify-start items-center mt-1 lg:mt-2">
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

export default Transition(Home)