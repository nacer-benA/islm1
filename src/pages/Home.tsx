import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { products, loading, error } = useProducts();

  const handleJoinJourney = () => {
    window.location.href = '/Book';
  };

  if (loading) {
    return <div className="min-h-screen bg-sand-50 pt-24 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-sand-50 pt-24 flex items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-sand-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Discover the Timeless Benefits of Quranic Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Inspired by the Quran, crafted for modern life
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-sand-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-sand-50 transition-colors inline-flex items-center"
            onClick={handleJoinJourney}
          >
            Join Our Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-sand-900 mb-4">Featured Products</h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of products mentioned in the Quran,
              each chosen for their unique benefits and spiritual significance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-sand-50 rounded-lg overflow-hidden"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image_url})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-sand-900 mb-2">{product.name}</h3>
                  <p className="text-sand-600 mb-4">{product.description}</p>
                  <button className="text-sand-900 font-medium inline-flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Star className="h-12 w-12 text-sand-900 mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-sand-900 mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-sand-600 mb-8">
              Subscribe to receive exclusive recipes, spiritual insights, and be the first to
              know about our upcoming book and product launches.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;