import ServicesIcons from "../components/ServicesIcons";
import ProcessDiagram from "../components/ProcessDiagram";
import BrochureDownload from "../components/BrochureDownload";
import WorkPermitClasses from "../components/WorkPermitClasses";

export default function ServicesPage() {
  return (
    <main>
      <ServicesIcons />
      <WorkPermitClasses />
      <ProcessDiagram />
      <BrochureDownload />
    </main>
  );
}
