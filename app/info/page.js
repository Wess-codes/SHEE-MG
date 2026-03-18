// app/info/page.js
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | Immigration Consultancy Nairobi Kenya",
  description:
    "SHEE-MG Ltd is a premier immigration consultancy in Nairobi with 15+ years experience handling work permits, investor permits and expatriate solutions.",
  keywords: [
    "immigration consultancy Nairobi",
    "work permit consultant Kenya",
    "investor permit Kenya",
  ],
};

export default function Page() {
  return <AboutContent />;
}
