import React, { useState } from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 px-4 md:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Section À propos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">{t("about_us")}</h3>
            <p className="text-gray-300">
              {t("about_description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">{t("quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="text-gray-300 hover:text-teal-400 transition"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="text-gray-300 hover:text-teal-400 transition"
                >
                  {t("our_services")}
                </a>
              </li>
              <li>
                <a 
                  href="#tech" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("tech");
                  }}
                  className="text-gray-300 hover:text-teal-400 transition"
                >
                  {t("products")}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-gray-300 hover:text-teal-400 transition"
                >
                  {t("contact_us")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">{t("contact_us")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-teal-400 mt-1" />
                <span className="text-gray-300">Kigali, Kimisagara</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaPhone className="text-teal-400 mt-1" />
                <span className="text-gray-300">+250782880865</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="text-teal-400 mt-1" />
                <span className="text-gray-300">bonusafrica@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* FQ */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">FAQ</h3>
            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(0)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>{t("faq_how_to_join")}</span>
                  <span className="text-teal-400">{activeFaq === 0 ? '-' : '+'}</span>
                </button>
                {activeFaq === 0 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    {t("faq_how_to_join_answer")}
                  </p>
                )}
              </div>
              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(1)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>{t("faq_advantage_question")}</span>
                  <span className="text-teal-400">{activeFaq === 1 ? '-' : '+'}</span>
                </button>
                {activeFaq === 1 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    {t("faq_advantage_answer")}
                  </p>
                )}
              </div>
              {/* autre FQ */}
              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(2)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>{t("faq_project_duration")}</span>
                  <span className="text-teal-400">{activeFaq === 1 ? '-' : '+'}</span>
                </button>
                {activeFaq === 2 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    {t("faq_project_duration_answer")}
                  </p>
                )}
              </div>

              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(3)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>{t("faq_payment_methods")}</span>
                  <span className="text-teal-400">{activeFaq === 1 ? '-' : '+'}</span>
                </button>
                {activeFaq === 3 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    {t("faq_payment_methods_answer")}
                  </p>
                )}
              </div>

              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(4)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>{t("faq_modification_policy")}</span>
                  <span className="text-teal-400">{activeFaq === 1 ? '-' : '+'}</span>
                </button>
                {activeFaq === 4 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    {t("faq_modification_policy_answer")}
                  </p>
                )}
              </div>
              {/* Fin FQ */}
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BonusAfrica. {t("all_rights_reserved")}.
          </div>
          {/* <div className="flex space-x-4">
          <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              Terms of Use
            </a>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-4"
            >
              Privacy Policy
          </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

