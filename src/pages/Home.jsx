
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { servicesData } from "../components/ServiceCard";
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase, FaQuoteLeft } from "react-icons/fa";
import ContactPopup from "../components/ContactPopup";

const Home = () => {
  const { t } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="pt-28 space-y-24 px-4">
      {/* Section Héros */}
      <section className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
        <div className="flex-1 text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-300">
            {t("home_title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t("what_is_bonusAfrica")}
          </p>
          <button
            className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition"
            onClick={() => setContactOpen(true)}
          >
            {t("send_message")}
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/logo.svg"
            alt="BonusAfrica logo"
            className="w-full max-w-sm mx-auto animate-slide-in-right"
          />
        </div>
      </section>

      {/* À propos */}
      <section className="max-w-5xl mx-auto text-center space-y-4 animate-slide-in-left">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-300">{t("Who_are_we")}</h2>
        <p className="text-gray-700 dark:text-gray-300">
         {t("Description")}
        </p>
      </section>

      {/* Services */}
      <section id="services" className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-300">Nos Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <img src={service.image} alt={service.title} className="h-32 w-full object-contain mb-3" />
              <h3 className="font-bold text-xl text-teal-700 dark:text-teal-400">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-300">{t("technologies")}</h2>
        <div className="flex justify-center gap-10 text-5xl text-teal-500 dark:text-teal-300">
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <FaCss3Alt title="Tailwind CSS" />
          <FaDatabase title="Database" />
        </div>
      </section>

      {/* Produits Tech */}
      <section id="products" className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-300">{t("products")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Ordinateur", image: "/assets/laptop.png" },
            { name: "Clé USB", image: "/assets/usb.png" },
            { name: "Disque dur", image: "/assets/hdd.png" },
            { name: "Téléphone", image: "/assets/phone.png" },
          ].map((p, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-lg">
              <img src={p.image} alt={p.name} className="h-24 mx-auto mb-2" />
              <h4 className="font-semibold text-teal-600 dark:text-teal-300">{p.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-300">Ce que disent nos clients</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Service rapide et efficace, je recommande à 100% !",
            "J’ai pu lancer ma boutique en ligne grâce à BonusAfrica.",
            "Très satisfait du design de mon portfolio !",
          ].map((msg, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md text-left space-y-2">
              <FaQuoteLeft className="text-teal-400 text-xl" />
              <p className="text-gray-700 dark:text-gray-300">{msg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bouton Nous contacter */}
      <div className="text-center">
        <button
          onClick={() => setContactOpen(true)}
          className="bg-teal-600 text-white py-3 px-6 rounded hover:bg-teal-700 transition text-lg"
        >
          {t("contact_us")}
        </button>
      </div>

      {contactOpen && <ContactPopup onClose={() => setContactOpen(false)} />}
    </main>
  );
};

export default Home;
