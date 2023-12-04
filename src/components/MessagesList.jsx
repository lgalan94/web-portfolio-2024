import Layout from './Layout'
import { Link } from 'react-router-dom'
import {
	Typography
} from '@material-tailwind/react'

const MessagesCard = (props) => {

	const { _id, name, message } = props.messagesProp;

	return (
		

				<Link to={`/admin/messages/view-message/${_id}`} >
					<div className="hover:bg-teal-200 flex gap-x-1 gap-y-2 items-center border border-b-red-900/20 ">
						<div className="flex-none px-1 justify-center items-center">
						  <input type="checkbox" className="h-4 w-4 flex hover:border-none items-center transition-all hover:scale-105 hover:before:opacity-0" />
						</div>
					  <div className="flex-1 basis-1/6 items-center ">
					    <Typography variant="h6" >
					    	{name}
					    </Typography>
					  </div>
					  <div className="flex-1 basis-full ">
					    {message}
					  </div>
					</div>
				</Link>
			
	)
}

export default MessagesCard