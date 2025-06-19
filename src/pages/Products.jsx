import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import appleComputer from "../assets/apple.png";




const products = [
  {
    name: "Ordinateur portable",
    price: "400 000 FRW",
    description: "PC rapide pour tous les usages.",
    image: appleComputer,
  },
  {
    name: "Clé USB 64Go",
    price: "15 000 FRW",
    description: "Stockage rapide et fiable.",
    image: "/assets/usb.png",
  },
  {
    name: "Disque dur 1To",
    price: "50 000 FRW",
    description: "Sauvegardez vos fichiers en sécurité.",
    image: "/assets/hdd.png",
  },
  {
    name: "Smartphone Android",
    price: "150 000 FRW",
    description: "Performance + qualité photo.",
    image: "/assets/phone.png",
  },
];

const Products = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-300 mb-8">
          {t("products")}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} className="h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Popup produit */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-md w-full">
              <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="h-40 mx-auto my-4" />
              <p>{selectedProduct.description}</p>
              <p className="text-teal-600 font-bold mt-2">{selectedProduct.price}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-300 dark:bg-gray-600 px-4 py-2 rounded mr-2"
                >
                  {t("cancel")}
                </button>
                <button className="bg-teal-500 text-white px-4 py-2 rounded">
                  {t("send_message")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
