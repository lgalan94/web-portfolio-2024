import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import {
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom';
 
const AdminNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const CustomLink = ({ endPoint, title, className = "", location }) => {
    const currentPath = useLocation().pathname;

    return (
      <Link as={Link} to={endPoint} className={`${className} relative tracking-wider uppercase py-1 lg:py-3 group hover:text-dark  ${currentPath === endPoint ? 'text-dark' : 'text-gray-500'}`} >
        {title}

        <span className={`h-[2px] inline-block w-0 lg:bg-dark bg-none opacity-50 absolute left-0 -bottom-1.5 ${currentPath === endPoint ? 'w-full' : 'w-0'}`}>
          &nbsp;
        </span>
      </Link>
    );
  };

  const navList = (
    <ul className="mt-2 mb-6 lg:mb-0 lg:mt-0 text-sm flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      <CustomLink endPoint="/admin" title="home" className="lg:mr-1" location={location} />
      <CustomLink endPoint="/admin/experiences" title="Experiences" className="lg:mx-1" location={location} />
      <CustomLink endPoint="/admin/experiences" title="education" className="lg:mx-1" location={location} />
      <CustomLink endPoint="/admin/messages" title="Messages" className="lg:ml-1" location={location} />
    </ul>
  );
 
  return (
    <div className="sticky top-0 z-10 max-h-[768px] w-full ">
      <Navbar className="z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold uppercase"
          >
            Admin
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
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
              onClick={() => setOpenNav(!openNav)}
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
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-2">
            <Button 
              fullWidth variant="text" 
              size="sm" 
              className=""
              onClick={() => navigate('/logout')} >
              <span>Logout</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AdminNavbar