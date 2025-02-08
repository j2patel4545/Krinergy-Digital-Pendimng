import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Static Website", price: "₹20,000", desc: "A simple yet elegant static website." },
  { title: "Dynamic Website", price: "₹30,000", desc: "Fully functional dynamic website with backend." },
  { title: "App Development", price: "Custom Pricing", desc: "Mobile and web app development solutions." },
  { title: "Computer Repairing", price: "Custom Pricing", desc: "Get your system fixed with expert assistance." },
];

const ServiceSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#00040F] text-white p-10">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Our Services
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-lg font-bold text-secondary mb-2">{service.price}</p>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
