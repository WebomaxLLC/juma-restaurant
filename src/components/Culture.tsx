import React from 'react';

const Culture = () => {
  const cultureImages = [
    "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg",
    "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    "https://images.pexels.com/photos/1907643/pexels-photo-1907643.jpeg"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Notre Culture</h2>
        </div>

        {/* Culture Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {cultureImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Culture image ${index + 1}`}
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

export default Culture;