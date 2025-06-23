import { useTranslation } from "react-i18next";

export const useServicesData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("creation-site"),
      price: "7 000 FRW",
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







// import { useTranslation } from "react-i18next";

//  const { t } = useTranslation();
// export const servicesData = [
  
//     {
//       title: "Création de site web statique",
//       price: "7 000 FRW",
//       description: "Site vitrine rapide pour votre activité a 7000Frw.",
//       image: "services/site-statique.jpg"
//     },
//     {
//       title: "Site e-commerce",
//       price: "sur devis",
//       description: "Vendez vos produits en ligne facilement.",
//       image: "/services/resto.jpg",
//     },
//     {
//       title: "Application de livraison",
//       price: "sur devis",
//       description: "Gestion de livraison pour entreprise.",
//       image: "/services/livraison.jpg"
//     },
//     {
//       title: "Portfolio professionnel",
//       price: "sur devis",
//       description: "Présentez vos compétences efficacement a 7000Frw.",
//       image: "/services/portfolio.jpg"
//     },
//     {
//       title: "Développement Web",
//       description: "Créez des sites web modernes et performants",
//       image: "/services/site-web.jpg", // Chemin depuis le dossier public
//       detailedDescription: "Nous développons des sites web sur mesure avec les dernières technologies...",
//       benefits: [
//         "Design responsive",
//         "Optimisation SEO",
//         "Intégration CMS"
//       ]
//     },
//     {
//       title: "Applications Mobile",
//       description: "Applications natives et cross-platform",
//       image: "/services/mobil-app.jpg",
//       detailedDescription: "Développement d'applications mobiles pour iOS et Android...",
//       benefits: [
//         "Interface intuitive",
//         "Performances optimales",
//         "Maintenance incluse"
//       ]
//     },
//     {
//       title: "Design Graphique",
//       description: "Identité visuelle et créations graphiques",
//       image: "/services/Design.jpg",
//       detailedDescription: "Création d'identités visuelles percutantes pour votre marque...",
//       benefits: [
//         "Logo personnalisé",
//         "Charte graphique",
//         "Supports print et digital"
//       ]
//     },

//     {
//       title: "Équipe à vos côtés",
//       description: "Notre équipe experte vous accompagne à chaque étape",
//       image: "/services/Ecupe-bonus.jpg", // Chemin depuis public/
//       detailedDescription: "Chez BonusAfrica, nous croyons en un accompagnement personnalisé. Notre équipe dédiée est disponible pour vous guider du premier contact jusqu'à la réalisation finale de votre projet.",
//       benefits: [
//         "Expertise disponible 24/7",
//         "Suivi personnalisé",
//         "Réponses rapides à vos questions",
//         "Solutions adaptées à vos besoins"
//       ],
//       specialIcon: "👥", // Icône de proximité
//       badge: "Disponible maintenant"
//     }


    
//   ];
  