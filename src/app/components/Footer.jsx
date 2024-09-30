"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslationHook } from "../../hooks/useTranslation";
// import { useTranslations } from "next-intl";

const Footer = () => {
  const path = usePathname();
  const { t, locale } = useTranslationHook();

  const isLocale = (locale) => {
    return locale === "tr" || locale === "ar" || locale === "en";
  };
  return (
    <footer className="bg-text-primary text-secondary text-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              {t("Footer.title")}
            </h3>
            <p className="text-sm text-balance px-12">
              {t("Footer.description")}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              {t("Footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="hover:underline">
                  {t("Footer.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:underline">
                  {t("Footer.products")}
                </Link>
              </li>

              <li>
                <Link href={`/${locale}/contact`} className="hover:underline">
                  {t("Footer.contact")}
                </Link>
              </li>

              <li>
                <Link href={`/${locale}/brands`} className="hover:underline">
                  {t("Footer.brand")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center text-primary">
              {t("Footer.connectWithUs")}
            </h4>

            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.facebook.com/rozaparkarabic?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Facebook
                  size={24}
                  className="hover:text-blue-500 transition-all duration-300"
                />

                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://x.com/rozaparkarabic?t=8brIWsBUSw-k0roOx9Xq3A&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Twitter
                  size={24}
                  className="hover:text-sky-500 transition-all duration-300"
                />

                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/rozaparkarabic?igsh=MWs2cTRvcmt4MjUycA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Instagram
                  size={24}
                  className="hover:text-pink-500 transition-all duration-300"
                />

                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary/30 text-center">
          <p>
            &copy; {new Date().getFullYear()} {t("Footer.title")}.{" "}
            {t("Footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
