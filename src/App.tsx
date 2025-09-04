import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Culture from './components/Culture';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import { breakfastMenu, lunchMenu, dinnerMenu } from './data/menuData';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MenuSection 
          title="Menu Spécial Petit-déjeuner" 
          items={breakfastMenu} 
        />
        <MenuSection 
          title="Menu Spécial Déjeuner" 
          items={lunchMenu} 
        />
        <MenuSection 
          title="Menu Spécial Dîner" 
          items={dinnerMenu} 
        />
        <Culture />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;