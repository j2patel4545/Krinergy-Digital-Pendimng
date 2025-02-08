import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container py-10 bg-[#00040F] justify-center text-white pt-32 mx-auto w-screen px-4 sm:px-8">
      <h1 className="text-3xl -ml-28 flex justify-center w-screen font-bold text-center mb-6">Refund Policy</h1>
      <p className="mb-4">
        At Digifarm Technologies, we are committed to providing high-quality IT services to our clients.
        However, we understand that there may be circumstances under which you wish to request a refund. 
        This Refund Policy outlines the conditions under which refunds may be issued for services provided by Digifarm Technologies.
      </p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. General Policy</h2>
        <p>
          We provide refunds for certain services in accordance with the terms outlined below. Please review the following conditions to understand if you are eligible for a refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Services Eligible for Refund</h2>
        <p>Refunds are available under the following circumstances:</p>
        <ul className="list-inside list-disc ml-4">
          <li><strong>Prepaid Services:</strong> If you have paid for services in advance (e.g., monthly subscription, project-based payment), and the service is not delivered as agreed or there is a significant issue with the work, you may be eligible for a refund for the portion of the services that have not yet been provided.</li>
          <li><strong>Project-Specific Refunds:</strong> If the project has not been completed according to the agreed-upon deliverables or milestones (outlined in the contract), a partial or full refund may be offered, depending on the situation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Non-Refundable Services</h2>
        <p>Certain services may not be eligible for a refund. These include but are not limited to:</p>
        <ul className="list-inside list-disc ml-4">
          <li><strong>Customized Services:</strong> Once custom development or configuration has been completed or work has been started on a personalized project, no refund will be provided.</li>
          <li><strong>Completed Work:</strong> If a service has been completed and delivered as per the scope agreed upon in the contract or agreement, no refunds will be provided.</li>
          <li><strong>Subscription Fees:</strong> Subscription-based services are non-refundable for any portion of the period already used unless otherwise specified.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Conditions for Refund</h2>
        <p>To qualify for a refund, the following conditions must be met:</p>
        <ul className="list-inside list-disc ml-4">
          <li>The request for a refund must be made within 15 days of the service being delivered, or the issue being identified, whichever is applicable.</li>
          <li>Refund requests must be submitted in writing to Digifarm Technologies via email or contact form. You must provide details about the issue, including any relevant communication or documentation.</li>
          <li>The client must demonstrate that the service provided was not in accordance with the agreed terms and conditions, or the service was not delivered as described.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. How to Request a Refund</h2>
        <p>If you wish to request a refund, please follow these steps:</p>
        <ul className="list-inside list-decimal ml-4">
          <li>Contact us at <a href="mailto:info@digifarm.in" className="text-blue-600">info@digifarm.in</a> or 9510704906 within 7 days of the issue occurring.</li>
          <li>Provide a detailed description of the issue and any supporting documentation, such as emails, project files, or communications related to the service.</li>
          <li>We will review your request and determine if it is eligible for a refund based on the circumstances outlined above.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Refund Process</h2>
        <p>Once your refund request has been reviewed, we will notify you of the decision within 7 business days. If your request is approved, the refund will be processed using the same method of payment used for the original transaction. Please allow up to 15 business days for the refund to appear in your account, depending on the payment method.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Partial Refunds</h2>
        <p>In some cases, we may issue a partial refund based on the amount of work completed. If services were partially provided but not in line with the agreed-upon specifications, a partial refund may be offered for the unfulfilled portion of the project.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Disputes</h2>
        <p>If a refund request cannot be resolved through our customer support process, the dispute will be handled in accordance with the dispute resolution procedures outlined in our Terms and Conditions.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Changes to This Refund Policy</h2>
        <p>We reserve the right to modify or update this Refund Policy at any time. Any changes will be posted on this page with an updated “Last Updated” date. It is your responsibility to review this policy periodically to stay informed of any changes.</p>
      </section>
    </div>
  );
}

export default RefundPolicy;
