import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Home, Contact, About, PageNotFound, Login } from './pages'

function App() {

  const Inaccessible = () => {
   return < Navigate to = '/not-found' />
  }

  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname} >
      <Route index element={< Home />} />
      <Route path="/contact" element={< Contact />} />
      <Route path="/about" element={< About />} />
      <Route path="/not-found" element={< PageNotFound />} />
      <Route path="*" element={< Inaccessible />} />
      <Route path="/auth-login" element={< Login />} />
    </Routes>
  )
}

export default App
