import React from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, Heart, Sparkles } from 'lucide-react';

const Book = () => {
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
              Sacred Living: A Modern Guide to Quranic Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Pre-order now and discover the timeless wisdom of Quranic products
              adapted for contemporary life.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white text-sand-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-sand-50 transition-colors"
            >
              Pre-order Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] bg-sand-200 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2072&auto=format&fit=crop"
                  alt="Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif text-sand-900">About the Book</h2>
              <p className="text-sand-600">
                "Sacred Living" is a comprehensive guide that bridges ancient wisdom with modern
                lifestyle. This book explores the profound benefits of products mentioned in
                the Quran and how to incorporate them into your daily routine.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="h-6 w-6 text-sand-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-sand-900">Comprehensive Guide</h3>
                    <p className="text-sand-600">
                      Detailed information about each product's benefits, uses, and spiritual significance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-sand-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-sand-900">Modern Applications</h3>
                    <p className="text-sand-600">
                      Practical ways to incorporate these blessed products into your daily life
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="h-6 w-6 text-sand-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-sand-900">Recipes & Remedies</h3>
                    <p className="text-sand-600">
                      Collection of traditional and modern recipes for health and wellness
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pre-order Benefits */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-sand-900 mb-4">
              Pre-order Benefits
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              Be among the first to receive this transformative guide and enjoy exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Early Bird Discount',
                description: '20% off the regular price when you pre-order',
              },
              {
                title: 'Exclusive Content',
                description: 'Access to digital bonus chapters and recipes',
              },
              {
                title: 'Author Q&A Session',
                description: 'Invitation to exclusive online Q&A session',
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

      {/* Pre-order CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand-900 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-serif text-white mb-6">
              Reserve Your Copy Today
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Pre-order now and be among the first to discover the transformative power
              of Quranic products in your daily life.
            </p>
            <button className="bg-white text-sand-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-sand-50 transition-colors">
              Pre-order for $29.99
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;