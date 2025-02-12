import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-[#00040F] px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-2xl shadow-2xl text-white">
        <h2 className="text-4xl font-bold text-center mb-6 text-secondary">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Phone:</p>
              <p className="text-xl text-secondary">+91 9313660144</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Email:</p>
              <p className="text-xl text-secondary">krinergynavsari@gmail.com</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Address:</p>
              <p className="text-xl text-secondary">
                Meet Complex, 1st Floor, Shop No. 10,<br />
                Prajapati Wadi, Vijalpore, Navsari.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-900 text-white outline-none border-2 border-transparent focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-900 text-white outline-none border-2 border-transparent focus:border-secondary"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-900 text-white outline-none border-2 border-transparent focus:border-secondary"
            ></textarea>
            <button className="w-full py-3 text-lg bg-secondary text-black font-bold rounded-lg shadow-lg hover:bg-white hover:text-secondary transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
