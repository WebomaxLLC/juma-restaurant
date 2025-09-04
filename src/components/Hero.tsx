import React from 'react';

const Hero = () => {
  const heroImages = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  ];

  return (
    <section id="accueil" className="bg-gradient-to-b from-orange-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Savourez de délicieux plats au
            <br />
            Restaurant Juma
          </h1>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Plat délicieux ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
