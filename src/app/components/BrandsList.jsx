"use client";
import React, { useEffect } from "react";
import Brand from "./Brand";
import { brands } from "../../data/index";
import useMeasure from "react-use-measure";
import { useMotionValue, motion, animate } from "framer-motion";

const BrandsList = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (width) {
      const finalPosition = -width * 1.5 - 8;
      const controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });

      return () => controls.stop();
    }
  }, [xTranslation, width]);

  return (
    <section className="py-16 px-4 rounded-3xl shadow-lg overflow-hidden relative drop-shadow-2xl bg-gradient-to-t from-primary/50 to-secondary">
      <motion.div
        className="flex gap-4 items-center absolute inset-0"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...brands, ...brands, ...brands].map((item, idx) => {
          return <Brand image={item} key={idx} />;
        })}
      </motion.div>
    </section>
  );
};

export default BrandsList;
