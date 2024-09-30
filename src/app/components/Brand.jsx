"use client";

import Image from "next/image";

const Brand = ({ image }) => {
  return <Image src={image} alt="brand" width={100} height={100} />;
};

export default Brand;
