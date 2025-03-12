import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Importing our styles
import CustomNavbar from "./components/Navbar"; // Your Navbar component

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Use only the Custom Navbar Component */}
      <CustomNavbar />

       {/* About Me Section - Centered */}
       <div className="about-container">
        <img 
          src="your-photo.jpg" 
          alt="Your Name" 
          className="rounded-circle my-photo"
        />
        <h2 className="about-title mt-3">About Me</h2>
        <p>Hello! I'm a passionate Cloud Engineer with experience in data pipelines and cloud solutions.</p>
      </div>
    </div>
  );
}

export default App;