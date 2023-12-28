import { useState, useEffect } from 'react';
import { Typography, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { ImSpinner2 } from "react-icons/im";

const MyProjects = () => {

	let viewImage = "https://drive.google.com/uc?export=view&id=";
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let CustomCard = (props) => {

		const { _id, title, imgUrl, technologiesUsed, description } = props.itemProps;
		const [open, setOpen] = useState(0);

		const handleOpen = (value) => setOpen(open === value ? 0 : value);

				return (
					<>
			    <div className={`text-center w-full max-w-[25rem] flex flex-col gap-4 p-4 uppercase border border-1 border-dark/25 rounded-md group shadow-lg ${open === 1 ? "transition-colors delay-75 bg-green-50" : "transition-colors delay-75" }`}> 
			    		<div>
			    				<Typography className={`capitalize tracking-wider ${open === 1 ? "transition-colors delay-75 text-green-500" : "transition-colors delay-75"}`} variant="h6"> {title} </Typography>
			    		</div>
			    			<div>
			    					<img src={viewImage + imgUrl.slice(32,-20, imgUrl.length)} />
			    			</div>
			    			<div className={`flex flex-row text-xs gap-2 justify-center flex-wrap font-ibm ${open === 1 ? "transition-colors delay-75 text-green-500" : "transition-colors delay-75"}`}>
			    					{
			    							technologiesUsed.map(item => {
			    										return (
			    													<div key={item._id} className="px-2 py-1 border-l-2 shadow-md border-gray-500 bg-[#2ec946]/4">{item.name}</div>
			    										)
			    							})
			    					}
			    			</div>
			    			<Accordion 
			        		open={open === 1}
			        >
  			        <AccordionHeader className={`text-sm flex items-center justify-center hover:scale-105 hover:text-green-700 border-none ${open === 1 ? 'text-green-500 transition-colors delay-75' : 'transition-colors delay-75'}`} onClick={() => handleOpen(1)}>Description</AccordionHeader>
  			        <AccordionBody className="text-justify text-sm">
  			          {description}
  			        </AccordionBody>
  			      </Accordion>
			    </div>
		  </>
				)
	}

	const fetchProjects = () => {
						fetch(`${import.meta.env.VITE_API_URL}/projects/`, {
									method: 'GET',
									headers: {
										'Content-Type': 'application/json'
									}
						})
						.then(response => response.json())
						.then(data => {
									data.sort();
									if (data.length > 0) {
												setProjects(data.map(item => {
															return (
																			<CustomCard key={item._id} itemProps={item} />
																)
												}))
												setIsLoading(false);
									} else {
											setItems(<div>No data!</div>)
											setIsLoading(false);
									}
						})
						.catch(error => console.error)
			}

	useEffect(() => {
	  fetchProjects();
	}, []);

	let loading = (
						<div className="flex flex-row gap-2 items-center mx-auto">
								<ImSpinner2 className="w-7 h-7 animate-spin" /> <span className="text-sm"> Fetching data... </span>
						</div>
		)

		return (
					<div className="flex flex-row flex-wrap justify-center px-4 lg:px-10 mx-auto gap-4 ">
					  
					 {
					 		isLoading ? loading : projects
					 }

					</div>
		)
}

export default MyProjects




			