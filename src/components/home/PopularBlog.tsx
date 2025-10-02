const PopularBlog = () => {
    return (
        <div className="flex-center bg-[#1c1a2c] blog-images-home mt-m">
            <div className="max-w-[1500px] h-auto lg:h-[700px] mx-auto flex flex-col lg:flex-row justify-between text-white/90 ">
                {/* Left Side */}
                <div className="w-full lg:w-[60vw] h-full flex flex-col justify-end pb-5 pt-12 pl-5 lg:pl-0 lg:pt-0 lg:pb-16">
                    {/* Overlay Content */}
                    <div className="max-w-[80%]">
                        <p className="text-4xl font-bold text-yellow-500">66</p>
                        <p className="italic mt-4 leading-relaxed text-white">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi accusantium."
                        </p>
                        <p className="mt-6 font-semibold text-yellow-500 uppercase tracking-wide">
                            Kevin Kowalsky - Restaurant's Cheaf
                        </p>
                        <p className="mt-2 text-sm font-signature">Signature</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 bg-[#1c1a2c] flex flex-col items-center justify-center px-6 lg:px-16 py-5 lg:py-0 text-center">
                    <p className="text-yellow-500 italic mb-2">Our Last News</p>
                    <h2 className="text-4xl font-bold mb-2">
                        Upcoming Events <span className="text-yellow-500">&</span> News
                    </h2>
                    <div className="w-16 h-[2px] bg-yellow-500 my-4"></div>

                    {/* Events Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-10">
                        {/* Event 1 */}
                        <div className="flex-1">
                            <h3 className="text-yellow-500 font-semibold text-lg">Jazz Band Live Event</h3>
                            <p className="text-sm text-gray-300 mb-2">25 MAY 2025</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                doloremque laudantium totam rem aperiam.
                            </p>
                        </div>

                        {/* Event 2 */}
                        <div className="flex-1">
                            <h3 className="text-yellow-500 font-semibold text-lg">Wine and Steak Day</h3>
                            <p className="text-sm text-gray-300 mb-2">19 JUNE 2025</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. 
                                Nulla eu mi magna. Etiam suscipit gravida.
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-12">
                        <button className="btn-primary">
                            Read All News
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularBlog;
