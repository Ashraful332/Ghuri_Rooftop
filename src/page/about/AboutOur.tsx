import redytabil from "../../assets/image/redytabil.jpg";


const AboutOur = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] p-6 rounded-md border-[1.5px] border-[#ddd] border-dotted ">
                <div className="bg-white p-6 rounded-xl border-[1.5px] border-[#ddd] border-dotted flex flex-col lg:flex-row justify-between ">
                    <div className="w-[100%] lg:w-[50%] ">
                        <p className="color-text">Enjoy your time in our Place</p>
                        <h3 className="font-bold text-2xl mt-4 mb-3">About Our Restaurant</h3>
                        <hr className="border border-dashed text-[#ddd] mb-6 " />
                        <p className="text-sm text-black/70">
                           <span className="text-2xl text-c-sec">Q</span> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ut enim ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                        </p>
                        <p className="text-sm text-black/70 mt-2">
                            Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta facilisis. Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna.
                        </p>
                        <button className="btn-sec mt-5 lg:mt-8 mb-12 lg:mb-0">Read more About us</button>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src={redytabil} alt="image" className=" w-full lg:w-[500px] xl:w-[614px] h-[250px] xl:h-[400px] rounded-lg object-cover " />
                        </div>
                        <div className="hidden sm:flex sm:flex-col absolute z-20 bottom-30 xl:-bottom-2 -right-5 xl:-right-20 border border-dotted border-[#ddddddc0] p-4 bg-[#ffffff15] 
                        backdrop-blur-[4.3px] rounded-2xl w-[300px] h-[150px] text-white ">
                            <p className="text-xs font-semibold text-black/80">Your website is fully responsive so visitors can view your content from their choice of device.</p>
                            <p className="text-c-sec font-bold mt-2">Mark Antony</p>
                            <p className="text-sm font-bold text-black xl:text-white">Diamnt CEO</p>
                        </div>
                        {/* mobile starick */}
                        <div className=" sm:hidden border border-dotted border-[#ddddddc0] p-4 bg-primary rounded-2xl w-full mt-5 h-[150px] text-white ">
                            <p className="text-xs font-semibold ">Your website is fully responsive so visitors can view your content from their choice of device.</p>
                            <p className="text-c-sec font-bold mt-2">Mark Antony</p>
                            <p className="text-sm font-bold ">Diamnt CEO</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutOur;