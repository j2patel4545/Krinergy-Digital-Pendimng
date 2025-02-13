import { motion } from 'framer-motion';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id='home' className={`flex mt-10 md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 hidden sm:flex  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'
        >
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'></span> Every Project With {" "}
            <span className='text-white'>Extra Care </span> As Customer Need
          </p>
        </motion.div>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'
          >
            The Next <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Generation</span> {" "}
          </motion.h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            {/* <GetStarted/> */}
          </div>
        </div>
        
        <motion.h1 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'
        >
          IT Tech Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Our IT company delivers innovative, secure, and scalable technology solutions, from software development to cloud integration, ensuring seamless digital transformation and business growth.
        </motion.p>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <motion.img 
          src={robot} alt='billing' 
          className='w-[100%] h-[100%] relative z-[5]'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        /> */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
