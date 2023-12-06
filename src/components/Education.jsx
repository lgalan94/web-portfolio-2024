import { Typography } from '@material-tailwind/react';
import { useScroll, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import LiIcon from './LiIcon'

const Details = (props) => {

	const { title, school, schoolLink, timeRange, address, learnings } = props.educationProps;

	const ref = useRef();

	return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
		<LiIcon reference={ref} stroke="stroke-orange-500" fill="fill-orange-500" />
		<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{duration: 0.5,  type: "spring"}}
		>
			<Typography className="capitalize text-orange-300" variant="h4"> {title}&nbsp; <a href={schoolLink} target="_blank" className="text-dark/75" >@{school}</a> </Typography>
			<span className="capitalize text-dark/75">
				{timeRange} | {address}
			</span>
			<p className="text-justify">
				{learnings}
			</p>
		</motion.div>
	</li>
}

const Education = () => {

const [education, setEducation] = useState([]);

const ref = useRef(null);
const {scrollYProgress} = useScroll(
		{
			target: ref,
			offset: ["start end", "center start"]
		}
	)

	const fetchData = () => {
	  fetch(`${import.meta.env.VITE_API_URL}/education`)
	    .then(result => result.json())
	    .then(data => {
	      if (data.length > 0) {
	        setEducation(data.map((education) => (
	        		<Details educationProps={education} key={education._id} />
	        )))
	      } else {
      	setEducation(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
)
	      }
	    });
	}; 

	useEffect(() => {
	  fetchData();
	}, [education]);

	return (
		<div ref={ref} className="w-[75%] mx-auto relative">

		<motion.div 
			style={{scaleY: scrollYProgress}}
			className="absolute left-9 top-0 w-[4px] h-full bg-orange-500 origin-top" />

			<ul className="w-full flex flex-col items-start justify-between ml-4">
				
					{education}
				
			</ul>
		</div>
	)
}

export default Education