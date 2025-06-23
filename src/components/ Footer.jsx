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

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">{t("faq")}</h3>
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
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [activeFaq, setActiveFaq] = React.useState(null);

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   return (
//     <footer className="bg-gray-800 text-white pt-12 pb-6 px-4 md:px-8 mt-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Section À propos */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-teal-400">À propos</h3>
//             <p className="text-gray-300">
//               BonusAfrica est une entreprise de jeunes Africains engagés à résoudre les problèmes de la nouvelle technologie.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
//                 <FaLinkedin />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-teal-400 transition text-xl">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           {/* Liens rapides */}
//           <div className="md:w-1/2">
//       <h3 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-4">
//         {selectedService.title}
//       </h3>

//       <p className="text-gray-700 dark:text-gray-300 mb-6">
//         {selectedService.detailedDescription || t("premium_service_intro")}
//       </p>

//       <div className="space-y-3 mb-6">
//         <h4 className="font-semibold text-lg">{t("key_benefits")} :</h4>
//         <ul className="space-y-2">
//           {(selectedService.benefits || [
//             t("custom_solution"),
//             t("support_24_7"),
//             t("cutting_edge_tech"),
//             t("guaranteed_results")
//           ]).map((benefit, i) => (
//             <li key={i} className="flex items-start">
//               <span className="text-teal-500 mr-2 mt-1">•</span>
//               {benefit}
//             </li>
//           ))}
//         </ul>
//       </div>


//           {/* Contact */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-teal-400">Nous contacter</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start space-x-2">
//                 <FaMapMarkerAlt className="text-teal-400 mt-1" />
//                 <span className="text-gray-300">123 Rue Tech, Abidjan, Côte d'Ivoire</span>
//               </li>
//               <li className="flex items-start space-x-2">
//                 <FaPhone className="text-teal-400 mt-1" />
//                 <span className="text-gray-300">+225 01 23 45 67 89</span>
//               </li>
//               <li className="flex items-start space-x-2">
//                 <FaEnvelope className="text-teal-400 mt-1" />
//                 <span className="text-gray-300">contact@bonusafrica.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* FAQ */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-teal-400">FAQ</h3>
//             <div className="space-y-3">
//               <div className="border-b border-gray-700 pb-2">
//                 <button
//                   onClick={() => toggleFaq(0)}
//                   className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
//                 >
//                   <span>Comment nous rejoindre?</span>
//                   <span className="text-teal-400">{activeFaq === 0 ? '-' : '+'}</span>
//                 </button>
//                 {activeFaq === 0 && (
//                   <p className="mt-2 text-gray-400 text-sm">
//                     En cliquant sur le bouton "Envoyer ma commande" ou via nos réseaux sociaux.
//                   </p>
//                 )}
//               </div>
//               <div className="border-b border-gray-700 pb-2">
//                 <button
//                   onClick={() => toggleFaq(1)}
//                   className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white transition"
//                 >
//                   <span>Quels sont les avantages de travailler avec BonusAfrica?</span>
//                   <span className="text-teal-400">{activeFaq === 1 ? '-' : '+'}</span>
//                 </button>
//                 {activeFaq === 1 && (
//                   <p className="mt-2 text-gray-400 text-sm">
//                     Nous sommes une entreprise de jeunes Africains qui s'engage à bien résoudre les problèmes de la nouvelle technologie. Notre préoccupation principale est votre satisfaction.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bas de footer */}
//         <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-400 text-sm mb-4 md:mb-0">
//             © {new Date().getFullYear()} BonusAfrica. Tous droits réservés.
//           </div>
//           <div className="flex space-x-4">
//             <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition text-sm">
//               Politique de confidentialité
//             </Link>
//             <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition text-sm">
//               Conditions d'utilisation
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;