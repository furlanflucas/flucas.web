import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Importing our styles

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Modern Navbar */}
      <Navbar expand="lg" className="bg-dark border-bottom border-info">
        <Container>
          {/* Logo Image */}
          <Navbar.Brand href="/">
            <img
              src="placeholder"
              alt="flucas.io logo"
              height="50" // Adjust size if needed
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#about" className="text-info fw-bold">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="text-info fw-bold">
                Works
              </Nav.Link>
              <Nav.Link href="#contact" className="text-info fw-bold">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="mt-5">
        <section id="about" className="mb-5">
          <h2 className="text-info">About Me</h2>
          <p>Hello! I'm a passionate Cloud Engineer with experience in data pipelines and cloud solutions.</p>
        </section>

        <section id="projects" className="mb-5">
          <h2 className="text-info">Works</h2>
          <ul className="list-group">
            <li className="list-group-item bg-dark text-light border-info">
              Real-Time Fraud Detection
            </li>
            <li className="list-group-item bg-dark text-light border-info">
              Looker Dashboard for Data Analysis
            </li>
            <li className="list-group-item bg-dark text-light border-info">
              Cloud Infrastructure Automation
            </li>
          </ul>
        </section>

        <section id="contact" className="text-center mt-5">
          <h2 className="text-info">Contact Me</h2>
          <p>Email: your.email@example.com</p>
        </section>
      </Container>
    </div>
  );
}

export default App;
