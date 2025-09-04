import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Juma Restaurant</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#menu" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Menu
            </a>
            <a href="#apropos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-gray-700">
            <Phone size={18} />
            <span className="font-medium">(555) 123-4567</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Accueil
              </a>
              <a href="#menu" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Menu
              </a>
              <a href="#apropos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                À propos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </a>
              <div className="flex items-center space-x-2 text-gray-700 pt-4 border-t">
                <Phone size={18} />
                <span className="font-medium">(555) 123-4567</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;