import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import Book from './pages/Book';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

console.log('App component loaded'); // Ajoute ce log

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sand-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/book" element={<Book />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;