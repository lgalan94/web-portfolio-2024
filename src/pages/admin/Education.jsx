import { EducationCard,  AdminNavbar, Loading } from '../../components';
import { useState, useEffect } from 'react';
import { Chip, Button } from '@material-tailwind/react';
import { IoMdAdd } from "react-icons/io";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner2 } from "react-icons/im";

const Education = () => {

	// const [title, setTitle] = useState('');
	// const [school, setSchool] = useState('');
	// const [schoolLink, setSchoolLink] = useState('');
	// const [timeRange, setTimeRange] = useState('');
	// const [address, setAddress] = useState('');
	// const [learnings, setTLearnings] = useState('');

	const [education, setEducation] = useState('');
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);

		const fetchEducation = () => {
		  fetch(`${import.meta.env.VITE_API_URL}/education`, {
		    method: 'GET',
		    headers: {
		      Authorization: `Bearer ${localStorage.getItem('token')}`
		    }
		  })
		    .then(result => result.json())
		    .then(data => {
		      if (data.length > 0) {
		        setEducation(data.map((education) => (
		        		<EducationCard educationProps={education} key={education._id} />
		        )))
		      } else {
	      	setEducation(<div className="font-semibold text-center text-4xl w-[72vw] md:w-[82vw] lg:w-[85vw]">No data in database!</div>
	)
		      }
		      setLoading(false);
		      {
		      	data.length === undefined ? setCount('No data') : setCount(data.length)
		      }

		    });
		}; 

		useEffect(() => {
		  fetchEducation();
		}, [education]);

		return (
				<>
					<AdminNavbar />
					{
						loading ? <Loading /> : (

								<>
										<div className="p-5 flex justify-between">
										  <Chip variant="ghost" value={count} />
										  <Button variant="gradient" color="blue" size="sm" className="flex flex-row "><IoMdAdd className="h-4 w-4" /> Add new</Button>
										</div>
										<div className="p-10 w-full max-w-[92vw] h-full max-h-[80vh] lg:max-h-[70vh] overflow-y-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5">
												{education}
										</div>
								</>

						)
					}
					
				</>
		)
}

export default Education