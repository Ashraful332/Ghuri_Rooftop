const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jannet Dellov",
      img: "https://i.ibb.co.com/GvWGMT4T/Screenshot-20250712-211018.png",
      rating: 4,
      text: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta."`,
      source: "VIA FOOD STANDARDS",
    },
    {
      id: 2,
      name: "Centa Simpson",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta."`,
      source: "VIA MICHLEIN.COM",
    },
    {
      id: 3,
      name: "Nicolo Svensky",
      img: "https://randomuser.me/api/portraits/men/70.jpg",
      rating: 5,
      text: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta."`,
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
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
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
