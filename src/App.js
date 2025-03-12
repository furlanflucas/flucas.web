import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Importing our styles
import CustomNavbar from "./components/Navbar"; // Your Navbar component

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Use only the Custom Navbar Component */}
      <CustomNavbar />

      {/* Page Content */}
      <div className="container mt-5">
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
      </div>
    </div>
  );
}

export default App;