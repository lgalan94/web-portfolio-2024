import { AdminNavbar, DefaultSidebar, MessagesList, Layout, Loading } from '../../components'
import { useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react'

const MyMessages = () => {

	const [message, setMessage] = useState([])
	const [loading, setLoading] = useState(true)

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
	        setMessage(data.map((message) => (
	          <MessagesList key={message._id} messagesProp={message} />
	        )));
	        setLoading(false)
	      }
	    });
	}, [message]);

	return (
		<>
			<AdminNavbar />

				<div className="flex flex-row">
					<DefaultSidebar />
					<Layout className="py-10" >
							{
								loading ? <Loading position="!h-[450px]" /> : (
									<>
										<div className="mb-2 capitalize p-4">
										  <Typography variant="h5" color="blue-gray">
										    inbox
										  </Typography>
										</div>
										<div className="border border-t-gray-900/20 border-b-gray-900/20 ">
											{message}
										</div>
										</>
								)
							}
					</Layout>
				</div>
			
		</>
	)
}

export default MyMessages