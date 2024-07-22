import { useState } from 'react'
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Slider from './components/banner/Slider.jsx';
import About from './components/about/About.jsx';
import Greenplan from './components/Houseplan/Greenplan.jsx';
import Planhouse from './components/Houseplan/Planhouse.jsx';
import Preview from './components/Preview/Preview.jsx';
import Working from './components/working/Working.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div className="head">
        <Header />
      </div>
      <div id='home' className="banner">
        <Banner />
      </div>
      <div className="swiper-container">
        <Slider />
      </div>
      <div id='about' className="about">
        <About />
      </div>
      <div id='plan' className="plan-house">
        <Greenplan />
        <Planhouse />
      </div>
      <div id='working' className='preview-wrap'>
        <Preview />
      </div>
      <div className='working-wrap'>
        <Working />
      </div>
      <div id='contact' className='contact-wrap'>
        <Contact />
      </div>
      <div className='footer-wrap'>
        <Footer />
      </div>
    </div>
  )
}

export default App
