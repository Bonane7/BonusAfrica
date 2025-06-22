import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { servicesData } from "../components/ServiceCard";
import { 
  FaReact, FaNodeJs, FaCss3Alt, FaDatabase, 
  FaPython, FaTools, FaCloud, FaQuoteLeft,
  FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaFigma,FaGithub
} from "react-icons/fa";
import ContactPopup from "../components/ContactPopup";

const Home = () => {
  const { t } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentTestimonialImage, setCurrentTestimonialImage] = useState(0);

  // Tableau d'URLs d'images de fond pour la Hero Section
  const heroBackgroundImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ];

  // Photos pour témoignages
  const testimonialImages = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80'
  ];

  // Animation des backgrounds hero
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, [heroBackgroundImages.length]);

  // Animation des icônes techno
  useEffect(() => {
    const techInterval = setInterval(() => {
      const icons = document.querySelectorAll('.tech-icon');
      icons.forEach(icon => {
        icon.style.transform = `scale(${1 + Math.random() * 0.3}) rotate(${Math.random() * 10 - 5}deg)`;
      });
    }, 2000);
    return () => clearInterval(techInterval);
  }, []);


  return (
    <main className="pt-20 space-y-16 md:space-y-24 px-4 max-w-7xl mx-auto">
      {/* Section Hero */}
      <section 
        className="flex items-center justify-center rounded-xl mb-16 md:mb-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBackgroundImages[currentBgIndex]})`,
          backgroundColor: 'transparent',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out',
          minHeight: '85vh'
        }}
      >
        <div id="home" className=" absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 text-center px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            {t("home_title")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t("what_is_bonusAfrica")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition-all text-lg font-semibold shadow-lg transform hover:scale-105"
              onClick={() => setContactOpen(true)}
            >
              {t("send_message")}
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg transition-all text-lg font-semibold shadow-lg transform hover:scale-105"
              onClick={() => document.getElementById('services').scrollIntoView()}
            >
              Nos Services
            </button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="max-w-4xl mx-auto text-center px-4 py-12 md:py-16 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-6">
          {t("Who_are_we")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("Description")}
        </p>
      </section>

      {/* Services */}
{/* Services Section */}
<section id="services" className="py-12 md:py-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-300">
      Nos Services Premium
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
      Découvrez nos solutions sur mesure pour votre réussite numérique
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {servicesData.map((service, index) => (
      <div 
        key={index} 
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col cursor-pointer"
        onClick={() => setSelectedService(service)}
      >
        {/* Conteneur d'image */}
        <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
          <img 
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <h3 className="font-bold text-xl text-teal-700 dark:text-teal-400 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">
          {service.description}
        </p>
        <button className="mt-4 text-teal-600 dark:text-teal-400 font-medium self-start">
          En savoir plus →
        </button>
      </div>
    ))}
  </div>
</section>

{/* Popup de service - Version corrigée */}
{selectedService && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-30 p-4">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
      <button 
        onClick={() => setSelectedService(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-2xl p-2"
      >
        <FaTimes />
      </button>
      
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/2">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden aspect-video">
              <img 
                src={selectedService.image}
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedService.detailedDescription || "Notre service premium offre des solutions adaptées à vos besoins spécifiques..."}
            </p>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-lg">Avantages clés :</h4>
              <ul className="space-y-2">
                {(selectedService.benefits || [
                  "Solution personnalisée",
                  "Support 24/7",
                  "Technologies de pointe",
                  "Résultats garantis"
                ]).map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300">
              <FaInstagram />
            </a>
          </div>
          
          <button
            onClick={() => {
              setSelectedService(null);
              setContactOpen(true);
            }}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition font-semibold w-full sm:w-auto text-center"
          >
            Demander ce service
          </button>
        </div>
      </div>
    </div>
  </div>
)}
      {/* Technologies */}
      <section id="tech" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-4">
            Technologies Maîtrisées
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nous utilisons les dernières technologies pour des solutions performantes
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-6 md:gap-10 text-5xl md:text-6xl px-4">
          <FaReact className="tech-icon text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-all duration-300" />
          <FaNodeJs className="tech-icon text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-all duration-300" />
          <FaCss3Alt className="tech-icon text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300" />
          <FaDatabase className="tech-icon text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-all duration-300" />
          <FaPython className="tech-icon text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300" />
          <FaTools className="tech-icon text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-all duration-300" />
          <FaCloud className="tech-icon text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all duration-300" />
          <FaFigma className="tech-icon text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all duration-300" />
          <FaGithub className="tech-icon text-gray-500 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300" />
        </div>
        
      </section>

      {/* Témoignages */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-300">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de notre travail
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {[
            { 
              text: "BonusAfrica a transformé notre présence en ligne. Leur équipe a su comprendre nos besoins et livrer un produit exceptionnel dans les délais.",
              name: "Jean Koffi",
              role: "CEO, TechSolutions"
            },
            { 
              text: "Service client exceptionnel et expertise technique impressionnante. Nous avons multiplié nos revenus en ligne grâce à leurs solutions.",
              name: "Amina Diallo",
              role: "Directrice Marketing"
            },
            { 
              text: "Le site web qu'ils ont créé pour nous est non seulement magnifique mais aussi très performant. Très satisfait du partenariat.",
              name: "Marc Kouassi",
              role: "Entrepreneur"
            },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-teal-400">
                  <img 
                    src={testimonialImages[(currentTestimonialImage + i) % testimonialImages.length]} 
                    alt={testimonial.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600 dark:text-teal-400">{testimonial.role}</p>
                </div>
              </div>
              <FaQuoteLeft className="text-teal-400 text-xl mb-3" />
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <div className="py-12 text-center bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Prêt à transformer votre projet ?
        </h3>
        <button
          onClick={() => setContactOpen(true)}
          className="bg-white text-teal-600 hover:bg-gray-100 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          {t("contact_us")}
        </button>
      </div>

      {contactOpen && <ContactPopup onClose={() => setContactOpen(false)} />}
    </main>
  );
};

export default Home;

