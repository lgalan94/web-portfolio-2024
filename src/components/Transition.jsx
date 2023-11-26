import { motion } from 'framer-motion';

const Transition = (OgComponent) => {
	 return () => (

	 		 <>
	 		 	<OgComponent />
	 		 	<motion.div
	 		 		className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#8f244b] z-30"
	 		 		initial={{ x: '100%', width: '100%' }} 
	 		 		animate={{ x: '0%', width: '0%' }}
	 		 		exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
	 		 		transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
	 		 	/>
	 			
	 				<motion.div
	 					className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#914963] z-20"
	 					initial={{ x: '100%', width: '100%' }} 
	 					animate={{ x: '0%', width: '0%' }}
	 					exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
	 					transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
	 				/>

	 				<motion.div
	 					className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#8a606f] z-10"
	 					initial={{ x: '100%', width: '100%' }} 
	 					animate={{ x: '0%', width: '0%' }}
	 					exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
	 					transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
	 				/>
	 		 
	 		 </>

		)
} 

export default Transition;

