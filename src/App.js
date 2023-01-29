import React, {useEffect} from 'react'

import Legal from './components/Legal'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Selects from './components/Selects'
import About from './components/About'
import {Routes, Route} from 'react-router-dom'


function App() {
    useEffect(()=> {
      document.title = "FlowPaintLLC"
    },[]);

     return (
    <div>
    <TopBar/>
    <Navbar/>
    <Routes>
      <Route path='/' element={[<Hero/>,
    <Work/>,
    <Reviews/>,
    <Selects/>,
    <About/>,
    <Contact/>]}/>
    <Route path='/policy' element={
    <Legal/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
