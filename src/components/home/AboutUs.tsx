import { Link } from "react-router";
import Corn from "../../assets/icon/corn.png";


const AboutUs = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] backdrop-blur-[8.3px] p-2 lg:p-8 rounded-md border-[1.5px] border-[#ddd] border-dashed ">
                <div className="bg-white p-6 rounded-xl border-[1.5px] border-[#ddd] border-dashed flex flex-col lg:flex-row justify-between ">
                    <div className="w-[99%] lg:w-[50%] ">
                        <p className="text-sm text-c-sec italic">Enjoy your time in our Place</p>
                        <h3 className="font-bold text-2xl mt-4 mb-3">About Our Restaurant</h3>
                        <hr className="border border-dashed text-[#ddd] mb-6 " />
                        <p className="text-sm text-black/70">
                            Welcome to Ghuri Rooftop (ঘুড়ি রুফটপ) — a serene escape in the heart of Dhaka where delicious food meets breathtaking city views.
                            Located at Holding No. 122, Lift 09, Mokka Eye Hospital, Bir Uttam Samsul Alam Road, beside Bailey Road and Habibullah Bahar University College, Shantinagar, Dhaka-1000, Ghuri Rooftop offers a cozy, elegant rooftop experience for families, friends, and food lovers.

                            At Ghuri Rooftop, we believe food is not just a meal — it's a memory. Our menu is thoughtfully crafted with a blend of Bangladeshi favorites, continental classics, and fusion delights, ensuring every bite brings joy and satisfaction.

                            Whether you're here for a romantic dinner under the stars, a fun hangout with friends, or a family celebration, Ghuri Rooftop promises a warm ambiance, exceptional service, and unforgettable flavors.

                            Come, feel the breeze, enjoy the view, and let your moments take flight — just like a “Ghuri” (kite) in the open sky. 🎈
                        </p>
                        <Link to='/about'>
                            <button className="btn-sec mt-8 ">Read more About us</button>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="mt-12 lg:mt-0 w-[100%] lg:w-[400px] xl:w-[614px] h-[250px] xl:h-[400px] overflow-hidden rounded-lg">
                            <img src="https://i.ibb.co.com/9Hy8JQ4t/556111840-122141251550649673-8423459026622778547-n.jpg" alt="image" className="hover-image-out rounded-lg object-cover" />
                        </div>
                        <div className="absolute z-20 hidden lg:flex bottom-30 xl:-bottom-10 -left-20 border border-dotted border-[#ddd] p-4 bg-[#ffffff15] backdrop-blur-[1.3px] rounded-2xl ">
                            <img src="https://i.ibb.co.com/Gv1jMz6r/548497845-122140073984649673-4389683067337673647-n.jpg" alt="image" className="w-[166px] h-[110px] rounded-lg object-cover " />
                        </div>
                        <div className="absolute z-20 hidden lg:flex -top-10 -right-20 border border-dotted border-[#ddd] p-4 bg-[#ffffff15] backdrop-blur-[1.3px] rounded-2xl ">
                            <img src="https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg" alt="image" className="w-[232px] h-[154px] rounded-lg object-cover " />
                        </div>
                        <div className="absolute z-30 -top-10 -left-20 hidden lg:flex">
                            <img src={Corn} alt="corn ilastration" className="w-[100px] h-[100px] " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
