import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Resources from './components/Resources/Resources'
import Services from './components/Services/Services'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import SachinBannyStory from './components/SuccessfulStory/SachinBannyStory'
import RiteshStory from './components/SuccessfulStory/RiteshStory'
import Investors from './components/Investors/Investors'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/investors' element={<Investors/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/sachinbannystory' element={< SachinBannyStory/>}/>
        <Route path='/riteshstory' element={< RiteshStory/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
