import { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';

const MySkills = () => {

	const [skills, setSkills] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const Skill = ({ text }) => {
			return (
					<div className="text-center px-3 hover:scale-105 uppercase border border-1 border-dark/25 rounded-md shadow-lg"> 
								{text} 
					</div>
			)
	}

	const fetchSkills = () => {
	  fetch(`${import.meta.env.VITE_API_URL}/skills`)
	    .then(result => result.json())
	    .then(data => {
	    		data.sort((a, b) => a.name.localeCompare(b.name));
	      if (data.length > 0) {
	        setSkills(data.map((skill) => (
	        		<Skill text={skill.name} key={skill._id} />
	        )))
	        setIsLoading(false);
	      } else {
	      setIsLoading(false)
      	setSkills(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
)
	      }
	    });
	}; 

	useEffect(() => {
	  fetchSkills();
	}, [skills]);

	let loading = Array.from({ length: skills.length || 10 }).map((_, index) => (
										<div key={index} className="max-w-full animate-pulse">
						      <Typography
						        as="div"
						        variant="h1"
						        className="mb-4 h-5 w-36 rounded-sm bg-gray-300"
						      >
						        &nbsp;
						      </Typography>
						    </div>
		));

		return (
					<div className="w-full md:w-[85vw] lg:w-[80vw] flex flex-row justify-center mx-auto gap-4 flex-wrap">
					 {
					 		isLoading ? loading : skills
					 }
					</div>
		)
}

export default MySkills