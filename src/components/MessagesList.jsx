import Layout from './Layout'
import { Link } from 'react-router-dom'
import {
  Typography
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MessagesList = (props) => {
  const { _id, name, message } = props.messagesProp;
  const navigate = useNavigate();
  const ViewMessage = `/admin/messages/view-message/${_id}`;
  const [isOpened, setIsOpened] = useState(false)

  const Read = () => {
  	console.log("read is called")
	  fetch(`${import.meta.env.VITE_API_URL}/messages/view-message/${_id}`, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            isRead: isOpened
          })
        })
	    .then((result) => result.json())
	    .then((data) => {
	    		if (data === true) {
	    			setIsOpened(true)
	    		}
	    });
  }

  return (
    <div className={`hover:bg-light/75 flex gap-x-1 gap-y-2 items-center`}>
      <div className="flex-none px-1 justify-center items-center">
        <input type="checkbox" className="h-4 w-4 flex hover:border-none items-center transition-all hover:scale-105 hover:before:opacity-0" />
      </div>

      <Link onClick={Read} to={ViewMessage} className="flex-1 basis-1/6 items-center">
        <Typography variant="sm">
          {name}
        </Typography>
      </Link>

      <Link to={ViewMessage} className={`flex-1 text-sm tracking-wide basis-5/6 truncate text-ellipsis overflow-hidden`}>
        {message.substring(120, length)}
      </Link>
    </div>
  )
}

export default MessagesList