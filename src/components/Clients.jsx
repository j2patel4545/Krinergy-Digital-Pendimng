import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 flex justify-center overflow-hidden`}>
      <div className="flex justify-center w-max animate-marquee space-x-8">
        {clients.concat(clients).map((client, index) => (
          <div 
            key={index} 
            className={`flex ${styles.flexCenter} sm:min-w-[192px] justify-center min-w-[120px]`}
          >
            <img 
              src={client.logo} 
              alt="client" 
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
