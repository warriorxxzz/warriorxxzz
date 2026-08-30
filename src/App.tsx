import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AmbientBackground from "./components/ui/AmbientBackground";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Now from "./components/sections/Now";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import LearningJourney from "./components/sections/LearningJourney";
import Achievements from "./components/sections/Achievements";
import LessonsLearned from "./components/sections/LessonsLearned";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-text font-body antialiased">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Now />
        <Skills />
        <Projects />
        <LearningJourney />
        <Achievements />
        <LessonsLearned />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
