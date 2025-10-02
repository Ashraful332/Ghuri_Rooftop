import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";



const MenuPage = () => {
    return (
        <div>
            <Navbar />
            {/* section 1 */}
            <div className="background-image-menu h-[50vw] lg:h-[30vw] mt-m flex-center ">
                <p className="color-text">Enjoy your time in our restaurant with pleasure</p>
                <h3 className="text-hero">Our Awesome Menu</h3>
            </div>
            <div className="mt-h mb-m">
                <div className="p-2">
                    <div className="w-auto sm:w-[450px] h-[300px] ">
                        <img src="https://i.ibb.co.com/9Q7ndNr/pexels-janetrangdoan-769969.jpg" alt="menu" className="w-full h-full object-cover rounded-t-lg " />
                    </div>
                    <div className="w-auto sm:w-[450px] h-[250px] rounded-b-lg bg-white border border-[#ddd] border-dotted p-4 
                    flex flex-col justify-between " >
                        <div>
                            <div className="flex justify-between pt-5 mb-3">
                                <h4 className="text-lg font-bold text-c-sec">Soft Shell Crab</h4>
                                <p className="text-xs text-c-sec">Sale -30%</p>
                            </div>
                            <p className="text-sm text-black/70">Seasoned with an herb crust, served with au jus and handcarved to order.</p>
                            <hr className="border border-dashed text-[#0000001a] mt-3 " />
                        </div>

                        <div className="flex justify-between pt-5">
                            <p>Price:<span>$29</span></p>
                            <button
                                className="
                                px-4 py-2 text-sm font-semibold 
                                text-c-sec bg-gradient-to-tr from-[var(--pc)] to-[var(--pc2)]
                                border border-yellow-600 
                                rounded-md shadow-lg
                                hover:from-white/80 hover:to-white/90
                                hover:shadow-xl hover:-translate-y-[2px]
                                active:translate-y-[1px] active:shadow-md
                                transition-all duration-200
                              "
                            >
                                Add to Cart
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;