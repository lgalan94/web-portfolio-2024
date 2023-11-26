import { motion } from 'framer-motion';
import React from 'react';


const WordAnimation = ({ text, className="" }) => {
		return (
			<motion.p
				className={`${className} `}
			  initial={{ opacity: 0 }}
			  animate={{ opacity: 1 }}
			  exit={{ opacity: 0 }}
			  transition={{ duration: 0.1 }}
			>
			  {`${text}`.split('').map((letter, index) => (
			    <motion.span
			      key={index}
			      initial={{ opacity: 0, x: -70 }}
			      animate={{ opacity: 1, x: 0 }}
			      transition={{ duration: 0.1, delay: index * 0.1 }}
			    >
			      {letter}
			    </motion.span>
			  ))}
			</motion.p>
	)
}

export default WordAnimation