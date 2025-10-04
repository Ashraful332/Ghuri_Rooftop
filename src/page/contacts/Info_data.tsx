import Call from "../../assets/icon/phone-call.svg";
import mail from "../../assets/icon/mail.svg";
import map from "../../assets/icon/map-pin.svg";


const Info_data = () => {
    return (
        <div>
            <section className="flex-center">
                <div className=" flex flex-col lg:flex-row flex-wrap gap-6 justify-center mx-auto mb-m px-4">

                    {/* Card 1 */}
                    <div className="w-full sm:w-[400px] lg:w-[430px] h-auto flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white 
                    border border-[#ddd] border-dotted p-4 rounded-md shadow-[0_-5px_10px_#ddd,_0_5px_10px_#363535ab]">

                        <div className="bg-white w-[50px] h-[50px] border border-[#ddd] border-dotted rounded-md flex-center">
                            <img src={map} alt="icon" />
                        </div>
                        <div className="w-full">
                            <h5 className="text-c-sec text-lg md:text-xl font-bold">Our Location</h5>
                            <p className="text-black/70 text-sm mt-3 mb-2">
                                Ghuri Rooftop is located at Holding No. 122, Lift 09, Mokka Eye Hospital, Bir Uttam Samsul Alam Road, beside Bailey Road and Habibullah Bahar University College in Shantinagar, Dhaka-1000, Bangladesh.
                            </p>
                            <a href="#" className="text-black/70 mt-2 mb-1 text-xs block font-bold">Dhaka, Bangladesh</a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full sm:w-[400px] lg:w-[430px] h-auto flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white 
                    border border-[#ddd] border-dotted p-4 rounded-md shadow-[0_-5px_10px_#ddd,_0_5px_10px_#363535ab]">

                        <div className="bg-white w-[50px] h-[50px] border border-[#ddd] border-dotted rounded-md flex-center">
                            <img src={Call} alt="icon" />
                        </div>
                        <div className="w-full">
                            <h5 className="text-c-sec text-lg md:text-xl font-bold">Our Phone</h5>
                            <p className="text-black/70 text-sm mt-3 mb-2">
                               Have questions, reservations, or special requests? Call us today and our friendly team at Ghuri Rooftop - ঘুড়ি রুফটপ will be happy to assist you.
                            </p>
                            <a href="#" className="text-black/70 mt-2 mb-1 text-xs block font-bold">+8801611-432682 +8801616-502185</a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full sm:w-[400px] lg:w-[430px] h-auto flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white 
                    border border-[#ddd] border-dotted p-4 rounded-md shadow-[0_-5px_10px_#ddd,_0_5px_10px_#363535ab]">

                        <div className="bg-white w-[50px] h-[50px] border border-[#ddd] border-dotted rounded-md flex-center">
                            <img src={mail} alt="icon" />
                        </div>
                        <div className="w-full">
                            <h5 className="text-c-sec text-lg md:text-xl font-bold">Our Mail</h5>
                            <p className="text-black/70 text-sm mt-3 mb-2">
                                Have questions, feedback, or reservation requests? Email us at and our friendly team at Ghuri Rooftop - ঘুড়ি রুফটপ will respond promptly to assist you.
                            </p>
                            <a href="#" className="text-black/70 mt-2 mb-1 text-xs block font-bold">ghurirooptop@gmail.com</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Info_data;