import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/ Footer";
import Home from "./pages/Home";

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
