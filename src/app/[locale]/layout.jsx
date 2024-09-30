// src/app/[locale]/layout.jsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "../../app/globals.css";
import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import { useTranslationHook } from "../../hooks/useTranslation";
// import { useTranslation } from "../../hooks/useTranslation";

export default function Layout({ children, params: { locale } }) {
  const router = useRouter();
  const pathname = usePathname();
  const { t, locale: currentLocale, changeLocale } = useTranslationHook();

  // Use useEffect to manage the URL and locale
  useEffect(() => {
    // Check local storage for language
    const storedLocale = localStorage.getItem("language");

    // Extract the existing locale from the pathname
    const existingLocale = pathname.split("/")[1]; // Assuming the locale is the first segment

    // Determine the locale to use (stored or current)
    const localeToUse = storedLocale || currentLocale;

    // Check if the existing locale is different from the locale to use
    if (existingLocale !== localeToUse) {
      // Construct the new path
      const newPath = pathname.replace(`/${existingLocale}`, `/${localeToUse}`);
      // Update the URL
      router.push(newPath);
    }
  }, [currentLocale, pathname, router]);

  return (
    <html lang={currentLocale}>
      <body>
        <Header />
        {children}
        <Footer locale={currentLocale} />
      </body>
    </html>
  );
}
