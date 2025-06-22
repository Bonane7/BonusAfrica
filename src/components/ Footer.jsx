import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeFaq, setActiveFaq] = React.useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 px-4 md:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Section À propos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">À propos</h3>
            <p className="text-gray-300">
              BonusAfrica est une entreprise de jeunes Africains engagés à résoudre les problèmes de la nouvelle technologie.
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
            <h3 className="text-xl font-bold text-teal-400">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-teal-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-teal-400 transition">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">Nous contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-teal-400 mt-1" />
                <span className="text-gray-300">123 Rue Tech, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaPhone className="text-teal-400 mt-1" />
                <span className="text-gray-300">+225 01 23 45 67 89</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="text-teal-400 mt-1" />
                <span className="text-gray-300">contact@bonusafrica.com</span>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">FAQ</h3>
            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(0)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>Comment nous rejoindre?</span>
                  <span className="text-teal-400">{activeFaq === 0 ? '-' : '+'}</span>
                </button>
                {activeFaq === 0 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    En cliquant sur le bouton "Envoyer ma commande" ou via nos réseaux sociaux.
                  </p>
                )}
              </div>
              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleFaq(1)}
                  className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
                >
                  <span>Quels sont les avantages de travailler avec BonusAfrica?</span>
                  <span className="text-teal-400">{activeFaq === 1 ? '-' : '+'}</span>
                </button>
                {activeFaq === 1 && (
                  <p className="mt-2 text-gray-400 text-sm">
                    Nous sommes une entreprise de jeunes Africains qui s'engage à bien résoudre les problèmes de la nouvelle technologie. Notre préoccupation principale est votre satisfaction.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BonusAfrica. Tous droits réservés.
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition text-sm">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition text-sm">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;