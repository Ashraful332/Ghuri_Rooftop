import { Link } from "react-router";

const Reservation = () => {
    return (
        <div className="reservation-main h-auto lg:h-[600px] flex-center px-4 py-5">
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 md:gap-8 justify-center items-center">

                {/* Card 1 */}
                <div className="w-full sm:w-[300px] xl:w-[400px] min-h-[400px] lg:h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl 
                border-[1.2px] border-[#fafafa1c] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-c-sec italic">Delicious Flavors from Italy</p>
                    <h5 className="text-2xl md:text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-white/80 text-sm mt-4">
                        Enjoy authentic pizzas, pastas, and Italian specialties crafted with fresh ingredients for a delightful dining experience.
                    </p>
                    <Link to='/reservation'>
                        <button className="btn-primary mt-12">RESERVATION</button>
                    </Link>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[300px] xl:w-[400px] min-h-[400px] lg:h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl 
                border-[1.2px] border-[#fafafa1c] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-c-sec italic">Fresh Ingredients Daily</p>
                    <h5 className="text-2xl md:text-3xl text-white">Healthy & Tasty</h5>
                    <p className="text-white/80 text-sm mt-4">
                        Our chefs use only the freshest produce and premium ingredients to ensure every dish is packed with flavor and nutrition.
                    </p>
                    <Link to='/reservation'>
                        <button className="btn-primary mt-12">RESERVATION</button>
                    </Link>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[300px] xl:w-[400px] min-h-[400px] lg:h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl 
                border-[1.2px] border-[#fafafa1c] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-c-sec italic">Cozy Rooftop Dining</p>
                    <h5 className="text-2xl md:text-3xl text-white">Relax & Enjoy</h5>
                    <p className="text-white/80 text-sm mt-4">
                        Experience our beautiful rooftop ambiance while savoring your favorite dishes with friends and family at Ghuri Rooftop.
                    </p>
                    <Link to='/reservation'>
                        <button className="btn-primary mt-12">RESERVATION</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Reservation;
