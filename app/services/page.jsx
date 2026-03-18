// app/services/page.js
import ServicesIcons from "../components/ServicesIcons";
import ProcessDiagram from "../components/ProcessDiagram";
import BrochureDownload from "../components/BrochureDownload";
import PermitClasses from "../components/PermitsClasses";

export const metadata = {
  title: "Immigration Services Kenya | Work Permits, Investor Permits & More",
  description:
    "SHEE-MG Ltd offers expert immigration services in Kenya including Class D work permits, Class G investor permits, dependent passes, special passes and permanent residence. Fast, compliant processing in Nairobi.",
  keywords: [
    "work permit Kenya",
    "Class D work permit Kenya",
    "Class G investor permit Kenya",
    "dependent pass Kenya",
    "special pass Kenya",
    "permanent residence Kenya",
    "immigration services Nairobi",
    "expatriate work permit Kenya",
    "Kenya immigration consultant",
    "business permit Kenya",
  ],
  openGraph: {
    title: "Immigration Services Kenya | SHEE-MG Ltd",
    description:
      "Work permits, investor permits, dependent passes and permanent residence solutions in Kenya. 98% approval rate, 15+ years experience.",
    url: "https://www.shee-mg.co.ke/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesIcons />
      <ProcessDiagram />
      <BrochureDownload />
      <PermitClasses />
    </main>
  );
}
