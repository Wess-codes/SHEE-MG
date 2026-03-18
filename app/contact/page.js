import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Us | SHEE-MG Immigration Consultancy Nairobi",
  description:
    "Contact SHEE-MG Ltd for immigration services in Nairobi. Visit us at Hughes Building, Kenyatta Avenue or Mountain Mall, Thika Road. Call +254 725 371360.",
  keywords: [
    "immigration consultant contact Nairobi",
    "work permit Kenya contact",
    "SHEE-MG Nairobi office",
    "immigration help Nairobi",
  ],
  openGraph: {
    title: "Contact SHEE-MG | Immigration Consultancy Nairobi",
    description:
      "Reach our immigration experts in Nairobi. Two offices — Hughes Building, Kenyatta Avenue and Mountain Mall, Thika Road.",
    url: "https://www.shee-mg.co.ke/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ContactContent />;
}
