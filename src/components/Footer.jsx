import { FaYoutube, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  return (
    <footer
      className="bg-neutral-800 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      
     <div className="flex flex-col md:flex-row justify-between px-20 text-[12px] bg-neutral-900 p-6 text-center text-neutral-200">
        <div>
         <span>{ new Date().getFullYear() } &copy; Lito Galan Jr. </span>
         <a
           target="_blank"
           className="font-semibold text-orange-300"
           href=""
         >WEB PORTFOLIO 3.0</a>
        </div>

        <div className="flex justify-center text-neutral-100">
          <a href="" target="_blank" className="p-1.5 hover:text-white hover:bg-red-500">
            <FaYoutube size={18} />
          </a>
          <a href="" target="_blank" className="p-1.5 hover:text-white hover:bg-blue-500">
            <FaFacebookF size={18} />
          </a>
          <a href="" target="_blank" className="p-1.5 hover:text-white hover:bg-[#3ebdb4]">
            <FaTwitter size={18} />
          </a>
          <a href="" target="_blank" className="p-1.5 hover:text-white hover:bg-[#e66a74]">
            <FaGooglePlusG size={18} />
          </a>
          <a href="" target="_blank" className="p-1.5 hover:text-white hover:bg-[#18b9d9]">
            <FaLinkedinIn size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;