import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-sand-800" />
              <span className="ml-2 text-xl font-serif text-sand-900">Quranic Living</span>
            </Link>
            <p className="text-sand-600 text-sm">
              Discover the timeless benefits of Quranic products, crafted for modern life.
            </p>
            <a href="#" className="text-sand-600 hover:text-sand-900">
                <Twitter className="h-5 w-5" />
              </a>
            <div className="flex space-x-4">
              <a href="#" className="text-sand-600 hover:text-sand-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-sand-600 hover:text-sand-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sand-600 hover:text-sand-900">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sand-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sand-600 hover:text-sand-900 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sand-600 hover:text-sand-900 text-sm">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-sand-600 hover:text-sand-900 text-sm">
                  Book
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sand-600 hover:text-sand-900 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sand-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sand-600 hover:text-sand-900 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sand-600 hover:text-sand-900 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sand-600 hover:text-sand-900 text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sand-600 hover:text-sand-900 text-sm">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sand-900 mb-4">Newsletter</h3>
            <p className="text-sand-600 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-sand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sand-500"
              />
              <button
                type="submit"
                className="w-full bg-sand-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sand-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sand-200">
          <p className="text-sand-600 text-sm text-center">
            © {new Date().getFullYear()} Quranic Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;