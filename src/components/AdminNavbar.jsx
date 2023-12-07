import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
  Drawer
} from "@material-tailwind/react";
import {
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom';
import AdminNavLinks from './AdminNavLinks'
 
const AdminNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

 
  return (
    <>
    <div className="sticky top-0 z-10 max-h-[768px] w-full ">
      <Navbar className="z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8 shadow">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-semibold uppercase"
          >
            &copy;<span className="italic"> GALAN </span><span className="font-md uppercase text-orange-500">ADMIN UI</span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => navigate('/logout')}
              >
                <span>Logout</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={openDrawer}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        
      </Navbar>
    </div>

    <React.Fragment>
      <Drawer placement="right" open={open} onClose={closeDrawer}>
        <div className="mb-2 flex capitalize items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            
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
        
        <AdminNavLinks />
        
      </Drawer>
    </React.Fragment>

    </>

  );
}

export default AdminNavbar