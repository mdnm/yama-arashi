import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import heroBg from "../assets/hero-background.jpeg";

export function HeroSection() {
  return (
    <Container
      id="home"
      data-name="home"
      className="d-flex justify-content-center align-items-center min-vh-100-navbar position-relative"
      style={{
        background: `url(${heroBg}) top center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center top-0 bottom-0 position-absolute"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 className="text-light fw-bolder fs-1 fs-lg-hero text-center px-2">
          Physical & Mental Training a Piacenza
        </h1>
        <p className="text-light fs-4 fs-lg-2 text-center">
          Forza, Disciplina, Coraggio, Fitness
        </p>
        <Button
          variant="a"
          href="#contact"
          className="btn btn-primary text-uppercase py-2 px-4 rounded-pill fs-6 fs-lg-5 mt-5"
        >
          Iscriviti adesso
        </Button>
      </Container>
    </Container>
  );
}
