import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const handleJoinJourney = () => {
    // Redirige l'utilisateur vers une page spécifique (par exemple, la page d'inscription)
    window.location.href = '/Book'; // Remplace '/register' par la route souhaitée
  };
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Book', href: '/book' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-sand-800" />
              <span className="ml-2 text-xl font-serif text-sand-900">Islamic Lifestyle</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sand-600 hover:text-sand-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-sand-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sand-800 transition-colors"
            onClick={handleJoinJourney}
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sand-600 hover:text-sand-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sand-600 hover:text-sand-900 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-sand-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sand-800 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;