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
          <li>Contact us at Mail id : krinergynavsari@gmail.com or +91 9313660144 within 7 days of the issue occurring.
          </li>
          <li>Provide a detailed description of the issue and any supporting documentation, such as emails, project files, or communications related to the service.
          </li>
          <li>We will review your request and determine if it is eligible for a refund based on the circumstances outlined above.</li>
        </ul>
      </motion.section>

      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">6. Refund Process</h2>
        <p>
        Once your refund request has been reviewed, we will notify you of the decision within 7 business days. If your request is approved, the refund will be processed using the same method of payment used for the original transaction. Please allow up to 15 business days for the refund to appear in your account, depending on the payment method.
        </p>
      </motion.section>
      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">7. Partial Refunds</h2>
        <p>
        In some cases, we may issue a partial refund based on the amount of work completed. If services were partially provided but not in line with the agreed-upon specifications, a partial refund may be offered for the unfulfilled portion of the project.

</p>
      </motion.section>
      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">8.Disputes</h2>
        <p>
        If a refund request cannot be resolved through our customer support process, the dispute will be handled in accordance with the dispute resolution procedures outlined in our Terms and Conditions.        </p>
      </motion.section>

      <motion.section className="mb-8" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-2">9. Changes to This Refund Policy</h2>
        <p>
        We reserve the right to modify or update this Refund Policy at any time. Any changes will be posted on this page with an updated “Last Updated” date. It is your responsibility to review this policy periodically to stay informed of any changes.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default RefundPolicy;
