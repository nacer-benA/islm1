import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif text-sand-900 mb-6">Contact Information</h2>
                <p className="text-sand-600 mb-8">
                  Have questions about our products or services? We're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-sand-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-sand-900">Email</h3>
                    <p className="text-sand-600">info@quranicliving.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-sand-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-sand-900">Phone</h3>
                    <p className="text-sand-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sand-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-sand-900">Address</h3>
                    <p className="text-sand-600">
                      123 Wellness Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-sand-900 mb-2">Business Hours</h3>
                <div className="space-y-2 text-sand-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sand-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sand-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sand-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sand-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sand-900 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-sand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sand-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sand-900 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-sand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sand-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sand-900 text-white px-6 py-3 rounded-md font-medium hover:bg-sand-800 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-sand-900 mb-4">
              Visit Our Store
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              Experience our products in person and meet our knowledgeable team
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual map implementation */}
            <div className="h-96 bg-sand-200 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-sand-900" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;