import ContactContent from "../../components/ContactContent";

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }, { locale: "ar" }];
}
export default function Contact() {
  return <ContactContent />;
}
