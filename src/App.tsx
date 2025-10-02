import './App.css'
import AboutUs from './components/home/AboutUs'
import Clients from './components/home/Clients'
import Hero from './components/home/Hero'
import Menu_offers from './components/home/Menu_offers'
import PopularBlog from './components/home/PopularBlog'
import Service from './components/home/Service'
import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'

function App() {

  return (
    <div className='max-w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <PopularBlog/>
      <Service/>
      <Menu_offers/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default App
