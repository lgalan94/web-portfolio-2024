import { MessageCard, Loading, AdminNavbar, DefaultSidebar, Layout } from '../../components'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom' 
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ViewMessage = () => {

	const { messageId } = useParams()
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
	  fetch(`${import.meta.env.VITE_API_URL}/messages/view-message/${messageId}`)
	    .then((result) => result.json())
	    .then((data) => {
	      setName(data.name);
	      setEmail(data.email);
	      setMessage(data.message);
	      setLoading(false)
	    });

	}, []);


		return(
			<>
				<AdminNavbar />
					<div className="flex flex-row">
						<DefaultSidebar />
						<Layout className="" >
							{
								loading ? <Loading position="!h-[450px]" /> : (
								<Card shadow={false} floated={false} color="transparent" className="w-full rounded-none p-8">
				      <CardHeader
				        floated={false}
				        shadow={false}
				        color="transparent"
				        className="m-0 mb-8 rounded-none border-b border-white/10"
				      >
				        <Typography
				          variant="small"
				          className="font-normal"
				        >
				          From: <span className="uppercase font-semibold">{name}</span>
				        </Typography>
				        <Typography
				          variant="small"
				          className="flex font-normal mt-2"
				        >
				          Email: <span className="font-semibold">{email}</span>
				        </Typography>
				      </CardHeader>
				      <CardBody className="p-0">
				        	<Typography
				        	  variant="small"
				        	  className="font-normal uppercase"
				        	>
				        	  message
				        	</Typography>
				        	<Typography
				        	  variant="small"
				        	  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 mt-1 p-3 font-normal border border-gray-900/30 rounded h-full min-h-[15rem]"
				        	>
				        	  {message}
				        	</Typography>
				      </CardBody>
				      <CardFooter className="mt-12 flex gap-3 mx-auto p-0">
				        <Link to = {`/admin/messages/inbox`}>
				        	<Button
				        	  size="sm"
				        	  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
				        	  ripple={true}
				        	>
				        	  back
				        	</Button>
				        </Link>
				        <Button
				          size="sm"
				          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
				          ripple={true}
				        >
				          Archive
				        </Button>
				      </CardFooter>
				    </Card>
								)
							}
						</Layout>
					</div>
				
			</>
	)
}

export default ViewMessage