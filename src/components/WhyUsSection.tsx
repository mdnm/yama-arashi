import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import yamaKanji from "../assets/yama-arashi-kanji.png";

const reasons = [
  {
    icon: "emoji-laughing",
    title: "Salute",
    description:
      "Siamo esperti nella salute fisica. Vi aiuteremo a prendervi cura del vostro corpo.",
  },
  {
    icon: "people-fill",
    title: "Spirito di squadra",
    description: "Il nostro team è unito e compatto",
  },
  {
    icon: "book-fill",
    title: "Educazione e Disciplina",
    description:
      "Cerchiamo di trasmettere sani principi di educazione e disciplina.",
  },
  {
    icon: "briefcase-fill",
    title: "Professionalità",
    description:
      "I nostri docenti sono preparati e specializzati in diverse discipline.",
  },
];

export function WhyUsSection() {
  return (
    <Container
      id="why-us"
      data-name="why-us"
      className="d-flex flex-column justify-content-center align-items-center min-vh-100-navbar bg-light py-5"
    >
      <h2 className="fs-1 fw-bold text-center mt-5">
        Perchè scegliere la <span className="text-primary">Yama</span>
      </h2>
      <Container>
        <Row>
          <Col lg="6">
            <Image fluid src={yamaKanji} alt="Yama Arashi Kanji" />
          </Col>
          <Col
            lg="6"
            className="d-flex flex-column justify-content-center gap-5"
          >
            {reasons.map((reason) => (
              <div
                className="d-flex align-items-center gap-3"
                key={reason.title}
              >
                <i
                  className={`bi bi-${reason.icon} rounded-circle text-primary fs-4 bg-white d-flex justify-content-center align-items-center shadow flex-shrink-0`}
                  style={{ width: "64px", height: "64px" }}
                ></i>
                <div>
                  <p className="fw-bold mb-1">{reason.title}</p>
                  <p className="mb-0">{reason.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
