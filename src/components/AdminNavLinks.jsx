import { List, ListItem, ListItemPrefix, ListItemSuffix, Typography, Chip } from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom'
import { InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import { LuFolderArchive } from "react-icons/lu";

const AdminNavLinks = () => {

	const CustomLink = ({ name, linkIcon, linkPath, className="", chipValue, chipClassname  }) => {
	  const currentPath = useLocation().pathname;
	  return (
	    <Link 
	      as={Link}
	      to={linkPath}
	      className={`${className} ${currentPath === linkPath ?  'bg-light rounded-lg' : 'bg-none' } `}
	    >
	      <ListItem>
	        <ListItemPrefix>
	          {linkIcon}
	        </ListItemPrefix>
	        {name}
	        <ListItemSuffix>
            <span className={`${chipClassname} text-xs bg-gray-100 px-2 py-1 shadow rounded-full`}>{chipValue}</span>
          </ListItemSuffix>
	      </ListItem>
	    </Link>
	  )
	}

	return (
			<List>
			  <CustomLink 
			  	name="Home" 
			  	linkIcon={<InboxIcon className="h-5 w-5" />} 
			  	linkPath="/admin" 
			  	chipClassname="hidden"
				/>
			  <Typography className="text-sm mt-3">Messages</Typography>
			    <CustomLink 
			    	name="Inbox" 
			    	linkIcon={<InboxIcon className="h-5 w-5" />} 
			    	linkPath="/admin/messages/inbox" 
			    	chipValue="6"
			    />
			    <CustomLink 
			    	name="Archive" 
			    	linkIcon={<LuFolderArchive className="h-5 w-5" />} 
			    	linkPath="/admin/messages/archive" 
			    	chipClassname="hidden"
			    />
			  <CustomLink 
			  	name="Logout" 
			  	linkIcon={<PowerIcon className="h-5 w-5" />} 
			  	linkPath="/logout" 
			  	chipClassname="hidden"
			  />
			</List>
	)
}

export default AdminNavLinks