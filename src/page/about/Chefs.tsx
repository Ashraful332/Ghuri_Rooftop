import CornBig from "../../assets/icon/wheat.svg";

const Chefs = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] p-6 rounded-md border-[1.5px] border-[#ddd] border-dotted ">
                <div className="bg-white p-6 rounded-xl border-[1.5px] border-[#ddd] border-dotted flex flex-col items-center gap-5 ">
                    <p className="text-c-sec italic text-center">Enjoy your time in our Restaurant with pleasure.</p>
                    <h3 className="text-heading text-black">Meet Our Chef's</h3>
                    <img src={CornBig} alt="icon" className="w-[42px] h-[42px] " />
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <div>
                            <div className="w-auto sm:w-[430px] h-[380px]  ">
                                <img src="https://i.ibb.co.com/WdGLrsV/6371d01163d653e97e91b571-Rectangle-83.png" alt="chefs"
                                    className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="w-auto sm:w-[430px] h-[220px] border border-[#ddd] border-dotted mt-2 rounded-xl p-6">
                                <h4 className="text-c-sec font-bold text-xl">Chef Arif Hossain</h4>
                                <p className="text-sm font-light mt-[2px] mb-3">Master chef in Dhaka</p>
                                <hr className="text-c-sec" />
                                <p className="text-xs mt-4">
                                    Arif specializes in Bangladeshi and continental cuisine with 10+ years of experience creating flavorful dishes with passion.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-auto sm:w-[430px] h-[380px]  ">
                                <img src="https://i.ibb.co.com/WdGLrsV/6371d01163d653e97e91b571-Rectangle-83.png" alt="chefs"
                                    className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="w-auto sm:w-[430px] h-[220px] border border-[#ddd] border-dotted mt-2 rounded-xl p-6">
                                <h4 className="text-c-sec font-bold text-xl">Chef Sohana Rahman</h4>
                                <p className="text-sm font-light mt-[2px] mb-3">Pastry & Dessert Expert</p>
                                <hr className="text-c-sec" />
                                <p className="text-xs mt-4">
                                    Sohana brings sweetness to every dish, crafting exquisite desserts and pastries with creativity and finesse for memorable dining experiences.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-auto sm:w-[430px] h-[380px]  ">
                                <img src="https://i.ibb.co.com/WdGLrsV/6371d01163d653e97e91b571-Rectangle-83.png" alt="chefs"
                                    className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="w-auto sm:w-[430px] h-[220px] border border-[#ddd] border-dotted mt-2 rounded-xl p-6">
                                <h4 className="text-c-sec font-bold text-xl">Chef Tanvir Ahmed</h4>
                                <p className="text-sm font-light mt-[2px] mb-3">Grill & Fusion Specialist</p>
                                <hr className="text-c-sec" />
                                <p className="text-xs mt-4">
                                    Tanvir is an expert in grilled and fusion dishes, blending flavors from around the world to create innovative and mouth-watering meals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={CornBig} alt="icon" className="w-[42px] h-[42px] " />
                    <button className="btn-sec">Get In touch With Us</button>
                </div>
            </div>
        </section>
    );
};

export default Chefs;
