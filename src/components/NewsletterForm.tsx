import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 border border-sand-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sand-500"
        disabled={status === 'loading'}
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-sand-900 text-white px-6 py-3 rounded-md font-medium hover:bg-sand-800 transition-colors whitespace-nowrap disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
      </button>
      {message && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
}