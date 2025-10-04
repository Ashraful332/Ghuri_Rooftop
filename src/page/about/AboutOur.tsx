

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
                            Welcome to Ghuri Rooftop (ঘুড়ি রুফটপ) — a serene escape in the heart of Dhaka where delicious food meets breathtaking city views.
                            Located at Holding No. 122, Lift 09, Mokka Eye Hospital, Bir Uttam Samsul Alam Road, beside Bailey Road and Habibullah Bahar University College, Shantinagar, Dhaka-1000, Ghuri Rooftop offers a cozy, elegant rooftop experience for families, friends, and food lovers.

                            At Ghuri Rooftop, we believe food is not just a meal — it,s a memory. Our menu is thoughtfully crafted with a blend of Bangladeshi favorites, continental classics, and fusion delights, ensuring every bite brings joy and satisfaction.

                            Whether you,re here for a romantic dinner under the stars, a fun hangout with friends, or a family celebration, Ghuri Rooftop promises a warm ambiance, exceptional service, and unforgettable flavors.

                            Come, feel the breeze, enjoy the view, and let your moments take flight — just like a “Ghuri” (kite) in the open sky.                        </p>
                        <button className="btn-sec mt-5 lg:mt-8 mb-12 lg:mb-0">Read more About us</button>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src="https://i.ibb.co.com/zhmzZvZP/544852594-122139329312649673-5418584895196949075-n.jpg" alt="image" className=" w-full lg:w-[500px] xl:w-[614px] h-[250px] xl:h-[400px] rounded-lg object-cover " />
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