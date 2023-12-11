import { ImSpinner2 } from "react-icons/im";
import { getKeyValuePairs } from '../../utils/API';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
	AdminLayout, 
	DefaultSidebar, 
	AdminNavbar, 
	SettingsCard, 
	AdminLoading, 
	AnimatedNumber, 
	CustomDialogBox, 
	CustomButton } from '../../components'
import { 
	Input, 
	Checkbox, 
	Typography,
	Button } from '@material-tailwind/react'
	import { IoMdArrowBack } from "react-icons/io";

const AdminHome = () => {

	let navigate = useNavigate();
	const [key, setKey] = useState('');
	const [value, setValue] = useState(''); 
	const [count, setCount] = useState(0)
	const [settings, setSettings] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isClicked, setIsClicked] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const [isKeyChecked, setIskeyChecked] = useState(false);
	const [isValueChecked, setIsValueChecked] = useState(false);
	const [openAddDialog, setOpenAddDialog] = useState(false);

	useEffect(() => {
			getKeyValuePairs()
			.then((data) => {
					if (data.length !== 0) {
							setSettings(data.map((settings) => (
									<SettingsCard key={settings._id} settingsProp={settings} />
								)))
					} else {
							setSettings(<div>No data in the database!</div>);
					}
					setCount(data.length);
					setLoading(false);
			})
	}, [settings,  count])


	const handleClick = () => {
		navigate('/admin/add-key-value-pair');
	}

	const handleOpenAddDialog = () => {
		setOpenAddDialog(!openAddDialog);
	}

	const handleFormSubmit = (event) => {
	  event.preventDefault();
	  setIsClicked(true);
	  fetch(`${import.meta.env.VITE_API_URL}/settings/add-key-value`, {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json',
	      Authorization: `Bearer ${localStorage.getItem('token')}`
	    },
	    body: JSON.stringify({
	      key: key,
	      value: value
	    })
	  })
	    .then(result => result.json())
	    .then(data => {
	      if (data === true) {
	        toast.success("Successfully Added!");
	        setOpenAddDialog(false);
	        setIsClicked(false);
	        setKey('');
	        setValue('');
	      } else {
	        toast.error('Error adding new data!');
	        setOpenAddDialog(false);
	        setIsClicked(false);
	        setKey('');
	        setValue('');
	      }
	    });
	};


const setDisabledButton = () => {

}

	useEffect(() => {
	  if (key.length >= 3 && value.length >= 5) {
	    setIsDisabled(false)
	  } else {
	    setIsDisabled(true)
	  }
	}, [key, value]) 

	useEffect(() => {
	  if (key.length >= 3 && value.length >= 5) {
	    setIsDisabled(false)
	  } else {
	    setIsDisabled(true)
	  }
	}, [key, value]) 

	useEffect(() => {
	  if (key.length >= 3) {
	      setIskeyChecked(true)
	  } else {
	    setIskeyChecked(false)
	  }
	}, [key])

	useEffect(() => {
	  if (value.length >= 5) {
	      setIsValueChecked(true)
	  } else {
	    setIsValueChecked(false)
	  }
	}, [value])



	return (
		<>
			<AdminNavbar />
			<div className="flex flex-row">
					<DefaultSidebar />
					<AdminLayout
						count={
							loading ? <ImSpinner2 className="animate-spin !w-4 !h4" /> : (
									<AnimatedNumber value={count} />
							)
						}
						buttonName="add"
						handleClick={handleOpenAddDialog}
						buttonIcon={<IoMdAdd />}
					>

						{
							loading ? <AdminLoading /> : (
									<motion.div 
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: .4 }}
											className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-3">
									  {settings}
									</motion.div>
							)
						}

					</AdminLayout>
			</div>
			<CustomDialogBox 
						open={openAddDialog} 
						handleOpen={handleOpenAddDialog}
						title="Add New"
				>
						<form className="flex flex-col">
						  <div className="mb-1 flex flex-col ">
						    <Input 
						       className="capitalize"
						       type="text"
						       value={key}
						       onChange={e => setKey(e.target.value)} 
						       label="Key"
						       size="lg" 
						     />
						    <div className="relative my-4">
						        <textarea
						          minLength={3}
						          value={value}
						          onChange={e => setValue(e.target.value)} 
						          className="peer h-full min-h-[100px] w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-dark/75 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
						          placeholder=" "
						        ></textarea>
						        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark/75 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-dark/75 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-dark/75 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						          Value
						        </label>
						      </div>
						    
						  </div>

						  <div className="pt-0 mt-2 flex flex-row gap-1">
						    <CustomButton handleClick={handleOpenAddDialog} label="cancel" color="black" spinner="hidden" />
						    {
						      !isClicked ? (
						          <CustomButton handleClick={handleFormSubmit} isDisabled={isDisabled} label="save" color="green" spinner="hidden" />
						        ) : (
						          <CustomButton isDisabled={isDisabled} label="saving..." color="green" />
						        )
						    }
						  
						  </div>
						
						  	<div className="mt-3">
						  	  <Checkbox  
						  	    color="green"
						  	    className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
						  	    checked={isKeyChecked}
						  	    label={
						  	      <Typography variant="small" color="gray" className="font-normal">
						  	        Key must be greater than 2 characters.
						  	      </Typography>
						  	    }
						  	  />
						  	</div>
						  	<div className="-mt-3">
						  	  <Checkbox  
						  	    color="green"
						  	    className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
						  	    checked={isValueChecked}
						  	    label={
						  	      <Typography variant="small" color="gray" className="font-normal">
						  	        Value must be greater than 4 characters.
						  	      </Typography>
						  	    }
						  	  />
						  	</div>

						</form>
				</CustomDialogBox>

					<div className="absolute">
					  <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
					</div>

		</>
	)
}

export default AdminHome