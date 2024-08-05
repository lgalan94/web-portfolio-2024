import { Typography } from '@material-tailwind/react';
import { useScroll, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import LiIcon from './LiIcon'
import { Link } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";

const Details = (props) => {

	const { title, school, schoolLink, timeRange, address, learnings } = props.educationProps;

	const ref = useRef();

	return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] md:w-[60%] mx-auto flex flex-col items-start justify-between">
		<LiIcon reference={ref} stroke="stroke-orange-500" fill="fill-orange-500" />
		<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{duration: 0.5,  type: "spring"}}
		>
			<Typography className="capitalize text-orange-300 leading-relaxed" variant="h4"> {title} </Typography>
			<Typography variant="h6">@ {school}</Typography>
			<span className="capitalize text-dark/50 italic">
				{timeRange} | {address}
			</span>
			{/*<p className="tracking-wide">
				{learnings}
			</p>*/}
		</motion.div>
	</li>
}

const Education = () => {

const [education, setEducation] = useState([]);
const [isLoading, setIsLoading] = useState(true);

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
	    	data.sort((a, b) => b.createdOn.localeCompare(a.createdOn));
	      if (data.length > 0) {
	        setEducation(data.map((education) => (
	        		<Details educationProps={education} key={education._id} />
	        )))
	        setIsLoading(false);
	      } else {
	      setIsLoading(false);
      	setEducation(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
)
	      }
	    });
	}; 

	useEffect(() => {
	  fetchData();
	}, [education]);

	let loading = Array.from({ length: education.length || 3 }).map((_, index) => (
										<div key={index} className="ml-48 mb-2 max-w-full animate-pulse">
						      <Typography
						        as="div"
						        variant="h1"
						        className="mb-4 h-5 w-48 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						      <Typography
						        as="div"
						        variant="paragraph"
						        className="mb-2 h-2 w-96 rounded-full bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						    </div>
		));

	return (
		<div ref={ref} className="w-[75%] mx-auto relative">

		<motion.div 
			style={{scaleY: scrollYProgress}}
			className="absolute left-9 top-0 w-[4px] h-full bg-orange-500 origin-top" />

			<ul className="w-full flex flex-col items-start justify-between ml-4">
				
					{
						 isLoading ? loading : education
					}
				
			</ul>
		</div>
	)
}

export default Education