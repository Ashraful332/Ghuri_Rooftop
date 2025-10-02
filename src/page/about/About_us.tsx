import Clients from "../../components/home/Clients";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import AboutOur from "./AboutOur";
import Chefs from "./Chefs";
import AboutData from "./data";
import Hero from "./Hero";
import Reservation from "./Reservation";
import "./about.css"


const About_us = () => {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar/>
            <div>
                <Hero/>
                <AboutOur/>
                <AboutData/>
                <Chefs/>
                <Reservation/>
                <Clients/>
            </div>
            <Footer/>
        </div>
    );
};

export default About_us;