"use client";

import React, { useMemo, useState } from "react";
import { useTranslationHook } from "../../hooks/useTranslation";
import { useRouter } from "next/navigation";
import {
  ArrowRightCircleIcon,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import Image from "next/image";
import { products } from "../../data";

const ProductsContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const { t, locale } = useTranslationHook();
  const router = useRouter();

  const data = products[locale] ? products[locale] : products["en"];

  const filteredProducts = useMemo(() => {
    return data
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCategory === "All" || product.category === selectedCategory)
      )
      .sort();
  }, [data, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage, productsPerPage]);

  const categories = [
    t("Products.all"),
    ...new Set(data.map((product) => product.category)),
  ];
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-28">
      <h1 className="text-3xl font-bold mb-8 animate-fade-in-down text-text-primary">
        {t("Products.title")}
      </h1>

      <div className="mb-8 flex flex-wrap gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-2.5 text-text-secondary"
            size={20}
          />
        </div>
        <select
          className="p-2 border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-secondary rounded-lg shadow-md overflow-hidden transform scale-[99%] hover:scale-100 transition duration-300 
              ease-in-out flex flex-col justify-between "
          >
            <Image
              src={product.src}
              alt={product.name}
              width={300}
              height={200}
              className="w-full object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-text-primary">
                {product.name}
              </h2>
              <p className="text-text-secondary mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <button
                  className="bg-primary text-secondary py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300 hover:shadow-lg flex-grow flex justify-between items-center"
                  onClick={() => router.push("https://suterint.com/")}
                >
                  {t("Products.get_product")}
                  <ArrowRightCircleIcon size={25} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-primary text-secondary disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>
          <span
            className="text-text-primary"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {locale === "ar"
              ? `${currentPage} من ${totalPages} `
              : `${currentPage} ${t("Products.of")} ${totalPages}`}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-primary text-secondary disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsContent;
