import Hero from './sections/Hero';
import Projects from './sections/Projects'
import Experience from './sections/Experience';

function App() {
  return (
    <main className="bg-background min-h-screen text-textMain selection:bg-primary/30">
      <Hero />
      <Projects />
      <Experience />
    </main>
  )
}

export default App;