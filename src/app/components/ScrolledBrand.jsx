import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslationHook } from "../../hooks/useTranslation";

const ScrolledBrand = ({ index, brand }) => {
  const { t } = useTranslationHook();
  return (
    <div>
      <motion.div
        className="bg-white border min-h-full p-4 rounded-lg shadow-xl flex 
    flex-col justify-between items-center overflow-hidden space-y-8"
        initial={{ opacity: 0.1, x: index % 2 == 0 ? -50 : 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ amount: "some", margin: "-200px" }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
      >
        <Image
          src={brand.src}
          alt={brand.alt}
          className=""
          height={300}
          width={300}
        />
        <div className="text-balance px-12 text-center">
          {brand.description}
        </div>
        <Link href={brand.link}>
          <button className="px-4 p-2 text-center bg-primary rounded-full text-white hover:scale-105 transition-all">
            {t("Brands.visitOurPage")}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ScrolledBrand;
