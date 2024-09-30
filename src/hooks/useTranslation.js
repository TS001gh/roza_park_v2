"use client";

import { useState, useEffect } from "react";

export function useTranslationHook() {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    // Check localStorage first
    const storedLocale = localStorage.getItem("language");
    const initialLocale = storedLocale || navigator.language.split("-")[0];
    const newLocale = ["tr", "en", "ar"].includes(initialLocale)
      ? initialLocale
      : "en";

    setLocale(newLocale);
    localStorage.setItem("language", newLocale);

    // Load translations
    import(`../messages/${newLocale}.json`)
      .then((module) => setMessages(module.default))
      .catch((error) => console.error("Error loading translations:", error));
  }, []);
  const t = (key) => {
    const keys = key.split("."); // Split the key by the dot to access nested properties
    return (
      keys.reduce(
        (obj, k) => (obj && obj[k] !== undefined ? obj[k] : key),
        messages
      ) || key
    );
  };

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("language", newLocale);
    import(`../messages/${newLocale}.json`)
      .then((module) => setMessages(module.default))
      .catch((error) => console.error("Error loading translations:", error));
  };

  return { t, locale, changeLocale };
}
