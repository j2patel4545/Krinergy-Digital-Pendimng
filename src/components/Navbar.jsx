import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { motion } from 'framer-motion'; // ✅ Import framer-motion for smooth animation

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`w-full px-10 h-24 z-10 flex fixed py-6 justify-between items-center navbar transition-transform duration-300 ${
        visible ? 'translate-y-0 backdrop-blur-3xl' : '-translate-y-full bg-none z-50'
      }`}
    >
      {/* Logo Section */}
      <Link to='/'>
        <img src={logo} alt="hoobank" className="h-32 -mb-10" />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-9'>
      <Link className='text-white' to='/'>Home</Link>
        <Link className='text-white' to='/About'>About</Link>
        <Link className='text-white' to='/Contact'>Contact</Link>
        <Link className='text-white' to='/Services'>Services</Link>
        <Link className='text-white' to='/PrivacyPolicy'>Privacy Policy</Link> 
        <Link className='text-white' to='/RefundPolicy'>Refund Policy</Link>
        <Link className='text-white' to='/term'>Terms & Conditions</Link>

      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex overflow-hidden h-screen w-scree text-white  justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* Full-Screen Mobile Menu */}
        <motion.div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-0 right-0 w-full h-full z-50 flex-col justify-center items-center text-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <img
              src={close}
              alt="close"
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>

          {/* Mobile Menu Links */}
          <ul className="list-none flex flex-col justify-center items-center flex-1 space-y-6">
            <motion.li
              className="font-poppins font-normal cursor-pointer text-[24px] text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <Link to='/About'>About</Link>
            </motion.li>
            <motion.li
              className="font-poppins font-normal cursor-pointer text-[24px] text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link to='/Contact'>Contact</Link>
            </motion.li>
            <motion.li
              className="font-poppins font-normal cursor-pointer text-[24px] text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link to='/Services'>Services</Link>
            </motion.li>
            <motion.li
              className="font-poppins font-normal cursor-pointer text-[24px] text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link to='/PrivacyPolicy'>PrivacyPolicy</Link>
            </motion.li>
            <motion.li
              className="font-poppins font-normal cursor-pointer text-[24px] text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link to='/RefundPolicy'>RefundPolicy</Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
