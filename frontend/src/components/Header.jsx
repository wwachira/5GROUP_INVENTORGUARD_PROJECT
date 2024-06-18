import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const Header = () => {

  return (
    <Container fluid>
      <span> 
      <a href="https://web.facebook.com/" className="text-blue  hover:text-indigo-800">
                <FaFacebook size={34} />
              </a>
              <a href="https://twitter.com/" className="text-grey  hover:text-indigo-800">
                <FaTwitter size={34} />
              </a>
              <a href="https://www.instagram.com/" className="text-orange  hover:text-indigo-800">
                <FaInstagram size={34} />
              </a>
              <a href="https://www.linkedin.com/" className="text-blue  hover:text-indigo-800">
                <FaLinkedin size={34} />
              </a>
              <a href="https://www.linkedin.com/" className="text-blue  hover:text-indigo-800">
                <FaGithub size={34} />
              </a>
      </span>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <h2>Bei Nafuu SPA-KE</h2>
          <p className="lead">Indulge in Luxury, Embrace Wellness</p>
        </NavbarBrand>
        <NavbarToggler onClick={() => console.log('Toggle Nav')} />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/booking">Book Now</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;