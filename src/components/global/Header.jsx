import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const links = [
    { text: "Home", href: "/home" },
    { text: "About", href: "/about" },
    { text: "Schedule", href: "/schedule" },
    { text: "Speakers", href: "/speakers" },
    { text: "Tickets", href: "/tickets" },
    { text: "Venue", href: "/venue" },
    { text: "Testimonials", href: "/testimonials" },

    { text: "Contact", href: "/contact" },
  ];
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Eventia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {links.map((l, i) => (
                <NavLink key={i} to={l.href} className="hlink">
                  {l.text}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
