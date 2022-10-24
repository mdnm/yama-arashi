import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import fitness from "../assets/fitness.png";
import martialArts from "../assets/martial-arts.png";
import olympicWeightLifting from "../assets/olympic-weightlifting.png";

const services = [
  {
    image: martialArts,
    altText: "Arti Marziali",
    imageStyle: {
      width: "65px",
      height: "65px",
    },
    title: "Arti Marziali",
    description:
      "Imparare l'educazione e la disciplina divertendosi attraverso le Arti Marziali è il principio fondamentale attorno al quale è stata fondata la nostra scuola.",
  },
  {
    image: fitness,
    altText: "Fitness",
    imageStyle: {
      width: "38px",
      height: "75px",
    },
    title: "Fitness",
    description:
      "Palestra Fitness dedicata, dotata di attrezzature specifiche e personale qualificato. Vieni a prenderti cura della salute del tuo corpo.",
  },
  {
    image: olympicWeightLifting,
    altText: "Pesistica Olimpica",
    imageStyle: { width: "48px", height: "70px" },
    title: "Pesistica Olimpica",
    description:
      "Forza, tecnica e costanza sono alla base di questo sport magnifico. Trova e supera i tuoi limiti sotto la guida dei nostri istruttori qualificati.",
  },
];

export function ServicesSection() {
  return (
    <Container
      id="services"
      data-name="services"
      className="d-flex flex-column justify-content-center align-items-center min-vh-100-navbar pt-5"
    >
      <h2 className="fs-1 fw-bold text-center">Servizi</h2>
      <Container className="d-flex justify-content-center align-items-center gap-4 flex-wrap mt-5 pb-5">
        {services.map((service) => (
          <Card
            style={{ maxWidth: "390px", height: "280px" }}
            key={service.title}
            className="d-flex flex-column justify-content-center align-items-center shadow"
          >
            <Card.Img
              style={{
                ...service.imageStyle,
              }}
              variant="top"
              src={service.image}
              className="mt-4"
              alt={service.altText}
            />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold fs-3 mt-3">
                {service.title}
              </Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
}
