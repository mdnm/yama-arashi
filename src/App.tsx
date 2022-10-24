import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Banner } from "./components/Banner";
import { ContactSection } from "./components/ContactSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { NavbarSection } from "./components/NavbarSection";
import { ServicesSection } from "./components/ServicesSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { WhatsappButton } from "./components/WhatsappButton";
import { WhyUsSection } from "./components/WhyUsSection";
import "./index.scss";

function App() {
  const [currentSection, setCurrentSection] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostIntersectingEntry = entries
          .sort(
            (entryA, entryB) =>
              entryA.intersectionRatio - entryB.intersectionRatio
          )
          .find((entry) => entry.isIntersecting);
        if (
          mostIntersectingEntry?.target?.id &&
          mostIntersectingEntry.target.id !== currentSection
        ) {
          setCurrentSection(mostIntersectingEntry.target.id);
        }
      },
      {
        threshold: 0.25,
        trackVisibility: true,
        delay: 100,
      } as any
    );
    document.querySelectorAll("[data-name]").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container fluid className="p-0" as="main">
      <Row>
        <Banner />
      </Row>
      <NavbarSection currentSection={currentSection} />
      <Row>
        <HeroSection />
      </Row>
      <Row>
        <ServicesSection />
      </Row>
      <Row>
        <WhyUsSection />
      </Row>
      <Row>
        <SponsorsSection />
      </Row>
      <Row>
        <FaqSection />
      </Row>
      <Row>
        <ContactSection />
      </Row>
      <Row>
        <Footer />
      </Row>
      <WhatsappButton />
    </Container>
  );
}

export default App;
