import { motion } from 'framer-motion';

const MySkills = () => {

const Skill = ({ text }) => {
		return (
				<motion.div 
							initial={{y:50}}
							whileInView={{y:0}}
							transition={{duration: 0.5,  type: "spring"}}
							className="text-center px-3 uppercase border border-1 border-dark/25 rounded-md shadow-lg "> 
							{text} 
				</motion.div>
		)
}

		return (
					<div className="w-96 flex flex-row justify-center mx-auto gap-4 flex-wrap">
					  
					 	<Skill text="html" />
					 	<Skill text="css" />
					 	<Skill text="javascript" />
					 	<Skill text="react" />
					 	<Skill text="next.js" />
					 	<Skill text="node.js" />
					 	<Skill text="git" />
					 	<Skill text="tailwind" />
					 	<Skill text="mongodb" />
					 	<Skill text="express.js" />
					 	<Skill text="laravel" />
					 	<Skill text="php" />
					 	<Skill text="mysql" />
					 	<Skill text="framer-motion" />

					</div>
		)
}

export default MySkills