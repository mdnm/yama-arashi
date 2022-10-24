import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import sponsor1 from "../assets/sponsor1.jpeg";
import sponsor2 from "../assets/sponsor2.jpeg";
import sponsor3 from "../assets/sponsor3.jpeg";
import sponsor4 from "../assets/sponsor4.jpeg";
import sponsor5 from "../assets/sponsor5.jpeg";

const sponsors = [
  {
    image: sponsor1,
    altText: "ClasseViva",
    href: "https://web.spaggiari.eu/sdf/app/default/cvv.php?vista=scheda_prodotto",
  },
  {
    image: sponsor2,
    altText: "Fornaroli Carta",
    href: "https://fornarolipaper.com",
  },
  {
    image: sponsor3,
    altText: "Tmv Molinari",
    href: "https://www.tmvmolinari.it",
  },
  {
    image: sponsor4,
    altText: "Omnia Pubblicita",
    href: "https://www.omniapubblicita.com",
  },
  {
    image: sponsor5,
    altText: "Le Specialità",
    href: "https://www.lespecialita.it",
  },
];

export function SponsorsSection() {
  return (
    <Container
      id="sponsors"
      data-name="sponsors"
      className="d-flex flex-column justify-content-center align-items-center min-vh-100-navbar bg-white py-5"
    >
      <h2 className="fs-1 fw-bold text-center">I nostri Sponsor</h2>
      <Row className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-5 px-5">
        {sponsors.map((sponsor, index) => (
          <a
            href={sponsor.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "500px" }}
          >
            <Image fluid src={sponsor.image} alt={sponsor.altText} />
          </a>
        ))}
      </Row>
    </Container>
  );
}
