import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div className="min-h-screen bg-sand-50 pt-24 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-sand-50 pt-24 flex items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-sand-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-sand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-white mb-6"
            >
              Sacred Products for Modern Living
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Discover our curated collection of products mentioned in the Quran,
              each chosen for their unique benefits and spiritual significance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image_url})` }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium text-sand-900">{product.name}</h3>
                    <span className="text-lg font-medium text-sand-900"></span> {/* Ajoute un champ "price" dans la base de données si nécessaire */}
                  </div>
                  <p className="text-sand-600 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-sand-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-sand-600 flex items-center">
                          <Star className="h-4 w-4 text-sand-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-sand-900 text-white px-4 py-2 rounded-md font-medium hover:bg-sand-800 transition-colors flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-sand-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              Each product is carefully selected and sourced to ensure the highest quality
              and authenticity, following the guidance of Islamic traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity Guaranteed',
                description: 'Every product is sourced from trusted suppliers who follow Islamic principles.',
              },
              {
                title: 'Natural & Pure',
                description: 'We ensure our products are free from harmful additives and preservatives.',
              },
              {
                title: 'Spiritual Connection',
                description: 'Each product comes with guidance on its spiritual significance and traditional uses.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center"
              >
                <Star className="h-8 w-8 text-sand-900 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-sand-900 mb-2">{benefit.title}</h3>
                <p className="text-sand-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;