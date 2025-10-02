
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import map from "../../assets/icon/map-pin.svg";
import Call from "../../assets/icon/phone-call.svg";
import mail from "../../assets/icon/mail.svg";


const ContactPage = () => {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar />
            <div className="bg-white">
                {/* section 1 */}
                <div className="background-image-cont h-[50vw] lg:h-[30vw] mt-m  flex-center ">
                    <p className="color-text text-lg">Enjoy your time in our restaurant with pleasure</p>
                    <h3 className="text-hero ">Our Restaurants Contacts</h3>
                </div>
                {/* section 2 */}
                <section className="flex-center">
                    <div className="pt-h flex flex-col lg:flex-row flex-wrap gap-6 justify-center mx-auto mb-m px-4">

                        {/* Card 1 */}
                        <div className="w-full sm:w-[400px] lg:w-[430px] h-auto flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white 
                    border border-[#ddd] border-dotted p-4 rounded-md">

                            <div className="bg-white w-[50px] h-[50px] border border-[#ddd] border-dotted rounded-md flex-center">
                                <img src={map} alt="icon" />
                            </div>
                            <div className="w-full">
                                <h5 className="text-c-sec text-lg md:text-xl font-bold">Our Location</h5>
                                <p className="text-black/70 text-sm mt-3 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                </p>
                                <a href="#" className="text-black/70 mt-2 mb-1 text-xs block">USA 27TH Brooklyn NY</a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full sm:w-[400px] lg:w-[430px] h-auto flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white 
                    border border-[#ddd] border-dotted p-4 rounded-md">

                            <div className="bg-white w-[50px] h-[50px] border border-[#ddd] border-dotted rounded-md flex-center">
                                <img src={Call} alt="icon" />
                            </div>
                            <div className="w-full">
                                <h5 className="text-c-sec text-lg md:text-xl font-bold">Our Phone</h5>
                                <p className="text-black/70 text-sm mt-3 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                </p>
                                <a href="#" className="text-black/70 mt-2 mb-1 text-xs block">+489756412322 +123456789222</a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full sm:w-[400px] lg:w-[430px] h-auto flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white 
                    border border-[#ddd] border-dotted p-4 rounded-md">

                            <div className="bg-white w-[50px] h-[50px] border border-[#ddd] border-dotted rounded-md flex-center">
                                <img src={mail} alt="icon" />
                            </div>
                            <div className="w-full">
                                <h5 className="text-c-sec text-lg md:text-xl font-bold">Our Mail</h5>
                                <p className="text-black/70 text-sm mt-3 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                </p>
                                <a href="#" className="text-black/70 mt-2 mb-1 text-xs block">yourmail@domain.com</a>
                            </div>
                        </div>

                    </div>
                </section>

                {/* section 3 map */}
                <div className="bg-primary flex flex-col lg:flex-row gap-6 justify-center mx-auto mb-h p-6 w-full max-w-[1200px] h-auto rounded-lg">

                    {/* Address Card */}
                    <div className="bg-primary2 p-6 w-[100%] lg:w-[300px] h-auto rounded-lg text-white flex flex-col justify-center items-center gap-3 text-center">
                        <h5 className="text-c-sec text-xl md:text-2xl mb-2">Dhaka Bangladesh</h5>
                        <p>BD 27TH Brooklyn N</p>
                        <p>+8801756412322</p>
                        <p>yourmail@domain.com</p>
                    </div>

                    {/* Google Map */}
                    <div className="w-full flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74216.90276894011!2d90.554368!3d23.6847104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1759304234877!5m2!1sen!2sbd"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-[300px] sm:h-[400px] rounded-xl"
                        ></iframe>
                    </div>

                </div>

                {/* section 4 contact */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-[95%] max-w-[1200px] mx-auto py-10">
                    {/* Left Side - Contact Form */}
                    <div className="flex-1">
                        <p className="text-sm text-yellow-600 italic">Still Have a questions ?</p>
                        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h3>

                        <form className="space-y-5">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Your Message:"
                                rows="6"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Opening Hours Card */}
                    <div className="relative flex-1 max-w-[550px]">
                        <img
                            src="https://i.ibb.co.com/Ps6Q2k1p/benjamin-voros-ph-IFd-C6l-A4-E-unsplash.jpg"
                            alt="restaurant"
                            className="w-full h-[470px] object-cover rounded-xl"
                        />

                        <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center text-center text-white px-6">
                            <p className="uppercase text-yellow-500 tracking-wider text-sm">
                                Call For Reservations
                            </p>
                            <h4 className="text-2xl font-semibold mb-6">Opening Hours</h4>

                            <div className="flex justify-between w-full px-6 mb-6">
                                {/* Left Side */}
                                <div>
                                    <p className="text-yellow-400 text-sm">Sunday to Tuesday</p>
                                    <p className="text-lg">09:00</p>
                                    <p className="text-lg">22:00</p>
                                </div>

                                {/* Right Side */}
                                <div>
                                    <p className="text-yellow-400 text-sm">Friday to Saturday</p>
                                    <p className="text-lg">11:00</p>
                                    <p className="text-lg">19:00</p>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <p className="text-yellow-500 text-xl font-semibold">+3 (111) 123456789</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;