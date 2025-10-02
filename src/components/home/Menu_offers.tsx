import "./home.css";

const Menu_offers = () => {
  return (
    <div className="offers-images relative flex items-center justify-center pb-h bg-black/60">
      <div className="max-w-[1500px] w-full flex flex-col md:flex-row text-white pt-low px-6">
        {/* Left Side */}
        <div className="w-auto md:w-[35%] pr-12">
          <h2 className="text-sm text-c-sec font-bold italic mb-2">
            Special menu offers.
          </h2>
          <p className="text-4xl font-bold leading-snug mb-4">
            Enjoy Restaurants <br /> Specialties
          </p>
          <p className="text-sm text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            pulvinar neque. Nulla finibus lobortis pulvinar.
          </p>
          <button className="btn-primary mb-5 md:mb-0">
            View Full Menu
          </button>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-white/30 mx-8 hidden md:flex"></div>

        {/* Right Side */}
        <div className="flex flex-col gap-6 w-auto md:w-[55%]">
          {[
            { no: "01.", name: "Soft shell crab", price: "$29" },
            { no: "02.", name: "Victoria's Filet Mignon", price: "$49" },
            { no: "03.", name: "Salmon Riverland", price: "$12" },
            { no: "04.", name: "Prime Cuts of Beef", price: "$107" },
            { no: "05.", name: "Miso chicken", price: "$46" },
          ].map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <p className="text-c-sec font-semibold">{item.no}</p>
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="font-semibold text-lg whitespace-nowrap">
                    {item.name}
                  </p>
                  <div className="flex-1 border-b border-dotted border-white/40 mx-4"></div>
                  <p className="text-c-sec font-semibold">{item.price}</p>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Granny help you treat yourself with a different meal everyday
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu_offers;
