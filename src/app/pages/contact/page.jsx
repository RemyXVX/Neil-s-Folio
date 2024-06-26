'use client'
import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        e.target, 
        EMAILJS_PUBLIC_KEY
      );
      toast.success('Email sent successfully!');
      e.target.reset();
    } catch (error) {
      toast.error('Email failed to send. Please try again later.');
    }
  };

  return (
    <div 
      className="flex justify-center items-center rounded-t-zl"
      id="contact"
      >
      <div className="container mx-auto py-6">
        <div className="rounded-lg shadow-lg">
          <header className="bg-gray-800 rounded-t-xl text-white text-center py-4">
            <h1 className="text-3xl font-semibold lg:6xl">Contact Me</h1>
          </header>
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-md font-semibold text-gray-700">Name:</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your name" autoComplete="off" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-md font-semibold text-gray-700">Email:</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email" autoComplete="off" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-md font-semibold text-gray-700">Message:</label>
              <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your message" rows="5" autoComplete="off" required></textarea>
            </div>
            <button type="submit" className="block w-full bg-blue-400 text-white font-semibold lg:text-lg py-3 px-6 rounded-md hover:bg-blue-600">Send</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;