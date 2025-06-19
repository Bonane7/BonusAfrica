import React from "react";
import ServiceCard from "../components/ServiceCard";
import { useTranslation } from "react-i18next";
import { servicesData } from "../data/servicesData";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-300 mb-8">
          {t("our_services")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
