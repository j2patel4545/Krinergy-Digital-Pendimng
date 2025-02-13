import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RefundPolicy = () => {
  return (
    <motion.div
      className="container py-10 bg-[#00040F] justify-center  text-white pt-32 mx-auto w-screen px-4 sm:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h1
        className="text-3xl flex -ml-36 justify-center w-screen font-bold text-center mb-6"
        variants={fadeInUp}
      >
        Refund Policy
      </motion.h1>

      <motion.p className="mb-4" variants={fadeInUp}>
        At krinergy Digital Technologies, we are committed to providing
        high-quality IT services to our clients. However, we understand that
        there may be circumstances under which you wish to request a refund.
        This Refund Policy outlines the conditions under which refunds may be
        issued for services provided by krinergy Digital.
      </motion.p>

      {[
        {
          title: "1. General Policy",
          content:
            "We provide refunds for certain services in accordance with the terms outlined below. Please review the following conditions to understand if you are eligible for a refund.",
        },
        {
          title: "2. Services Eligible for Refund",
          content: (
            <>
              Refunds are available under the following circumstances:
              <ul className="list-disc ml-4 mt-2">
                <li>
                  <strong>Prepaid Services:</strong> If you have paid for
                  services in advance and the service is not delivered as agreed
                  or there is a significant issue with the work, you may be
                  eligible for a refund.
                </li>
                <li>
                  <strong>Project-Specific Refunds:</strong> If the project has
                  not been completed according to agreed-upon deliverables, a
                  partial or full refund may be offered.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Non-Refundable Services",
          content: (
            <>
              Certain services may not be eligible for a refund. These include:
              <ul className="list-disc ml-4 mt-2">
                <li>
                  <strong>Customized Services:</strong> Once custom development
                  has been completed, no refund will be provided.
                </li>
                <li>
                  <strong>Completed Work:</strong> If a service has been
                  completed and delivered, no refunds will be provided.
                </li>
                <li>
                  <strong>Subscription Fees:</strong> Subscription-based
                  services are non-refundable.
                </li>
              </ul>
            </>
          ),
        },
      ].map(({ title, content }, index) => (
        <motion.section
          key={index}
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p>{content}</p>
        </motion.section>
      ))}

      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">5. How to Request a Refund</h2>
        <p>If you wish to request a refund, follow these steps:</p>
        <ul className="list-decimal ml-4 mt-2">
          <li>Contact us at krinergynavsari@gmail.com or +91 9313660144.</li>
          <li>Provide details and supporting documents about the issue.</li>
          <li>We will review and respond within 7 business days.</li>
        </ul>
      </motion.section>

      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">6. Refund Process</h2>
        <p>
          Once approved, the refund will be processed using the original payment
          method. Please allow up to 15 business days for processing.
        </p>
      </motion.section>

      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">9. Changes to This Refund Policy</h2>
        <p>
          We reserve the right to update this policy at any time. Changes will
          be posted on this page.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default RefundPolicy;
