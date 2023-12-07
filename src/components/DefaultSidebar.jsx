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
import AdminNavLinks from './AdminNavLinks';


import { TbGridDots } from "react-icons/tb";
 
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

 
  return (
  <>
    <Card floated={false} shadow={false} className="h-[530px] w-full max-w-[18rem] p-4 bg-defaultColor hidden lg:block">
      <div className="mb-2 capitalize p-4">
        <Typography variant="h5" color="blue-gray">
          
        </Typography>
      </div>
      <AdminNavLinks />
    </Card>
    


  </>

      
  );
}