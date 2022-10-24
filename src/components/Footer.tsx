import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function Footer() {
  return (
    <>
      <Col xs>
        <Container className="d-flex justify-content-between align-items-center flex-wrap bg-white py-5">
          <Col sm="12" lg="3">
            <p className="fs-3 fw-bold">
              Yama<span className="text-primary">Arashi</span>
            </p>
            <p className="text-secondary">
              Via Galluzzi 10 <br />
              Piacenza, 29122 <br />
              Italia
            </p>
            <p className="text-secondary mb-1">
              <span className="fw-bold">Whatsapp:</span> +39 351 685 8728
            </p>
            <p className="text-secondary mb-1">
              <span className="fw-bold">Telefono:</span> +39 0523 618468
            </p>
            <p className="text-secondary">
              <span className="fw-bold">Email:</span> infoyama@yama-arashi.org
            </p>
          </Col>
          <Col lg="3">
            <p className="fw-bold">I nostri social</p>
            <p className="text-secondary">
              Cerchiamo di condividere alcuni dei momenti unici e stupendi che
              viviamo in palestra e durante le competizioni.
            </p>
            <div className="d-flex gap-1">
              <a
                href="https://www.facebook.com/Noi.Yama.Family/"
                target="_blank"
                rel="noreferrer"
                className="text-reset text-decoration-none bg-primary rounded d-flex justify-content-center align-items-center"
                style={{ width: "48px", height: "48px" }}
              >
                <i className="bi bi-facebook fs-5 text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/yama_arashi_official/"
                target="_blank"
                rel="noreferrer"
                className="text-reset text-decoration-none bg-primary rounded d-flex justify-content-center align-items-center"
                style={{ width: "48px", height: "48px" }}
              >
                <i className="bi bi-instagram fs-5 text-white"></i>
              </a>
            </div>
          </Col>
        </Container>
      </Col>
      <Container className="bg-light py-4">
        <Row>
          <Col xs>
            <Container className="d-flex justify-content-between align-items-center flex-wrap ">
              <div>
                © Copyright <span className="fw-bold">YamaArashi</span>. All
                Rights Reserved
              </div>
              {/* <div>
                Made in Italy 🇮🇹 da{"  "}
                <a
                  href="https://www.linkedin.com/in/mateusdnm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mateus De Nardo
                </a>
              </div> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
