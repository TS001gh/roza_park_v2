"use client";

import suter from "../../../public/images/brands/mr_suter.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslationHook } from "../../hooks/useTranslation";
import { brandsList } from "../../data/index.js";
import ScrolledBrand from "./ScrolledBrand";

const BrandContent = () => {
  const { t, locale } = useTranslationHook();

  const filteredBrands =
    ["ar", "tr", "en"].indexOf(locale) !== -1
      ? brandsList[locale]
      : brandsList["en"];

  return (
    <div className="max-w-screen-xl mx-auto mt-20 py-10 grid place-items-center px-4 md:px-0 overflow-hidden">
      <h1 className="text-5xl mb-10 font-bold">{t("Header.brand")}</h1>
      <div className="w-full flex justify-center items-center mb-20 border-2 border-primary rounded-full p-5">
        <Link
          href={"https://suterint.com/"}
          className="scale-110 border rounded-full p-5  shadow-lg"
        >
          <Image
            src={suter}
            alt="suter inernational logo"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBrands.map((brand, index) => (
          <ScrolledBrand key={index} index={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandContent;
