import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import IoCall from "../../assets/icon/phone-call.svg";
import FaUserCircle from "../../assets/icon/user-round.svg";
import MdAlternateEmail from "../../assets/icon/mail.svg";
import FaLocationDot from "../../assets/icon/map-pin.svg";
import MdOutlineDateRange from "../../assets/icon/calendar-days.svg";
import toast, { Toaster } from "react-hot-toast";

const Reservation = () => {
    // Handle form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Table reserved successfully! 🎉");
        e.currentTarget.reset();
    };

    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar />
            <div className="">
                <div className="Online-Reservation mt-m mb-m">
                    <div className="p-6 rounded-2xl bg-[#0000002f] backdrop-blur-[10px] shadow-xl max-w-4xl mx-auto">
                        <h2 className="text-header text-white mb-2">
                            Online Reservation
                        </h2>
                        <p className="text-gray-300 text-center mb-6">
                            Book your table for lunch or dinner.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {/* Name */}
                            <div className="relative">
                                <img src={FaUserCircle} alt="icon" className="absolute top-3 left-3 w-5" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <img src={MdAlternateEmail} alt="icon" className="absolute top-3 left-3 w-5" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <img src={IoCall} alt="icon" className="absolute top-3 left-3 w-5" />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Your Phone"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Address */}
                            <div className="relative">
                                <img src={FaLocationDot} alt="icon" className="absolute top-3 left-3 w-5" />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Your Address"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Dropdown (Meal Type) */}
                            <div className="relative">
                                <select
                                    name="meal"
                                    required
                                    className="w-full pl-3 pr-4 py-2 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-amber-500"
                                >
                                    <option value="" disabled selected>
                                        Select Meal
                                    </option>
                                    <option value="breakfast" className="text-gray-800">
                                        Breakfast
                                    </option>
                                    <option value="lunch" className="text-gray-800">
                                        Lunch
                                    </option>
                                    <option value="dinner" className="text-gray-800">
                                        Dinner
                                    </option>
                                </select>
                            </div>

                            {/* Date */}
                            <div className="relative">
                                <img src={MdOutlineDateRange} alt="icon" className="absolute top-3 left-3 w-5" />
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full pl-12 pr-4 py-2 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-full text-center mt-6">
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg transition-all"
                                >
                                    Reserve Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <Toaster position="top-center" reverseOrder={false} />

                <div className="max-w-[1170px] mx-auto text-primary flex flex-col w-full items-stretch gap-8 mb-h">
                    {/* Contact Card */}
                    <div className="flex-1 bg-[#1E1E1E] p-6 rounded-xl shadow-lg flex flex-col items-start gap-4 text-white">
                        <h3 className="text-2xl font-extrabold">Ghuri Rooftop - ঘুড়ি রুফটপ</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Holding No. 122, Lift 09, Mokka Eye Hospital, Bir Uttam Samsul Alam Road, beside Bailey Road and Habibullah Bahar University College, Shantinagar, Dhaka-1000, Bangladesh
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-200 text-sm">
                            <span>Email: <a href="mailto:ghurirooptop@gmail.com" className="underline hover:text-amber-500">ghurirooptop@gmail.com</a></span>
                            <span>Phone: <a href="tel:+8801611432682" className="underline hover:text-amber-500">+8801611-432682</a> | <a href="tel:+8801616502185" className="underline hover:text-amber-500">+8801616-502185</a></span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition-all">
                            Get Directions
                        </button>
                    </div>

                    {/* Reservation Info Card */}
                    <div className="flex-1 bg-[#1E1E1E] p-6 rounded-xl shadow-lg flex flex-col items-start gap-4 text-white">
                        <h3 className="text-2xl font-extrabold">Need Assistance?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Have questions, reservations, or special requests? Call us today and our friendly team at Ghuri Rooftop will be happy to assist you.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-200 text-sm">
                            <span>Email: <a href="mailto:ghurirooptop@gmail.com" className="underline hover:text-amber-500">ghurirooptop@gmail.com</a></span>
                            <span>Phone: <a href="tel:+8801611432682" className="underline hover:text-amber-500">+8801611-432682</a> | <a href="tel:+8801616502185" className="underline hover:text-amber-500">+8801616-502185</a></span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition-all">
                            Call Now
                        </button>
                    </div>

                    {/* Email Support Card */}
                    <div className="flex-1 bg-[#1E1E1E] p-6 rounded-xl shadow-lg flex flex-col items-start gap-4 text-white">
                        <h3 className="text-2xl font-extrabold">Email Support</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Have questions, feedback, or reservation requests? Email us and our friendly team at Ghuri Rooftop will respond promptly to assist you.
                        </p>
                        <div className="text-gray-200 text-sm">
                            <span>Email: <a href="mailto:ghurirooptop@gmail.com" className="underline hover:text-amber-500">ghurirooptop@gmail.com</a></span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition-all">
                            Send Email
                        </button>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Reservation;
