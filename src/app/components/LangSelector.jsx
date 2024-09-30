// src/app/components/LangSelector.jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslationHook } from "../../hooks/useTranslation";
// import { useTranslation } from "@/hooks/useTranslation";

const LangSelector = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { changeLocale } = useTranslationHook();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);

    // Update the URL
    router.push(path);

    // Update the language in localStorage and load new translations
    changeLocale(newLocale);

    console.log(newLocale);
  };

  const langs = ["tr", "en", "ar"];

  return (
    <div>
      <select
        className="p-2 border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
        value={locale}
        onChange={handleChange}
      >
        {langs.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSelector;
