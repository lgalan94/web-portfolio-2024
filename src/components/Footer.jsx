import { useContext, useEffect, useState } from 'react';
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import DataContext from '../DataContext.js';

const Footer = () => {

  let loading = 'Loading...'

  const [isLoading, setIsLoading] = useState(true);

  const { data } = useContext(DataContext);

  useEffect(() => {
    if (data.title !== null && data.name !== null && data.fbLink !== null && data.lnLink !== null ) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [data])

  return (
    <footer
      className="bg-neutral-800 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      
     <div className="flex flex-col md:flex-row justify-between px-20 text-[12px] bg-neutral-900 p-6 text-center text-neutral-200">
        <div className="order-2 lg:order-1">
         <span>{ new Date().getFullYear() } &copy; { isLoading ? loading : data.name  } </span>
         <a
           target="_blank"
           className="font-md uppercase text-teal-500"
           href=""
         > { isLoading ? '' : data.title } </a>
        </div>

        <div className="flex order-1 lg:order-2 md:p-1 justify-center text-neutral-100">
         
          <a href={data.fbLink} target="_blank" className="p-1.5 flex flex-row items-center gap-1 hover:underline hover:text-white hover:bg-blue-500 hover:rounded-sm">
            <FaSquareFacebook className="h-3.5 w-3.5" / >Facebook
          </a>
         
          <a href={data.lnLink} target="_blank" className="p-1.5 flex flex-row items-center gap-1 hover:underline hover:text-white hover:bg-[#18b9d9] hover:rounded-sm">
            <FaLinkedin className="h-3.5 w-3.5" / > LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

