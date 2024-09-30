import ProductsContent from "../../components/ProductsContent";

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }, { locale: "ar" }];
}

export default function Products() {
  return <ProductsContent />;
}
