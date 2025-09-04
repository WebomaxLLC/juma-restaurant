import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Rue Saint-Honoré<br />
                  75001 Paris, France
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">contact@jumarestaurant.fr</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#accueil" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Accueil
              </a>
              <a href="#menu" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Menu
              </a>
              <a href="#apropos" className="text-gray-600 hover:text-emerald-600 transition-colors">
                À propos
              </a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contact
              </a>
              <a href="#reservations" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Réservations
              </a>
            </nav>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Menu</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#petit-dejeuner" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Petit-déjeuner
              </a>
              <a href="#dejeuner" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Déjeuner
              </a>
              <a href="#diner" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Dîner
              </a>
              <a href="#boissons" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Boissons
              </a>
              <a href="#desserts" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Desserts
              </a>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Suivez-nous</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 Juma Restaurant. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Guide d'accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;