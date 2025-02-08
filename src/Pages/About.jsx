import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-[#00040F] pt-32 text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-4">We Complete Every Project With Extra Care As Customer Need</h1>
        <p className="text-lg font-medium">Our Special Functionalities</p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Advanced Caching</h2>
          <p className="text-center">Efficient caching strategies to ensure your website loads faster and performs smoothly.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Unlimited Applications</h2>
          <p className="text-center">Build and scale unlimited applications with ease and flexibility.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">PHP 7 Ready Transfer</h2>
          <p className="text-center">Seamless migration with full support for PHP 7, ensuring smooth transitions and performance.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">PHP Ready Servers</h2>
          <p className="text-center">Dedicated servers optimized for PHP to ensure reliable and fast performance for your website.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">24/7 Free Extra Support</h2>
          <p className="text-center">Get continuous support whenever you need it to ensure your website runs smoothly at all times.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Optimized Stack</h2>
          <p className="text-center">Our stack is optimized to deliver fast, secure, and efficient performance for your website.</p>
        </div>
      </motion.div>

      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-lg mb-8">Our platform takes away the hard process of creating your website, making it easier and faster for you to focus on what really matters.</p>

        <motion.div 
          className="max-w-screen-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Make Your Business More Competitive And Enduring</h3>
          <p className="text-lg mb-4">Our technology will automatically improve cybersecurity, ensuring your business stays safe and competitive in the digital world.</p>
          <p className="text-lg">Details Coming Soon...</p>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">A Community With A Unique Mission</h3>
          <p className="text-lg">Details Coming Soon...</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
        <div className="flex justify-center space-x-8 text-2xl">
          <div className="flex flex-col items-center">
            <p className="text-white text-5xl font-bold">100%</p>
            <p className="text-gray-400">Project Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-5xl font-bold">90%</p>
            <p className="text-gray-400">Design</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-5xl font-bold">100%</p>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-5xl font-bold">80%</p>
            <p className="text-gray-400">Award Win</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
