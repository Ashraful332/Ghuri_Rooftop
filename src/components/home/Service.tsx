import redytabil from "../../assets/image/redytabil.jpg";
import picake from "../../assets/image/piecake.jpg";
import itemsmenu from "../../assets/image/menuitems.jpg";
import CornBig from "../../assets/icon/wheat.svg";


const Service = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] p-2 md:p-6 rounded-md border-[1.5px] border-[#ddd] border-dashed ">
                <div className="bg-white p-2 md:p-6 rounded-xl border-[1.5px] border-[#ddd] border-dashed flex flex-col items-center gap-5 ">
                    <p className="text-c-sec italic">Why people choose us</p>
                    <h3 className="text-heading">Prepare For First Class Service</h3>
                    <img src={CornBig} alt="icon" className="w-[42px] h-[42px] " />
                    <div className="flex flex-col xl:flex-row items-center gap-5">
                        <div className="relative w-auto sm:w-[400px] h-[300px] shadow-sm rounded-lg overflow-hidden">
                            {/* Image Background */}
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src="https://i.ibb.co.com/Hpr9Fc7w/549634604-122140647170649673-3110428728664593221-n.jpg"
                                alt="Shoes"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                            {/* Center Dashed Border */}
                            <div className="absolute inset-0 top-2 left-2 border border-dashed border-[#ddddddaf] w-[95%] h-[95%] rounded-md  "></div>


                            {/* Card Body */}
                            <div className="relative p-6 flex flex-col items-center justify-center h-full text-white">
                                <h2 className="text-xl font-bold mb-2">Dally New fresh menus</h2>
                                <p className="">
                                    Start eating batter
                                </p>
                                <p>01.</p>
                            </div>
                        </div>
                        <div className="relative  w-auto sm:w-[400px] h-[300px] shadow-sm rounded-lg overflow-hidden">
                            {/* Image Background */}
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src="https://i.ibb.co.com/nMn4484t/555808304-122141250812649673-769316797427754976-n.jpg"
                                alt="Shoes"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="absolute inset-0 top-2 left-2 border border-dashed border-[#ddddddaf] w-[95%] h-[95%] rounded-md  "></div>

                            {/* Card Body */}
                            <div className="relative p-6 flex flex-col items-center justify-center h-full text-white">
                                <h2 className="text-xl font-bold mb-2">Dally New fresh menus</h2>
                                <p className="">
                                    Start eating batter
                                </p>
                                <p>02.</p>
                            </div>
                        </div>
                        <div className="relative  w-auto sm:w-[400px] h-[300px] shadow-sm rounded-lg overflow-hidden">
                            {/* Image Background */}
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src="https://i.ibb.co.com/TBhj6Gtf/555932784-122141467376649673-3223529756217180588-n.jpg"
                                alt="Shoes"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="absolute inset-0 top-2 left-2 border border-dashed border-[#ddddddaf] w-[95%] h-[95%] rounded-md  "></div>

                            {/* Card Body */}
                            <div className="relative p-6 flex flex-col items-center justify-center h-full text-white">
                                <h2 className="text-xl font-bold mb-2">Dally New fresh menus</h2>
                                <p className="">
                                    Start eating batter
                                </p>
                                <p>03.</p>
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

export default Service;

