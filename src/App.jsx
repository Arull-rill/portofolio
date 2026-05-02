import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}