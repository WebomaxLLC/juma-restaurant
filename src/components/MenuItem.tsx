import React from 'react';

interface MenuItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ image, title, description, price }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
        loading="lazy"
      />
      <div className="flex-grow">
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="text-lg font-bold text-emerald-600 flex-shrink-0">
        {price}
      </div>
    </div>
  );
};

export default MenuItem;