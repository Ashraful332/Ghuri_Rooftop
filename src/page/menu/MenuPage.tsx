import { useEffect, useState } from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import axios from "axios";
import star from "../../assets/icon/star.svg";

const PublicUrl = import.meta.env.VITE_API_URL;

type Menu = {
    _id: string;
    foodName: string;
    PhotoUrl: string;
    price: number;
    details: string;
    rating: number;
    type: string;
};


const MenuPage = () => {
    const [menu, setMenu] = useState<Menu[]>([]);
    const [popular, setPopular] = useState<Menu[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        function fetchMenu() {
            try {
                async function GetAllMenu() {
                    const response = await axios.get(`${PublicUrl}/all-menu`);
                    setMenu(response.data);
                    setIsLoading(false);
                }
                GetAllMenu();

                async function GetPopularMenu() {
                    const response = await axios.get(`${PublicUrl}/limate-menu`);
                    setPopular(response.data);
                }
                GetPopularMenu()
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }
        fetchMenu();
    }, []);
    return (
        <div>
            <Navbar />
            {/* section 1 */}
            <div className="background-image-menu h-[50vw] lg:h-[30vw] mt-m flex-center ">
                <p className="color-text">Enjoy your time in our restaurant with pleasure</p>
                <h3 className="text-hero">Our Awesome Menu</h3>
            </div>
            <div className="mt-h mb-m max-w-[1500px] flex-center mx-auto ">
                <h2 className="text-heading pb-8">Popular Menu</h2>
                {/* our popular menu */}
                {isLoading ? (
                    <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        {popular.map((item) => (
                            <div key={item._id}>
                                <div className=" w-[97vw] sm:w-[370px] ">
                                    <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
                                        <img src={item.PhotoUrl} alt="photo 1" className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div className="flex flex-col h-[170px] justify-between">
                                        <div>
                                            <div className="mt-5 flex justify-between text-2xl">
                                                <h4 className="font-bold">{item.foodName}</h4>
                                                <p>${item.price}</p>
                                            </div>
                                            <p className="text-[var(--pTx-color)] text-sm pt-[6px] pb-4 w-[300px] ">
                                                {item.details}
                                            </p>
                                        </div>

                                        <div className="flex justify-between">
                                            {/* <OrderNow
                                                    _id={item._id}
                                                    foodName={item.foodName}
                                                    price={item.price}
                                                    details={item.details}
                                                    photo={item.PhotoUrl || "photo is not loading"}
                                                /> */}

                                            <div className="flex-row-center gap-[2px]">
                                                {Array.from({ length: item.rating }, (_, i) => (
                                                    <img key={i} src={star} alt="star" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
                <h2 className="text-heading py-12 ">All Menu</h2>
                {isLoading ? (
                    <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        {menu.map((item) => (
                            <div key={item._id}>
                                <div className="p-2">
                                    <div className="w-auto sm:w-[450px] h-[300px] ">
                                        <img src={item.PhotoUrl} alt="menu" className="w-full h-full object-cover rounded-t-lg " />
                                    </div>
                                    <div className="w-auto sm:w-[450px] h-[250px] rounded-b-lg bg-white border border-[#ddd] border-dotted p-4 
                                    flex flex-col justify-between " >
                                        <div>
                                            <div className="flex justify-between pt-5 mb-3">
                                                <h4 className="text-lg font-bold text-c-sec">{item.foodName}</h4>
                                                <p className="text-xs text-c-sec">Sale -30%</p>
                                            </div>
                                            <p className="text-sm text-black/70">{item.details} .</p>
                                            <hr className="border border-dashed text-[#0000001a] mt-3 " />
                                        </div>

                                        <div className="flex justify-between pt-5">
                                            <p>Price:<span>&{item.price}</span></p>
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
                        ))}

                    </div>
                )}
                {/* card */}
                {/* <div className="p-2">
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
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;