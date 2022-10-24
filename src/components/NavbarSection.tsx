import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

const navBarItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Servizi" },
  { href: "#why-us", label: "Perchè Noi" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "F.A.Q" },
  {
    href: "#contact",
    label: "Iscriviti",
    className: "text-light bg-primary rounded ps-2 ms-2",
  },
];

const navBarItemsDefaultClasses = "px-2";

export function NavbarSection({ currentSection }: { currentSection: string }) {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="py-3 shadow">
      <Container>
        <Navbar.Brand href="#home" aria-label="Yama Arashi Logo">
          <img src={logo} height="45" alt="yama arashi logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav
            as="ul"
            activeKey={`#${currentSection}`}
            className="ms-auto fw-bold"
          >
            {navBarItems.map((navBarItem) => (
              <Nav.Item as="li" key={navBarItem.href}>
                <Nav.Link
                  href={navBarItem.href}
                  className={`${navBarItemsDefaultClasses} ${
                    navBarItem.className ?? ""
                  }`}
                >
                  {navBarItem.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
