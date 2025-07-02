import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const ContactPopup = ({ onClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [lastMessageSent, setLastMessageSent] = useState(""); // pour bloquer doublons
  const [isSending, setIsSending] = useState(false); // pour bloquer bouton pendant envoi

  // Charger depuis localStorage au démarrage
  useEffect(() => {
    const savedMessage = localStorage.getItem("lastMessageSent");
    if (savedMessage) {
      setLastMessageSent(savedMessage);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedMessage = formData.message.trim();

    // Vérifie si le message est le même que le précédent
    if (trimmedMessage === lastMessageSent) {
      alert("⚠️ You have already sent this message.");
      return;
    }

    if (isSending) {
      alert("⏳ Envoi déjà en cours...");
      return;
    }

    setIsSending(true); // bloque le bouton

    emailjs
      .send(
        "service_vov5iut",     // 🔁 Remplacez ici
        "template_6r1o71f",    // 🔁 Remplacez ici
        formData,
        "QkBjkZ8S_yJGiLDmQ"     // 🔁 Remplacez ici
      )
      .then(() => {
        setLastMessageSent(trimmedMessage);
        localStorage.setItem("lastMessageSent", trimmedMessage); // stock local
        setShowSuccess(true);
        setIsSending(false);

        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 5000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        alert("❌ Une erreur est survenue.");
        setIsSending(false);
      });
      setFormData({ name: "", email: "", phone: "", message: "" });

  };

  return (
    <div
      id="contact"
      className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center px-4"
    >
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
                  disabled={isSending}
                  className={`${
                    isSending
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-teal-500 hover:bg-teal-600"
                  } text-white px-4 py-2 rounded`}
                >
                  {isSending ? t("sending") || "Envoi..." : t("send_message")}
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
