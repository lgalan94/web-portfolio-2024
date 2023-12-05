import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Drawer,
  Button,
  IconButton
} from "@material-tailwind/react";
import {
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { LuFolderArchive } from "react-icons/lu";
 
import {
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom';

import React,  { useState, useEffect } from 'react'

 
export default function DefaultSidebar() {

  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const CustomSidebarLink = ({ name, linkIcon, linkPath, className="", itemSuffix  }) => {
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
        </ListItem>
      </Link>
    )
  }

  const SidebarLinks = (
    <List>
      <CustomSidebarLink name="Inbox" linkIcon={<InboxIcon className="h-5 w-5" />} linkPath="/admin/messages/inbox" />
      <CustomSidebarLink name="Archive" linkIcon={<LuFolderArchive className="h-5 w-5" />} linkPath="/admin/messages/archive" />
      <CustomSidebarLink name="Logout" linkIcon={<PowerIcon className="h-5 w-5" />} linkPath="/logout" />
    </List>
    )

  return (
  <>
    <Card floated={false} shadow={false} className="h-[530px] w-full max-w-[18rem] p-4 bg-defaultColor hidden lg:block">
      <div className="mb-2 capitalize p-4">
        <Typography variant="h5" color="blue-gray">
          messages
        </Typography>
      </div>
      {SidebarLinks}
    </Card>

    <IconButton
      variant="text"
      className="absolute h-5 w-5 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
      ripple={false}
      onClick={openDrawer}
    >
      <InboxIcon className="absolute left-1 h-5 w-5" />
    </IconButton>

    <React.Fragment>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex capitalize items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            messages
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        
        {SidebarLinks}
        
      </Drawer>
    </React.Fragment>

  </>

      
  );
}