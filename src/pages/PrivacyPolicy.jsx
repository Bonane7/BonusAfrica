// src/pages/Privacy.jsx
import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Privacy Policy</h1>

      <p className="mb-4">
        BonusAfrica is committed to protecting your privacy. This policy outlines how we collect, use, and store your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information Collection</h2>
      <p className="mb-4">
        We collect your contact details, project preferences, and payment data strictly for service delivery.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Usage</h2>
      <p className="mb-4">
        Your data is used solely for providing our services, communication, and legal compliance. We do not sell or share your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Your Rights</h2>
      <p className="mb-4">
        You may request access, modification, or deletion of your data at any time by contacting our team.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-10">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default Privacy;
