import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactPopup = ({ onClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: envoyer les données à un backend ou API
    console.log("Message envoyé :", formData);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose(); // ferme la popup
    }, 5000);
  };

  return (
    <div id="contact" className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 dark:text-gray-300 text-xl font-bold"
        >
          ×
        </button>

        {showSuccess ? (
          <p className="text-green-600 dark:text-green-400 text-center font-medium">
            {t("success_message")}
          </p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-300 mb-4 text-center">
              {t("contact_us")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("name")}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("email")}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("phone")}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("message")}
                required
                rows="4"
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded"
                >
                  {t("cancel")}
                </button>
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
                >
                  {t("send_message")}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
