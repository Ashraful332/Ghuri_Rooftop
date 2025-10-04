import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./home.css";

const Menu_offers = () => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      if (img) gsap.set(img, { opacity: 0, x: 50 });
    });
  }, []);

  const handleHover = (index: number, show: boolean) => {
    const img = imgRefs.current[index];
    if (!img) return;

    gsap.to(img, {
      opacity: show ? 1 : 0,
      x: show ? 0 : 50,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const menuItems = [
    {
      no: "01.",
      name: "Soft shell crab",
      price: "$29",
      image:
        "https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg",
    },
    {
      no: "02.",
      name: "Victoria's Filet Mignon",
      price: "$49",
      image:
        "https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg",
    },
    {
      no: "03.",
      name: "Salmon Riverland",
      price: "$12",
      image:
        "https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg",
    },
    {
      no: "04.",
      name: "Prime Cuts of Beef",
      price: "$107",
      image:
        "https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg",
    },
    {
      no: "05.",
      name: "Miso chicken",
      price: "$46",
      image:
        "https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg",
    },
  ];

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
          <button className="btn-primary mb-5 md:mb-0">View Full Menu</button>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-white/30 mx-8 hidden md:flex"></div>

        {/* Right Side */}
        <div className="flex flex-col gap-6 w-auto md:w-[55%] relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 items-start relative cursor-pointer group"
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <p className="text-c-sec font-semibold">{item.no}</p>
              <div className="flex-1">
                <div className="flex items-center relative">
                  <p className="font-semibold text-lg whitespace-nowrap">
                    {item.name}
                  </p>
                  <div className="flex-1 border-b border-dotted border-white/40 mx-4"></div>
                  {/* Price */}
                  <p className="text-c-sec font-semibold relative z-10">
                    {item.price}
                  </p>

                  {/* Floating image (Right side, hidden on mobile) */}
                  <img
                    ref={(el) => (imgRefs.current[index] = el)}
                    src={item.image}
                    alt={item.name}
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 rounded-lg object-cover shadow-lg pointer-events-none"
                  />
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


// import "./home.css";

// const Menu_offers = () => {
//   return (
//     <div className="offers-images relative flex items-center justify-center pb-h bg-black/60">
//       <div className="max-w-[1500px] w-full flex flex-col md:flex-row text-white pt-low px-6">
//         {/* Left Side */}
//         <div className="w-auto md:w-[35%] pr-12">
//           <h2 className="text-sm text-c-sec font-bold italic mb-2">
//             Special menu offers.
//           </h2>
//           <p className="text-4xl font-bold leading-snug mb-4">
//             Enjoy Restaurants <br /> Specialties
//           </p>
//           <p className="text-sm text-gray-300 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
//             pulvinar neque. Nulla finibus lobortis pulvinar.
//           </p>
//           <button className="btn-primary mb-5 md:mb-0">
//             View Full Menu
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="w-[1px] bg-white/30 mx-8 hidden md:flex"></div>

//         {/* Right Side */}
//         <div className="flex flex-col gap-6 w-auto md:w-[55%]">
//           {[
//             { no: "01.", name: "Soft shell crab", price: "$29", image:"https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg" },
//             { no: "02.", name: "Victoria's Filet Mignon", price: "$49", image:"https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg" },
//             { no: "03.", name: "Salmon Riverland", price: "$12", image:"https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg" },
//             { no: "04.", name: "Prime Cuts of Beef", price: "$107", image:"https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg" },
//             { no: "05.", name: "Miso chicken", price: "$46", image:"https://i.ibb.co.com/35Sxn5vP/556526212-122141251652649673-257610486915405577-n.jpg" },
//           ].map((item, index) => (
//             <div key={index} className="flex gap-6 items-start">
//               <p className="text-c-sec font-semibold">{item.no}</p>
//               <div className="flex-1">
//                 <div className="flex items-center">
//                   <p className="font-semibold text-lg whitespace-nowrap">
//                     {item.name}
//                   </p>
//                   <div className="flex-1 border-b border-dotted border-white/40 mx-4"></div>
//                   <p className="text-c-sec font-semibold">{item.price}</p>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-1">
//                   Granny help you treat yourself with a different meal everyday
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu_offers;
