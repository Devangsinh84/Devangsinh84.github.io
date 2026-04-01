import Hero from './sections/Hero';
import Projects from './sections/Projects'
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="bg-background min-h-screen text-textMain selection:bg-primary/30">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default App;