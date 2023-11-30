import { useState, useEffect } from 'react';
import { SettingsCard, Loading, AdminNavbar } from '../../../components';
import { Button } from '@material-tailwind/react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SettingsContent = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`)
      .then((result) => result.json())
      .then((data) => {
        if (data.length === 0) {
          setSettings(<div>No data in the database!</div>);
        } else {
          setSettings(data.map((settings) => (
            <SettingsCard key={settings._id} settingsProp={settings} />
          )));
        }
        setLoading(false);
      });
  }, []);


  const AddKeyValue = () => {
    return navigate("/admin/add-key-value-pair")
  }


  return (
    <>
      {loading ? <Loading /> : (   
        <>
        <AdminNavbar />
        <div className="p-5 flex justify-center">
          <Button onClick={AddKeyValue} variant="gradient" color="blue" size="sm" className="flex flex-row "><IoMdAdd className="h-4 w-4" /> Add new</Button>
        </div>
        <div className="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
          {settings}
        </div>
        </>
      )}
    </>
  )
};

export default SettingsContent;