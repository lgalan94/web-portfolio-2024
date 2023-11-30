import { useState, useEffect } from 'react';

const Footer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [facebook, setFacebook] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [name, setName] = useState('');
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`)
        .then((result) => result.json())
        .then((data) => {
          const fbSetting = data.find((setting) => setting.key === 'Facebook'); 
          const inSetting = data.find((setting) => setting.key === 'linkedin');
          const nameSetting = data.find((setting) => setting.key === 'name');
          const appVersionSetting = data.find((setting) => setting.key === 'App Name & Version');
          if (fbSetting && inSetting && nameSetting && appVersionSetting) {
            setFacebook(fbSetting.value);
            setLinkedIn(inSetting.value);
            setName(nameSetting.value);
            setAppVersion(appVersionSetting.value)
          }
          setIsLoading(false);
        });
    }, []);

  return (
    <footer
      className="bg-neutral-800 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      
     <div className="flex flex-col md:flex-row justify-between px-20 text-[12px] bg-neutral-900 p-6 text-center text-neutral-200">
        <div className="order-2 lg:order-1">
         <span>{ new Date().getFullYear() } &copy; {name} </span>
         <a
           target="_blank"
           className="font-md uppercase text-orange-500"
           href=""
         >{appVersion}</a>
        </div>

        <div className="flex order-1 lg:order-2 md:p-1 justify-center text-neutral-100">
         
          <a href={facebook} target="_blank" className="p-1.5 hover:underline hover:text-white hover:bg-blue-500">
            Facebook
          </a>
         
          <a href={linkedIn} target="_blank" className="p-1.5 hover:underline hover:text-white hover:bg-[#18b9d9]">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

