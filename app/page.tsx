import HeroSection from "./components/Hero";
import WhyChooseUs from "./components/whyUs";
import ServicesGrid from "./components/services";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/Testimonials";
import ConsultationForm from "./components/ConsultationForm";
import TrustedPartners from "./components/TrustedPartners";



export default function HomePage() {
  return (

   <main>
  <HeroSection />
  <TrustedPartners />
  <AboutSection />
  <ServicesGrid />
  <WhyChooseUs />
  <TestimonialsSection />
  <ConsultationForm />
    </main>

  );
}

