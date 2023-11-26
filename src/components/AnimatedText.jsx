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
							className="w-full mx-auto flex items-center justify-center text-center overflow-hidden">
								<motion.Typography 
										className = {`inline-block w-full text-black font-bold capitalize lg:text-7xl text-5xl ${className}`} 
										variants={quote}
										initial="initial"
										animate="animate"
								>
								{
										text.split(" ").map((word, index) => 
												<motion.span key={word+'-'+index} className="inline-block" 
														variants={everyWord}
												>
													{word}&nbsp;
												</motion.span>
											)
								}
								</motion.Typography>
								
					</div>
			)
}

export default AnimatedText