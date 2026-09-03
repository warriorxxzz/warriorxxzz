import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AmbientBackground from "./components/ui/AmbientBackground";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills"; // Skills pehle
import Projects from "./components/sections/Projects"; // Phir Projects
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-text font-body antialiased">
      <AmbientBackground />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
