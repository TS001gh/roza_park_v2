import HomeContent from "../components/HomeContent";

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }, { locale: "ar" }];
}

export default function Home() {
  return <HomeContent />;
}
