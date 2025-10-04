const PopularBlog = () => {
    return (
        <div className="flex-center bg-[#1c1a2c] blog-images-home mt-m">
            <div className="max-w-[1500px] h-auto lg:h-[700px] mx-auto flex flex-col lg:flex-row justify-between text-white/90 ">
                
                {/* Left Side */}
                <div className="w-full lg:w-[60vw] h-full flex flex-col justify-end pb-5 pt-12 pl-5 lg:pl-0 lg:pt-0 lg:pb-16">
                    <div className="max-w-[80%]">
                        <p className="text-4xl font-bold text-yellow-500">66</p>
                        <p className="italic mt-4 leading-relaxed text-white">
                            🌸 বিয়ে, গায়ে হলুদ কিংবা জন্মদিন — বিশেষ দিন হোক আরও স্মরণীয়! আমন্ত্রণ রইলো আপনাকে Ghuri Rooftop - ঘুড়ি রুফটপ-এ, শান্তিনগরের কেন্দ্রস্থলে সবুজে ঘেরা এক মনোমুগ্ধকর ভেন্যুতে।  
                            ✨ ১৪০+ অতিথি ধারণ ক্ষমতা  
                            🌿 সবুজ ছাদবাগান ও মনোরম ইনডোর  
                            🍽️ অথেন্টিক খাবার ও কাস্টমাইজড মেনু  
                            🎉 আড়ম্বরপূর্ণ পরিবেশ ও ব্যক্তিগত স্পর্শ  
                            Ghuri Rooftop-এ উদযাপন করুন আপনার জীবনের সবচেয়ে স্পেশাল মুহূর্ত, যেখানে প্রত্যাশা ছাড়িয়ে পাবেন আরও অনেক কিছু।
                        </p>
                        <p className="mt-6 font-semibold text-yellow-500 uppercase tracking-wide">
                            Kevin Kowalsky - Head Chef
                        </p>
                        <p className="mt-2 text-sm font-signature">Signature Dishes</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 bg-[#1c1a2c] flex flex-col items-center justify-center px-6 lg:px-16 py-5 lg:py-0 text-center">
                    <p className="text-yellow-500 italic mb-2">Our Latest Events</p>
                    <h2 className="text-4xl font-bold mb-2">
                        Upcoming Celebrations <span className="text-yellow-500">&</span> News
                    </h2>
                    <div className="w-16 h-[2px] bg-yellow-500 my-4"></div>

                    {/* Events Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-10">
                        {/* Event 1 */}
                        <div className="flex-1">
                            <h3 className="text-yellow-500 font-semibold text-lg">Special Occasions at Ghuri Rooftop</h3>
                            <p className="text-sm text-gray-300 mb-2">May 2025</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                🌸 বিয়ে, গায়ে হলুদ কিংবা জন্মদিন — বিশেষ দিন হোক আরও স্মরণীয়!  
                                📞 বিস্তারিত জানতে বা বুকিং করতে এখনই কল করুন: +880 16 1143 2682
                            </p>
                        </div>

                        {/* Event 2 */}
                        <div className="flex-1">
                            <h3 className="text-yellow-500 font-semibold text-lg">Celebrate Life’s Special Moments</h3>
                            <p className="text-sm text-gray-300 mb-2">June 2025</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                🌸 উদযাপন করুন আপনার জীবনের সবচেয়ে স্পেশাল মুহূর্ত Ghuri Rooftop-এ।  
                                ✨ ১৪০+ অতিথি ধারণ ক্ষমতা, 🌿 সবুজ ছাদবাগান, 🍽️ কাস্টমাইজড মেনু ও 🎉 আড়ম্বরপূর্ণ পরিবেশ।  
                                📞 বিস্তারিত জানতে বা বুকিং করতে এখনই কল করুন: +880 16 1143 2682
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
