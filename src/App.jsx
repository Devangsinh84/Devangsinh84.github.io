import Hero from './sections/Hero';
import Projects from './sections/Projects'

function App() {
  return (
    <main className="bg-background min-h-screen text-textMain selection:bg-primary/30">
      <Hero />
      <Projects />
    </main>
  )
}

export default App;