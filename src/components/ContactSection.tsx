import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const contacts = [
  {
    icon: "geo-alt",
    title: "Il nostro indirizzo",
    content: "Via Galluzzi 10, Piacenza, 29122",
    cols: 6,
  },
  {
    icon: "envelope",
    title: "Inviaci una mail",
    content: "infoyama@yama-arashi.org",
    cols: 3,
  },
  {
    icon: "telephone",
    title: "Chiamaci",
    content: "+39 0523 618468",
    cols: 3,
  },
];

export function ContactSection() {
  return (
    <Container
      id="contact"
      data-name="contact"
      className="d-flex flex-column justify-content-center align-items-center min-vh-100-navbar bg-white py-5"
    >
      <h2 className="fs-1 fw-bold text-center">Contattaci</h2>
      <p className="text-center">Ecco dove e come trovarci</p>
      <Container className="mt-5">
        <Row>
          {contacts.map((contact) => (
            <Col lg={contact.cols} key={contact.title}>
              <div className="bg-light shadow d-flex flex-column justify-content-center align-items-center">
                <i
                  className={`bi bi-${contact.icon} text-primary fs-2 py-2`}
                ></i>
                <p className="fw-bold fs-4 mb-1">{contact.title}</p>
                <p>{contact.content}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col lg="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11276.998707013416!2d9.6990928!3d45.040155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8aa49abaa3e723b!2sAssociazione%20Sportiva%20Yama%20Arashi!5e0!3m2!1sit!2sit!4v1666544043948!5m2!1sit!2sit"
              width="100%"
              height={350}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google maps"
            />
          </Col>
          <Col lg="6">
            <Form
              className="d-flex flex-column"
              action="mailto:infoyama@yama-arashi.org"
              method="post"
              encType="text/plain"
            >
              <Row>
                <Col lg="6">
                  <Form.Control type="text" placeholder="Nome" name="nome" />
                </Col>
                <Col lg="6">
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    name="email"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg="12">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Messaggio"
                    name="messaggio"
                  />
                </Col>
              </Row>
              <Button className="mt-4" type="submit">
                Inviaci un messaggio
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
