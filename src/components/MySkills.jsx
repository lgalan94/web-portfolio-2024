import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {

	return (
					<motion.div
							className="flex items-center justify-center rounded-full font-semibold bg-neutral-700 text-dark py-4 px-6 shadow-neutral-700 cursor-pointer absolute"
							whileHover={{scale:1.05}}
							initial={{x:0, y:0}}
							whileInView={{x:x, y:y}}
							transition={{duration: 1.5}}
							viewport={{once: true}}
					>
							{name}
					</motion.div>
		)
}

const MySkills = () => {
			return (
						<>
								<div className="w-full h-screen relative flex items-center justify-center bg-circularLight">
											
											<motion.div
													className="flex items-center justify-center rounded-full font-semibold bg-neutral-700 text-dark p-8 shadow-neutral-700 cursor-pointer"
													whileHover={{scale:1.05}}
											>
													WEB
											</motion.div>
											<Skill name="HTML" x="-28vw" y="2vw" />
											<Skill name="Bootstrap" x="20vw" y="6vw" />
											<Skill name="Tailwind CSS" x="-3vw" y="12vw" />
											<Skill name="MongoDB" x="-24vw" y="-15vw" />
											<Skill name="ExpressJS" x="19vw" y="-12vw" />
											<Skill name="ReactJS" x="35vw" y="-5vw" />
											<Skill name="NodeJS" x="0vw" y="-20vw" />
											<Skill name="GIT" x="-22vw" y="16vw" />
											<Skill name="CSS" x="-7vw" y="-12vw" />

								</div>
						</>
			)
}

export default MySkills