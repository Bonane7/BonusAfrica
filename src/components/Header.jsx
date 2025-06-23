import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import ContactPopup from "../components/ContactPopup"; // Import du popup de contact

const Header = () => {
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    return typeof window !== "undefined" 
      ? localStorage.getItem("darkMode") === "true" 
      : false;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Gestion du mode sombre
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Fermeture du menu au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Scroll spy pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "tech", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial pour définir la section active au chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    setShowContactPopup(true);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-bold text-teal-600 dark:text-teal-300 hover:text-teal-700 dark:hover:text-teal-200 transition-colors"
          >
            BonusAfrica
          </a>

          {/* Contrôles visibles sur mobile */}
          <div className="md:hidden flex items-center gap-4">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="bg-gray-100 dark:bg-gray-700 text-sm p-1 rounded max-w-[100px]"
            >
              <option value="en">🇺🇸 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="sw">🇨🇩 Kiswahili</option>
              <option value="rw">🇷🇼 Kinyarwanda</option>
            </select>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-yellow-500 dark:text-yellow-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-teal-600 dark:text-teal-300"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex gap-6 items-center">
            {[
              { id: "home", label: t("home") },
              { id: "services", label: t("our_services") },
              { id: "tech", label: t("Technologies") },
              { id: "contact", label: t("contact_us"), isButton: true }
            ].map((item) => (
              item.isButton ? (
                <button
                  key={item.id}
                  onClick={handleContactClick}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}

            <div className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-300 ml-4">
              <FaMapMarkerAlt />
              <span>{t("location")}</span>
            </div>
          </nav>

          {/* Contrôles desktop */}
          <div className="hidden md:flex items-center gap-4">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="bg-gray-100 dark:bg-gray-700 text-sm p-1 rounded max-w-[150px] border border-gray-200 dark:border-gray-600"
            >
              <option value="en">🇺🇸 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="sw">🇨🇩 Kiswahili</option>
              <option value="rw">🇷🇼 Kinyarwanda</option>
            </select>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-yellow-500 dark:text-yellow-300 hover:scale-110 transition-transform"
              aria-label={darkMode ? t("light_mode") : t("dark_mode")}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden bg-white dark:bg-gray-900 shadow-xl absolute top-full left-0 right-0 border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="px-4 py-3 space-y-2">
              {[
                { id: "home", label: t("home") },
                { id: "services", label: t("our_services") },
                { id: "tech", label: t("Technologies") },
                { id: "contact", label: t("contact_us"), isButton: true }
              ].map((item) => (
                item.isButton ? (
                  <button
                    key={item.id}
                    onClick={handleContactClick}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              ))}

              <div className="flex items-center gap-2 mt-4 px-4 py-2 text-teal-600 dark:text-teal-300 text-sm">
                <FaMapMarkerAlt />
                <span>{t("location")}</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Popup de contact */}
      {showContactPopup && (
        <ContactPopup onClose={() => setShowContactPopup(false)} />
      )}
    </>
  );
};

export default Header;

