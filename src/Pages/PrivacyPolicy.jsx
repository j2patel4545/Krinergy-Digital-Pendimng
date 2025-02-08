import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="min-h-screen pt-32 bg-[#00040F] text-white p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <section>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <ul className="text-gray-300 mt-2 list-disc pl-6">
              <li><strong>Personal Information:</strong> This includes details such as your name, email address, phone number, billing address, and any other information you provide to us during your use of our services.</li>
              <li><strong>Business Information:</strong> If you are a client or customer, we may collect information related to your business, including company name, job titles, industry, and relevant business contacts.</li>
              <li><strong>Usage Data:</strong> We automatically collect data related to your use of our website and services, such as IP address, browser type, pages visited, time spent on pages, and other analytical data.</li>
              <li><strong>Payment Information:</strong> If you make payments through our platform, we may collect billing and payment information, such as credit card details, bank account information, and transaction history.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <ul className="text-gray-300 mt-2 list-disc pl-6">
              <li>To provide, maintain, and improve our services.</li>
              <li>To process payments and manage billing.</li>
              <li>To communicate with you about updates, promotions, or service-related matters.</li>
              <li>To personalize user experience and tailor our services based on your preferences.</li>
              <li>To ensure compliance with legal obligations, enforce our agreements, and protect our rights.</li>
              <li>To improve the security of our website and systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
            <ul className="text-gray-300 mt-2 list-disc pl-6">
              <li><strong>With service providers:</strong> We may share your information with trusted third-party vendors who help us provide our services (e.g., cloud storage providers, payment processors, etc.). These parties are obligated to protect your data and may not use it for any other purpose.</li>
              <li><strong>For legal reasons:</strong> We may disclose your information if required by law or if we believe such action is necessary to comply with a legal obligation, protect our rights, investigate fraud, or prevent any unlawful activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p className="text-gray-300 mt-2">We take the security of your personal and business data seriously. We implement a variety of security measures to ensure that your information is protected. These measures include encryption, secure servers, and regular security audits. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Data Retention</h2>
            <p className="text-gray-300 mt-2">We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including compliance with legal and regulatory obligations. If you no longer wish to receive marketing communications, you may opt out, and we will remove your information from our mailing list.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p className="text-gray-300 mt-2">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="text-gray-300 mt-2 list-disc pl-6">
              <li><strong>Access:</strong> You may request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You may request that we correct any information that is inaccurate or incomplete.</li>
              <li><strong>Deletion:</strong> You may request the deletion of your personal data, subject to certain legal exceptions.</li>
              <li><strong>Data Portability:</strong> You may request that we provide you with a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Opt-out of Marketing:</strong> You may opt-out of receiving promotional emails by following the unsubscribe link in those emails or by contacting us directly.</li>
            </ul>
            <p>If you wish to exercise any of these rights, please contact us at [contact information].</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mt-2">We use cookies and other tracking technologies to improve your experience on our website. Cookies are small files stored on your device that help us track and analyze user behavior, enhance functionality, and remember user preferences.</p>
            <p className="text-gray-300 mt-2">You can control cookie settings in your browser, but disabling cookies may affect your ability to use some features of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
            <p className="text-gray-300 mt-2">Our website and services may contain links to third-party websites. These third-party sites are not governed by this Privacy Policy. We encourage you to review their privacy policies before providing them with any personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Children's Privacy</h2>
            <p className="text-gray-300 mt-2">Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will take steps to delete such information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mt-2">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
