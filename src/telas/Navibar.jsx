import {Navbar, Container, Nav} from 'react-bootstrap';
import '../assets/styles/nav.css'

function Navibar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg" className='nav' >
    <Container>
      <Navbar.Brand href="/">Projeto integrador</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Quem somos</Nav.Link>
          <Nav.Link href="#">Mapa</Nav.Link>
          <Nav.Link href="#">Contato</Nav.Link>
          <Nav.Link href="/instituicoes">Instituicoes</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navibar;
