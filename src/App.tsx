import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AmbientBackground from "./components/ui/AmbientBackground";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import LearningJourney from "./components/sections/LearningJourney";
import Achievements from "./components/sections/Achievements";
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
        <LearningJourney />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
