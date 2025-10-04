

const Hero = () => {
    return (
        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
            {/* Background Image */}
            <img
                src="https://i.ibb.co.com/21ndRYkh/hero.jpg"
                alt="temp image"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Dark Shader */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            {/* Text & Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                <p className="color-text">
                    Fine Dine Multi Cuisine Restaurant And Aesthetic Environment In Dhaka.
                </p>
                <h1 className="text-hero">
                    Welcome to The Ghuri Rooftop Restaurant
                </h1>
                <button className="btn-primary mt-6">Start Explore</button>
            </div>
        </div>  
    );
};

export default Hero;
