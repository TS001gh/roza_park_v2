import BrandContent from "../../components/BrandContent";

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }, { locale: "ar" }];
}

const Brands = () => {
  return <BrandContent />;
};

export default Brands;
