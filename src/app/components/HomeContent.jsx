"use client";

// import Image from "next/image";
import Link from "next/link";
import React from "react";
import BrandsList from "./BrandsList";
import { useTranslationHook } from "../../hooks/useTranslation";
// import mainImage from "../../../public/images/main-image-roza-park.jpg";

const HomeContent = () => {
  const { t, locale } = useTranslationHook();
  {
    console.log(t("HomePage.hero.title"));
  }
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 space-y-16 max-w-screen-xl">
        {/* Hero Section */}
        <section className="text-text-primary bg-gradient-to-tl from-primary/75 to-secondary py-20 rounded-3xl shadow-lg mt-20 transition duration-300 animate-fade-in-left">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              {t("HomePage.hero.title")}
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up">
              <strong className="block">{t("HomePage.hero.subtitle")}</strong>
              {t("HomePage.hero.description")}
            </p>
            <Link
              href={`/${locale}/products`}
              className="bg-secondary text-primary py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary-dark hover:text-secondary transition duration-300 hover:shadow-lg inline-block"
            >
              {t("HomePage.hero.cta")}
            </Link>
          </div>
        </section>
        {/* <section className="bg-gradient-to-tl from-primary/75 to-secondary rounded-3xl shadow-lg mt-20 transition duration-300 animate-fade-in-right">
          <Image
            src={mainImage}
            alt="main image"
            width={1000}
            height={1000}
            className="w-full rounded-3xl"
          />
        </section> */}
        {/* Brands List */}
        <BrandsList />
        {/* Who We Are Section */}
        <section className="bg-white py-16 rounded-3xl shadow-lg">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-8 text-text-primary">
              {t("HomePage.whoWeAre.title")}
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {t("HomePage.whoWeAre.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t("HomePage.whoWeAre.mission.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("HomePage.whoWeAre.mission.description")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t("HomePage.whoWeAre.legacy.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("HomePage.whoWeAre.legacy.description")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t("HomePage.whoWeAre.vision.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("HomePage.whoWeAre.vision.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeContent;
