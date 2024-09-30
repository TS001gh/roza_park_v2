"use client";

import { useEffect, useState } from "react";
import { useTranslationHook } from "../hooks/useTranslation";

export default function Loading() {
  const [dots, setDots] = useState("");

  const { t, locale } = useTranslationHook();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-600 via-red-300 to-white">
      <div className="relative">
        <div className="w-24 h-24 border-t-4 border-b-4 border-red-600 rounded-full animate-spin"></div>
        <div className="w-24 h-24 border-r-4 border-l-4 border-white rounded-full animate-pulse absolute top-0"></div>
      </div>
      <p className="text-4xl font-bold text-red-600 mt-8 animate-pulse">
        {locale === "en"
          ? "Loading"
          : locale === "tr"
          ? "Yükleniyor"
          : "جارى التحميل"}
        {dots}
      </p>
    </div>
  );
}
