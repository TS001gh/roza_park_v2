"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import mr_suter_logo from "../../../public/images/brands/mr_suter.png";
import suter_logo from "../../../public/images/brands/SUTER_INTERNATIONAL.png";
import { usePathname } from "next/navigation";
import LangSelector from "./LangSelector";
import { useTranslationHook } from "../../hooks/useTranslation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale } = useTranslationHook();

  const navLinks = useMemo(
    () => [
      { href: `/${locale}`, label: t("Header.home") },
      { href: `/${locale}/products`, label: t("Header.products") },
      { href: `/${locale}/contact`, label: t("Header.contact") },
      { href: `/${locale}/brands`, label: t("Header.brand") },
    ],
    [locale, t]
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-secondary shadow-lg z-50 transition-all 
    lg:max-w-5xl max-w-[24rem] sm:max-w-2xl mx-auto mt-3 ease-in-out rounded-3xl"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-between gap-4 items-center max-h-12 overflow-hidden">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={suter_logo}
              alt="Roza Park"
              width={35}
              height={35}
              priority
              className="md:w-12 md:h-12 w-10 h-10 object-contain rounded-full"
            />
          </Link>
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={mr_suter_logo}
              alt="Suter International"
              width={90}
              height={90}
              priority
              className="object-contain rounded-full"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-text-primary hover:text-primary hover:underline transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
          <LangSelector locale={locale} />
        </div>
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-secondary shadow-inner pb-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-4 text-sm text-text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="ml-2 mt-3">
            <LangSelector locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
