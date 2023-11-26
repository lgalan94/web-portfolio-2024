import { motion } from 'framer-motion';
import { Typography } from '@material-tailwind/react';

const quote = {
		initial: {
			opacity:1,
		},
		animate: {
			opacity:1,
			transition: {
				delay:0.5,
				staggerChildren:0.08,
			}
		}
}

const everyWord = {
		initial: {
			opacity:0,
			y:50,
		},
		animate: {
			opacity:1,
			y:0,
			transition: {
				duration: 1,
			}
		}
}

const AnimatedText = ( {text, className=""} ) => {
			return (
					<div
							className={`${className} w-full mx-auto flex items-center text-center`}>
								<motion.p 
										className = {`${className} inline-block w-full text-black font-bold lg:text-7xl text-5xl`} 
										variants={quote}
										initial="initial"
										animate="animate"
										exit={{ opacity: 0 }}
								>
								{
										text.split(" ").map((word, index) => 
												<motion.span key={word+'-'+index} className="inline-block " 
														variants={everyWord}
												>
													{word}&nbsp;
												</motion.span>
											)
								}
								</motion.p>
								
					</div>
			)
}

export default AnimatedText