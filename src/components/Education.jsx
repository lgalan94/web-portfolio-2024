import { Typography } from '@material-tailwind/react';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {

	const ref = useRef();

	return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
		<LiIcon reference={ref} stroke="stroke-orange-500" fill="fill-orange-500" />
		<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{duration: 0.5,  type: "spring"}}
		>
			<Typography className="capitalize text-orange-300" variant="h4"> {position}&nbsp; <a href={companyLink} target="_blank" className="text-dark/75" >@{company}</a> </Typography>
			<span className="capitalize text-dark/75">
				{time} | {address}
			</span>
			<p className="text-justify">
				{work}
			</p>
		</motion.div>
	</li>
}

const Education = () => {

const ref = useRef(null);
const {scrollYProgress} = useScroll(
		{
			target: ref,
			offset: ["start end", "center start"]
		}
	)

	return (
		<div ref={ref} className="w-[75%] mx-auto relative">

		<motion.div 
			style={{scaleY: scrollYProgress}}
			className="absolute left-9 top-0 w-[4px] h-full bg-orange-500 origin-top" />

			<ul className="w-full flex flex-col items-start justify-between ml-4">
				<Details 
					position="Software Engineer"
					company="Google"
					companyLink="www.google.com"
					time="2018-2022"
					address="Mountain View, CA"
					work="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				<Details 
					position="Software Engineer"
					company="Google"
					companyLink="www.google.com"
					time="2018-2022"
					address="Mountain View, CA"
					work="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				<Details 
					position="Software Engineer"
					company="Google"
					companyLink="www.google.com"
					time="2018-2022"
					address="Mountain View, CA"
					work="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				<Details 
					position="Software Engineer"
					company="Google"
					companyLink="www.google.com"
					time="2018-2022"
					address="Mountain View, CA"
					work="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				
			</ul>
		</div>
	)
}

export default Education