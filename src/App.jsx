import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Home, Contact, About, PageNotFound} from './pages'

import Login from './auth/Login';
import Logout from './auth/Logout';

import { AnimatePresence } from 'framer-motion';
import { AdminHome, UpdateSettingsPage, AddKeyValuePair, Messages, Blank } from './pages/admin';
import { UserProvider } from './UserContext.js';
import { useState, useEffect } from 'react'

import PrivateRoutes from './utils/ProtectedRoutes';

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

  const unsetUser = () => {
    localStorage.clear();
  }

  const Inaccessible = () => {
   return < Navigate to = '/not-found' />
  }


  useEffect(() => {

    if (localStorage.getItem('token')) {
        fetch(`${import.meta.env.VITE_API_URL}/user/user-details`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(result => result.json())
        .then(data=> {
          setUser({
            id: data._id,
            isAdmin: data.isAdmin
          })
        })
    }
  }, [])

  const location = useLocation();

  return (
    <UserProvider value = {{ user, setUser, unsetUser }} >
      
   
        <Routes location={location} key={location.pathname} >
          <Route index element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/about" element={< About />} />
          <Route path="/not-found" element={< PageNotFound />} />
          <Route path="*" element={< Inaccessible />} />
          <Route path="/login" element={< Login />} />
          <Route path="/logout" element={< Logout />} />

          
          

          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={< AdminHome />} />
            <Route path="/update/:settingsId" element={<UpdateSettingsPage />} />
            <Route path="/admin/add-key-value-pair" element={<AddKeyValuePair />} />
            <Route path="/admin/messages" element={<Messages />} />
            <Route path="/redirect" element={<Blank />} />
          </Route> 

        </Routes>
    
    </UserProvider>
  )
}

export default App
