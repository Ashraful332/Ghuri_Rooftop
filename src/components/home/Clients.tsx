const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ashraful",
      img: "https://i.ibb.co.com/Zzm09Wcf/ashraful.png",
      rating: 4,
      text: `"Ghuri Rooftop offers a wonderful dining experience! The food is fresh and flavorful, and the rooftop view makes every meal feel special. Highly recommended for family dinners and casual outings."`,
      source: "VIA FOOD STANDARDS",
    },
    {
      id: 2,
      name: "Kalimuddin",
      img: "https://i.ibb.co.com/39nXC3P7/ho.jpg",
      rating: 5,
      text: `"Amazing ambiance and delicious dishes! The staff is friendly and attentive, and the rooftop setting is perfect for evening gatherings. Will definitely come back for more!"`,
      source: "VIA MICHLEIN.COM",
    },
    {
      id: 3,
      name: "Billul Miya",
      img: "https://i.ibb.co.com/BVJx3sT1/images.webp",
      rating: 5,
      text: `"A must-visit rooftop restaurant in Dhaka. The fusion dishes are unique, the presentation is beautiful, and the overall experience is memorable. Excellent service and cozy atmosphere!"`,
      source: "VIA TRIPADVISOR",
    },
];


  return (
    <div className="py-20 bg-white text-center">
      {/* Subtitle */}
      <p className="text-yellow-600 italic">
        Enjoy your time in our Restaurant with pleasure.
      </p>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Testimonials <span className="text-c-sec">& Clients</span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((client) => (
          <div
            key={client.id}
            className="relative bg-white border rounded-lg shadow-sm p-8 pt-14"
          >
            {/* Profile Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={client.img}
                alt={client.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            {/* Name */}
            <h4 className="mt-6 font-semibold text-lg">{client.name}</h4>

            {/* Stars */}
            <div className="flex justify-center my-3">
              {Array(client.rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
            </div>

            {/* Quote Text */}
            <p className="text-gray-500 italic mb-4">{client.text}</p>

            {/* Source */}
            <p className="text-yellow-700 font-semibold uppercase text-sm">
              {client.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
