import { AdminNavbar, DefaultSidebar, MessagesList, Layout, Loading } from '../../components'
import { useEffect, useState } from 'react'
import { Typography, Card } from '@material-tailwind/react'

const ArchiveMessages = () => {

	const [message, setMessage] = useState([])
	const [loading, setLoading] = useState(true)
	const [color, setColor] = useState('')
	const [count, setCount] = useState(0);

	useEffect(() => {
	  fetch(`${import.meta.env.VITE_API_URL}/messages/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
	    .then((result) => result.json())
	    .then((data) => {
	      if (data.length === 0) {
	        setMessage(<div>No data in the database!</div>);
	      } else {
	      		setCount(data.length);
	        setMessage(data.map((message) => (
	        					
	        					message.isRead ? 
	        					(
			        			<div className="text-dark/50 font-semibold">
			        					<MessagesList key={message._id} messagesProp={message} />
			        			</div>
	        					)  
	        						:
	        					(
			        			<div className="text-dark">
			        					<MessagesList key={message._id} messagesProp={message} />
			        			</div>
	        					)
	        	)));
	        setLoading(false)
	      }
	    });
	}, [message]);


	return (
		<>
			<AdminNavbar />

				{
					!loading ? (
							<div className="flex flex-row">
								<DefaultSidebar />
								<Layout className="py-8 lg:py-2 container mx-auto pr-0 lg:pr-10 h-full " >
									<div className="p-2">
										<Card className="">
											<div className="mb-2 uppercase p-4">
											  <Typography className="flex items-center gap-2" variant="h5" color="blue-gray">
											    archive <span className="text-sm tracking-wide"> ({count}) </span>
											  </Typography>
											</div>
												<div className="border text-dark/60 border-t-gray-900/1 border-b-gray-900/1 h-full max-h-[80vh] lg:max-h-[75vh] transform-none overflow-y-auto">
													 {message}
												</div>
										</Card>	
									</div>
								</Layout>
							</div>
					) : (
						<Loading className="!h-[90vh]" />
					)
				}
			
		</>
	)
}

export default ArchiveMessages