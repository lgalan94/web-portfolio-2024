import { Loading, AdminNavbar, DefaultSidebar, Layout } from '../../components'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom' 
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoArrowBackSharp } from "react-icons/io5";
import { LuFolderArchive } from "react-icons/lu";
import { MdMarkUnreadChatAlt } from "react-icons/md";

const ViewMessage = () => {
	const navigate = useNavigate();
	const { messageId } = useParams()
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [dateSent, setDateSent] = useState('');
	const [loading, setLoading] = useState(true);



	useEffect(() => {
	  const fetchMessage = async () => {
	    try {
	      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages/view-message/${messageId}`);
	      const data = await response.json();

	      const d = new Date(data.createdOn);
	      const saveConverted = d.toLocaleString();

	      setName(data.name);
	      setEmail(data.email);
	      setMessage(data.message);
	      setDateSent(saveConverted);
	      setLoading(false);
	    } catch (error) {
	      console.error('Error fetching message:', error);
	    }
	  };

	  fetchMessage();
	}, []);


		return(
			<>
				<AdminNavbar />
					<div className="flex flex-row">
						<DefaultSidebar />
						<Layout className="py-8 lg:py-2 container mx-auto pr-0 lg:pr-10 h-full" >
							{
								loading ? <Loading position="!h-[450px]" /> : (
									<>
										<div className="p-3">
												<Card shadow={true} floated={false}>
													<div className="flex items-center p-1 border border-b-gray-900/20 gap-x-1">
													  <Button
													    variant="text"
													    size="sm"
													    className=""
													    onClick={() => navigate('/admin/messages/inbox')}
													  >
													    <span className="flex items-center gap-1 lowercase"><IoArrowBackSharp /> back</span>
													  </Button>
													  <Button
													    variant="text"
													    size="sm"
													    className=""
													    onClick={() => navigate('/admin/messages/inbox')}
													  >
													    <span className="flex items-center gap-1 lowercase"><LuFolderArchive /> archive</span>
													  </Button>
													  <Button
													    variant="text"
													    size="sm"
													    className=""
													    onClick={() => navigate('/admin/messages/inbox')}
													  >
													    <span className="flex items-center gap-1 lowercase"><MdMarkUnreadChatAlt /> mark as unread</span>
													  </Button>
													</div>

									      <div className="h-full max-h-[80vh] lg:max-h-[75vh] transform-none overflow-y-auto">
									      	<CardHeader
									      	  floated={false}
									      	  shadow={false}
									      	  color="transparent"
									      	  className="px-2"
									      	>
									      	  <div className="mb-2">
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal"
									      	  	>
									      	  	  From 
									      	  	</Typography>
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal"
									      	  	>
									      	  	 <span className="uppercase text-blue-300 font-semibold">{name}</span>
									      	  	</Typography>
									      	  </div>

									      	  <div className="mb-2">
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal"
									      	  	>
									      	  	  Email 
									      	  	</Typography>
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal"
									      	  	>
									      	  	 <span className="lowercase text-blue-300 font-semibold">{email}</span>
									      	  	</Typography>
									      	  </div>

									      	  <div className="">
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal"
									      	  	>
									      	  	  Date 
									      	  	</Typography>
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal"
									      	  	>
									      	  	 <span className="text-blue-300 font-semibold">{dateSent}</span>
									      	  	</Typography>
									      	  </div>


									      	  
									      	</CardHeader>
									      	<CardBody className="px-6">
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="font-normal uppercase"
									      	  	>
									      	  	  message
									      	  	</Typography>
									      	  	<Typography
									      	  	  variant="small"
									      	  	  className="tracking-wide focus:scale-[1.02] active:scale-100 mt-1 p-3 font-normal border border-gray-900/30 rounded h-full min-h-[5rem]"
									      	  	>
									      	  	  {message}
									      	  	</Typography>
									      	</CardBody>
									      </div>
									      
									    </Card>
										</div>
									</>

								)
							}
						</Layout>
					</div>
				
			</>


	)
}

export default ViewMessage