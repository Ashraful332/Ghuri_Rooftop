

const Map = () => {
    return (
        <div>
            <div className="bg-primary flex flex-col lg:flex-row gap-6 justify-center mx-auto mb-h p-6 w-full max-w-[1200px] h-auto rounded-lg">

                {/* Address Card */}
                <div className="bg-primary2 p-6 w-[100%] lg:w-[300px] h-auto rounded-lg text-white flex flex-col justify-center items-center text-center">
                    <h5 className="text-c-sec text-lg md:text-xl mb-2">Dhaka Bangladesh</h5>
                    <p className="text-sm mt-1">Dhaka-1000, Bangladesh</p>
                    <p className="text-sm mt-1">+8801611-432682</p>
                    <p className="text-sm mt-1">ghurirooptop@gmail.com</p>
                </div>

                {/* Google Map */}
                <div className="w-full flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.768603804184!2d90.41051449414138!3d23.740063634447246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ef8d9ece25%3A0x205c54bdd873be7c!2sGhuri%20rooftop!5e0!3m2!1sen!2sbd!4v1759564424948!5m2!1sen!2sbd"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[300px] sm:h-[400px] rounded-xl border-0"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Map;