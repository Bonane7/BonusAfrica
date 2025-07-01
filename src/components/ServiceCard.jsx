import { useTranslation } from "react-i18next";

export const useServicesData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("creation-site"),
      price: "15,000 Frw",
      description: t("creation-site-description"),
      image: "services/site-statique.jpg"
    },
    {
      title: t("ecommerce-site"),
      price: t("price-on-request"),
      description: t("ecommerce-site-description"),
      image: "/services/resto.jpg",
    },
    {
      title: t("delivery-app"),
      price: t("price-on-request"),
      description: t("delivery-app-description"),
      image: "/services/livraison.jpg"
    },
    {
      title: t("portfolio"),
      price: t("price-on-request"),
      description: t("portfolio-description"),
      image: "/services/portfolio.jpg"
    },
    {
      title: t("web-dev"),
      description: t("web-dev-description"),
      image: "/services/site-web.jpg",
      detailedDescription: t("web-dev-details"),
      benefits: [
        t("web-dev-benefits.0"),
        t("web-dev-benefits.1"),
        t("web-dev-benefits.2")
      ]
    },
    {
      title: t("mobile-app"),
      description: t("mobile-app-description"),
      image: "/services/mobil-app.jpg",
      detailedDescription: t("mobile-app-details"),
      benefits: [
        t("mobile-app-benefits.0"),
        t("mobile-app-benefits.1"),
        t("mobile-app-benefits.2")
      ]
    },
    {
      title: t("graphic-design"),
      description: t("graphic-design-description"),
      image: "/services/Design.jpg",
      detailedDescription: t("graphic-design-details"),
      benefits: [
        t("graphic-design-benefits.0"),
        t("graphic-design-benefits.1"),
        t("graphic-design-benefits.2")
      ]
    },
    {
      title: t("team-support"),
      description: t("team-support-description"),
      image: "/services/Ecupe-bonus.jpg",
      detailedDescription: t("team-support-details"),
      benefits: [
        t("team-support-benefits.0"),
        t("team-support-benefits.1"),
        t("team-support-benefits.2"),
        t("team-support-benefits.3")
      ],
      specialIcon: "👥",
      badge: t("available_now")
    }
  ];
};


