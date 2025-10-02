import redytabil from "../../assets/image/redytabil.jpg";
import picake from "../../assets/image/piecake.jpg";
import itemsmenu from "../../assets/image/menuitems.jpg";
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
                           <span className="text-2xl text-c-sec">Q</span> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ut enim ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                        </p>
                        <p className="text-sm text-black/70 mt-2">
                            Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta facilisis. Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna.
                        </p>
                        <button className="btn-sec mt-8 ">Read more About us</button>
                    </div>
                    <div className="relative">
                        <div className="mt-12 lg:mt-0">
                            <img src={redytabil} alt="image" className="w-[100%] lg:w-[400px] xl:w-[614px] h-[250px] xl:h-[400px] rounded-lg object-cover" />
                        </div>
                        <div className="absolute z-20 hidden lg:flex bottom-30 xl:-bottom-10 -left-20 border border-dotted border-[#ddd] p-4 bg-[#ffffff15] backdrop-blur-[1.3px] rounded-2xl ">
                            <img src={picake} alt="image" className="w-[166px] h-[110px] rounded-lg " />
                        </div>
                        <div className="absolute z-20 hidden lg:flex -top-10 -right-20 border border-dotted border-[#ddd] p-4 bg-[#ffffff15] backdrop-blur-[1.3px] rounded-2xl ">
                            <img src={itemsmenu} alt="image" className="w-[232px] h-[154px] rounded-lg " />
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
