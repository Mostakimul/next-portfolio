'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useState, useTransition } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const result = await sendEmail(name, email, message);
      if (result.success) {
        setStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send email.');
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto text-gray-900 p-4 bg-gray-700 shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-50 mb-2">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-50 mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-50 mb-2">
            Message*
          </label>
          <textarea
            id="message"
            rows={8}
            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:from-purple-500 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send'}
        </button>
        {status && <p className="mt-4 text-white">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
