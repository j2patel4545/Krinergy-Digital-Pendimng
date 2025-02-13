import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsConditions = () => {
  return (
    <motion.div
      className="container  text-white pt-36 px-20 mx-auto p-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h1
        className="text-2xl font-bold mb-4"
        variants={fadeInUp}
      >
        Terms & Conditions of Krinergy Digital
      </motion.h1>

      {[
        {
          title: "1. Services Provided",
          content:
            "Krinergy Digital provides services such as software development, IT consulting, network management, and cybersecurity solutions. The specific services to be provided will be outlined in the contract or project scope agreed upon between the company and the client.",
        },
        {
          title: "2. Client Responsibilities",
          content:
            "The client agrees to provide all necessary information and cooperation to facilitate the timely and efficient delivery of services. The client also agrees to pay for the services rendered as per the payment terms outlined in the project agreement.",
        },
        {
          title: "3. Payment Terms",
          content:
            "Payments will be made according to the pricing structure agreed upon by both parties, either as a one-time fee or through a recurring subscription model. Invoices will be issued on a [weekly/monthly/quarterly] basis and are due within 30 days from the invoice date.",
        },
        {
          title: "4. Confidentiality",
          content:
            "Both parties agree to maintain confidentiality regarding any proprietary or confidential information shared during the course of the agreement. This obligation remains in effect even after the termination of the services.",
        },
        {
          title: "5. Data Privacy and Security",
          content:
            "The Company agrees to handle the Client’s data with care and in accordance with applicable data protection laws. The Client agrees to comply with all relevant laws concerning data privacy when using the Company’s services.",
        },
      ].map(({ title, content }, index) => (
        <motion.section
          key={index}
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{content}</p>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default TermsConditions;
