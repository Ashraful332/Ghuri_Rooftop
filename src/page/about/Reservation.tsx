const Reservation = () => {
    return (
        <div className="reservation-main h-auto lg:h-[600px] flex-center px-4 py-5 ">
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 md:gap-8 justify-center items-center">
                
                {/* Card 1 */}
                <div className="w-full sm:w-[300px] xl:w-[400px] min-h-[400px] lg:h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl 
                border-[1.2px] border-[#fafafa1c] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-c-sec italic">Pizza, Pasta and More</p>
                    <h5 className="text-2xl md:text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-white/80 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn-primary mt-12">Read more</button>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[300px] xl:w-[400px] min-h-[400px] lg:h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl 
                border-[1.2px] border-[#fafafa1c] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-c-sec italic">Pizza, Pasta and More</p>
                    <h5 className="text-2xl md:text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-white/80 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn-primary mt-12">Read more</button>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[300px] xl:w-[400px] min-h-[400px] lg:h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl 
                border-[1.2px] border-[#fafafa1c] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-c-sec italic">Pizza, Pasta and More</p>
                    <h5 className="text-2xl md:text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-white/80 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn-primary mt-12">Read more</button>
                </div>

            </div>
        </div>
    );
};

export default Reservation;
