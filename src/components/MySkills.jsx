import { useState, useEffect } from 'react';

const MySkills = () => {

	const [skills, setSkills] = useState([]);

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
	      if (data.length > 0) {
	        setSkills(data.map((skill) => (
	        		<Skill text={skill.name} key={skill._id} />
	        )))
	      } else {
      	setSkills(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
)
	      }
	    });
	}; 

	useEffect(() => {
	  fetchSkills();
	}, [skills]);

		return (
					<div className="w-96 flex flex-row justify-center mx-auto gap-4 flex-wrap">
					  
					 {skills}

					</div>
		)
}

export default MySkills