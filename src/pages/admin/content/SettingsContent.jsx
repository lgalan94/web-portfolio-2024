import { useState, useEffect } from 'react';
import { SettingsCard, Loading, AdminNavbar } from '../../../components';
import { Button } from '@material-tailwind/react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Card, Chip } from '@material-tailwind/react'

const SettingsContent = () => {
  let i = 0;
  const navigate = useNavigate();
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`)
      .then((result) => result.json())
      .then((data) => {
        if (data.length === 0) {
          setSettings(<div>No data in the database!</div>);
        } else {
          setSettings(data.map((settings) => {
            i++;
            return (
            <SettingsCard number={i} key={settings._id} settingsProp={settings} />
          )
          }));
        }
        setCount(data.length);
        setLoading(false);
      });
  }, [settings, count]);


  const AddKeyValue = () => {
    return navigate("/admin/add-key-value-pair")
  }


  return (
    <>
      {loading ? <Loading /> : (   
        <>
        <AdminNavbar />
        <div className="p-5 flex justify-between">
          <Chip variant="ghost" value={count} />
          <Button onClick={AddKeyValue} variant="gradient" color="blue" size="sm" className="flex flex-row "><IoMdAdd className="h-4 w-4" /> Add new</Button>
          
        </div>
        <div className="px-10 w-full max-w-[92vw] h-full max-h-[80vh] lg:max-h-[70vh] overflow-y-auto mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-3">
          {settings}
        </div>
        </>
      )}
    </>
  )
};

export default SettingsContent;