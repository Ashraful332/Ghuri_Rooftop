

const Map = () => {
    return (
        <div>
            <div className="bg-primary flex flex-col lg:flex-row gap-6 justify-center mx-auto mb-h p-6 w-full max-w-[1200px] h-auto rounded-lg">

                {/* Address Card */}
                <div className="bg-primary2 p-6 w-[100%] lg:w-[300px] h-auto rounded-lg text-white flex flex-col justify-center items-center text-center">
                    <h5 className="text-c-sec text-lg md:text-xl mb-2">Dhaka Bangladesh</h5>
                    <p className="text-sm mt-1">BD 27TH Brooklyn N</p>
                    <p className="text-sm mt-1">+8801756412322</p>
                    <p className="text-sm mt-1">yourmail@domain.com</p>
                </div>

                {/* Google Map */}
                <div className="w-full flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74216.90276894011!2d90.554368!3d23.6847104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1759304234877!5m2!1sen!2sbd"
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