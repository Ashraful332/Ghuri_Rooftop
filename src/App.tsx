import './App.css';
import AboutUs from './components/home/AboutUs';
import Clients from './components/home/Clients';
import Hero from './components/home/Hero';
import Menu_offers from './components/home/Menu_offers';
import PopularBlog from './components/home/PopularBlog';
import Service from './components/home/Service';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import Map from './components/ui/Map';
import Info_data from './page/contacts/Info_data';
import Popular_Food from './components/home/Popular_Food';
import Our_Blog from './components/home/Our_Blog';

function App() {

  return (
    <div className='max-w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <div className='mt-12'>
        <Info_data />
      </div>
      <main>
        <AboutUs />
        <Popular_Food/>
        <PopularBlog />
        <Our_Blog/>
        <Service />
        <Menu_offers />
        <Clients />
        <Map />
      </main>

      <Footer />
    </div>
  )
}

export default App
