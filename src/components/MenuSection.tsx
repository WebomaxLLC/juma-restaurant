import React from 'react';
import MenuItem from './MenuItem';

interface MenuItemData {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItemData[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">{title}</h2>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>

        {/* Book a Table Button */}
        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
            Réserver une Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;