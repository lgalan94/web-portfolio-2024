import { useState, useEffect } from 'react';
import { Typography, Tooltip, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import { ImSpinner2 } from "react-icons/im";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

const MyCertificates = () => {

	let viewImage = "https://drive.google.com/uc?export=view&id=";
	const [certificates, setCertificates] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let CustomCard = (props) => {

		const { _id, title, imgUrl } = props.itemProps;
		const [open, setOpen] = useState(false);

		const handleOpen = () => setOpen(!open);

				return (
					<>
			    <div className="text-center w-full max-w-[20rem] flex flex-col gap-4 p-4 uppercase border border-1 border-dark/25 rounded-md group hover:scale-105 shadow-lg"> 
			    		<div>
			    				<Typography className="capitalize tracking-wider" variant="h6"> {title} </Typography>
			    		</div>
			    			<div>
			    					<img src={viewImage + imgUrl} />
			    			</div>
			    			<Tooltip 
			    					placement="top"
			    					content="view"
			    					animate={{
			    			    mount: { scale: 1, y: 0 },
			    			    unmount: { scale: 0, y: 25 },
			    			  }}
			    			  className={`bg-cyan-600 text-xs`}
			    			>
			    					<button onClick={handleOpen} className={`flex absolute self-center top-10  justify-center items-center invisible shadow p-1.5 hover:scale-105 hover:shadow-lg hover:z-10 group-hover:visible bg-gray-300 rounded-full text-cyan-600`}> 
			    					    <HiOutlineViewfinderCircle />
			    					</button>
			    			</Tooltip>
			    </div>
			    <Dialog
			      size="md" 
			      open={open} 
			      handler={handleOpen}
			      animate={{
			        mount: { scale: 1, y: 0 },
			        unmount: { scale: 0.9, y: -100 },
			      }}
			    >
			      <DialogHeader className="border border-b-gray-900/20 rounded-t-lg shadow justify-center"> {title} </DialogHeader>
			      <DialogBody className="text-center font-leading h-full max-h-[72vh] overflow-y-auto scrollbar-thin">
			        
			        <img src={viewImage + imgUrl} />
			      		
			      </DialogBody>
			      <DialogFooter><Button onClick={handleOpen}>Close</Button></DialogFooter>
			    </Dialog>
			    
		  </>
				)
	}

	const fetchCertificates = () => {
						fetch(`${import.meta.env.VITE_API_URL}/certificates/`, {
									method: 'GET',
									headers: {
										'Content-Type': 'application/json'
									}
						})
						.then(response => response.json())
						.then(data => {
									data.sort();
									if (data.length > 0) {
												setCertificates(data.map(item => {
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
	  fetchCertificates();
	}, []);

	let loading = (
						<div className="flex flex-row gap-2 items-center mx-auto">
								<ImSpinner2 className="w-7 h-7 animate-spin" /> <span className="text-sm"> Fetching data... </span>
						</div>
		)

		return (
				

									<div className="flex flex-row flex-wrap justify-center mx-auto px-4 lg:px-10 gap-4 ">
									  
									 {
									 		isLoading ? loading : certificates
									 }

									</div>

		)
}

export default MyCertificates



			