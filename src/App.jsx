import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Home, Contact, About, PageNotFound, Login } from './pages'
import { AnimatePresence } from 'framer-motion';
import { AdminHome } from './pages/admin';
import { UserProvider } from './UserContext.js';
import { useState } from 'react'

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

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
    <UserProvider value = {{ user, setUser, unsetUser }} >
      
   
        <Routes location={location} key={location.pathname} >
          <Route index element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/about" element={< About />} />
          <Route path="/not-found" element={< PageNotFound />} />
          <Route path="*" element={< Inaccessible />} />
          <Route path="/auth-login" element={< Login />} />

          <Route path="/admin-home" element={< AdminHome />} />

        </Routes>
    
    </UserProvider>
    </AnimatePresence>
  )
}

export default App
