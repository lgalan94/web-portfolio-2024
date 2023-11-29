import { useState, useEffect } from 'react';
import { SettingsCard, Loading } from '../../../components';

const SettingsContent = () => {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`)
      .then((result) => result.json())
      .then((data) => {
          setSettings(data.map((settings) => (
            <SettingsCard key={settings._id} settingsProp={settings} />
          )));
          setLoading(false);
      });
  }, []);



  return (
    <>
      {loading ? <Loading /> : (
        <div className="grid mb-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {settings}
        </div>
      )}
    </>
  )
};

export default SettingsContent;