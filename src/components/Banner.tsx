import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Banner() {
  return (
    <Navbar bg="primary" className="d-none d-lg-flex">
      <Container className="text-light d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <a
            href="mailto:infoyama@yama-arashi.org"
            className="text-reset text-decoration-none"
          >
            <i className="bi bi-envelope fs-5"></i> infoyama@yama-arashi.org
          </a>
          <a
            href="tel:+39 0523 618468"
            className="text-reset text-decoration-none"
          >
            <i className="bi bi-telephone fs-5"></i> +39 0523 618468
          </a>
        </div>
        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com/Noi.Yama.Family/"
            target="_blank"
            rel="noreferrer"
            className="text-reset text-decoration-none"
          >
            <i className="ms-auto bi bi-facebook fs-5"></i>
          </a>
          <a
            href="https://www.instagram.com/yama_arashi_official/"
            target="_blank"
            rel="noreferrer"
            className="text-reset text-decoration-none"
          >
            <i className="bi bi-instagram fs-5"></i>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
