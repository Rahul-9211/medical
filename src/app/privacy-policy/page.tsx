import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - SHIVANAND GLOBAL MEDICAL TOURISM',
  description: 'Privacy Policy for SHIVANAND GLOBAL MEDICAL TOURISM - Learn how we manage, process, and protect your personal and sensitive health information in compliance with the DPDP Act, 2023.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80 py-8">
      <main className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E3C72] text-center mb-6 pb-4 border-b-2 border-gray-300">
            SHIVANAND GLOBAL MEDICAL TOURISM PRIVACY POLICY
          </h1>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            This Privacy Policy details how <strong>SHIVANAND GLOBAL MEDICAL TOURISM</strong> manages, processes, and protects the personal and sensitive health information of our current and prospective customers.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#1E3C72] mb-4 pb-2 border-b-2 border-gray-300 mt-6">
            1. Legal Foundation and Accountability
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our data practices are strictly governed by and compliant with <strong>The Digital Personal Data Protection Act (DPDP Act), 2023</strong> (India).
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            This adherence means <strong>data protection is a non-negotiable priority</strong> and we face <strong>severe financial penalties</strong> for any security failures, ensuring the highest level of legal accountability for your information.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#1E3C72] mb-4 pb-2 border-b-2 border-gray-300 mt-6">
            2. Data Collection and Consent
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We collect only the information essential for coordinating your medical travel and treatment (e.g., medical records, contact details, appointment needs).
          </p>
          <ul className="list-disc ml-8 mb-4 text-gray-700 leading-relaxed space-y-2">
            <li><strong>Explicit Consent:</strong> We require your <strong>clear, informed, and explicit consent</strong> before collecting, using, or sharing any of your sensitive health information.</li>
            <li><strong>Purpose Limitation:</strong> Your data is used exclusively for the specific, lawful purpose for which you granted consent.</li>
            <li><strong>Right to Withdraw:</strong> You have the complete right to <strong>withdraw your consent</strong> at any time.</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#1E3C72] mb-4 pb-2 border-b-2 border-gray-300 mt-6">
            3. Security Measures and Data Flow
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We implement industry-leading measures to protect your data from unauthorized access, loss, or misuse.
          </p>
          <ul className="list-disc ml-8 mb-4 text-gray-700 leading-relaxed space-y-2">
            <li><strong>Robust Security:</strong> We utilize advanced technical and organizational safeguards, including <strong>data encryption</strong> and secure access controls.</li>
            <li><strong>End-to-End Security:</strong> We exclusively partner with nationally and internationally <strong>accredited hospitals</strong>. These partners are legally bound to uphold the same <strong>stringent patient confidentiality</strong> standards, securing your data at every stage of the medical journey.</li>
            <li><strong>Minimal Retention:</strong> Data is retained only for as long as necessary or as required by Indian law, after which it is securely disposed of.</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#1E3C72] mb-4 pb-2 border-b-2 border-gray-300 mt-6">
            4. Your Data Rights
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Under the DPDP Act, you retain full control over your personal information:
          </p>
          <ul className="list-disc ml-8 mb-4 text-gray-700 leading-relaxed space-y-2">
            <li><strong>Right to Access:</strong> You may request a copy of your personal data held by us.</li>
            <li><strong>Right to Correction:</strong> You may request the correction of any inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> You may request the deletion of your personal data, subject to necessary legal record-keeping requirements.</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-[#1E3C72] mb-4 pb-2 border-b-2 border-gray-300">
              Contact Information
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For any questions regarding this Privacy Policy or to exercise your data rights, please contact our designated Privacy Officer:
            </p>
            <p className="mb-2 text-gray-700 leading-relaxed">
              <strong>Email: </strong>
              <a href="mailto:contact@shivanandglobalmedicaltourism.com" className="text-[#1E3C72] hover:text-blue-600 underline">
                contact@shivanandglobalmedicaltourism.com
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Address:</strong> 198, Sector 52, Gurugram, Haryana, 122001
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;

