import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Testimonial Content */}
          <div className="flex-1 text-center lg:text-left">
            <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed mb-6">
              "J'adore Juma Restaurant parce qu'il nous permet de montrer mes
              plats de la façon dont nous réduisons notre empreinte
              environnementale. J'adore m'impliquer dans la sélection
              de nos produits et la façon dont nous pouvons réduire
              les déchets. Chaque commande est une source de fierté, et le
              voyage est extraordinaire!"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <p className="text-white font-semibold">Marie Dubois</p>
                <p className="text-orange-100 text-sm">Chef Exécutive</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center lg:justify-start space-x-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>

          {/* Chef Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
                alt="Chef Marie Dubois"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;