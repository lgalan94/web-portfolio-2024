import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Home, Contact, About, Projects, PageNotFound} from './pages'
import { AnimatePresence } from 'framer-motion';
import { DataProvider } from './DataContext.js';
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState({
    name: null,
    banner: null,
    fbLink: null,
    lnLink: null,
    title: null,
    whoAmIContent: null,
    careerObjContent: null
  })

  const fetchData = () => {
      fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`, {
        method: 'GET'
      })
      .then(result => result.json())
      .then(data=> {
          let NAME = data.find((name) => name.key === 'Name'); 
          let BANNER = data.find((banner) => banner.key === 'Banner');
          let FBLINK = data.find((fb) => fb.key === 'Facebook Link');
          let LNLINK = data.find((ln) => ln.key === 'LinkedIn Link');
          let TITLE = data.find((tit) => tit.key === 'Title & Version');
          let WHOAMI = data.find((whoAmI) => whoAmI.key === 'Who Am I Content');
          let CAREEROBJECTIVES = data.find((careerObjectives) => careerObjectives.key === 'Career Objectives Content');
          if (NAME || BANNER || FBLINK || LNLINK || TITLE || WHOAMI || CAREEROBJECTIVES) {
            setData({
              name: NAME.value,
              banner: BANNER.value,
              fbLink: FBLINK.value,
              lnLink: LNLINK.value,
              title: TITLE.value,
              whoAmIContent: WHOAMI.value,
              careerObjContent: CAREEROBJECTIVES.value
            })
          }
      })
  }

  useEffect(() => {
      fetchData()
  }, [])
  

  const location = useLocation();

  const Inaccessible = () => {
   return < Navigate to = '/not-found' />
  }

  return (
    <DataProvider value = {{ data, setData }} >
      <Routes location={location} key={location.pathname} >
        <Route index element={< Home />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/about" element={< About />} />
        <Route path="/not-found" element={< PageNotFound />} />
        <Route path="*" element={< Inaccessible />} />
      </Routes>
    </DataProvider>
  )
}

export default App
