import { Typography } from '@material-tailwind/react';
import { useScroll, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import LiIcon from './LiIcon';
import { ImSpinner2 } from "react-icons/im";

const Details = (props) => {

	const { position, company, timeRange, address, work } = props.itemProps;

	const ref = useRef();

	return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] md:w-[60%] mx-auto flex flex-col items-start justify-between">
		<LiIcon reference={ref} stroke="!stroke-cyan-500" fill="!fill-cyan-500" />
		<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{duration: 0.5,  type: "spring"}}
		>
			<Typography className="capitalize text-cyan-300" variant="h4"> {position} </Typography>
			<Typography variant="h6">@{company}</Typography>
			<span className="capitalize italic text-dark/75">
				{timeRange} | {address}
			</span>
			<p className="text-justify tracking-normal">
				{work}
			</p>
		</motion.div>
	</li>
}

const Experience = () => {

const [experience, setExperience] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const ref = useRef(null);
const {scrollYProgress} = useScroll(
		{
			target: ref,
			offset: ["start end", "center start"]
		}
	)

	const fetchData = () => {
	  fetch(`${import.meta.env.VITE_API_URL}/experience`)
	    .then(result => result.json())
	    .then(data => {
	    	data.sort((a, b) => b.createdOn.localeCompare(a.createdOn));
	      if (data.length > 0) {
	        setExperience(data.map((item) => (
	        		<Details itemProps={item} key={item._id} />
	        )))
	        setIsLoading(false);
	      } else {
	      setIsLoading(false);
      	setExperience(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
)
	      }
	    });
	}; 

	useEffect(() => {
	  fetchData();
	}, [experience]);

	let loading = (
						<div className="flex flex-row gap-2 items-center mx-auto">
								<ImSpinner2 className="w-7 h-7 animate-spin" /> <span className="text-sm"> Fetching data... </span>
						</div>
		)

	return (
		<div ref={ref} className="w-[75%] mx-auto relative">

				<motion.div 
					style={{scaleY: scrollYProgress}}
					className="absolute left-9 top-0 w-[4px] h-full bg-cyan-500 origin-top" />

					<ul className="w-full flex flex-col items-start justify-between ml-4">
						
							{
								 isLoading ? loading : experience
							}
						
					</ul>
				</div>
	)
}

export default Experience