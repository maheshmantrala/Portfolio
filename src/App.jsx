// src/App.jsx
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
export default function App() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Each section */}
      <section className="snap-start">
        <Navbar />
      </section>
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <About />
      </section>
       <section className="snap-start">
        <Experience />
      </section>
      <section className="snap-start">
        <Skills />
      </section>
        <section className="snap-start">
        <Projects />
         <section className="snap-start">
        <Contact />
      </section>
       <section className="snap-start">
        <Footer />
      </section>
      </section>
    </div>
  );
}
