import Hero from './sections/Hero';
import Projects from './sections/Projects'
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import NeuralNode from './components/NeuralNode';

function App() {
  return (
    <main className="bg-[#020617] min-h-screen text-textMain selection:bg-primary/30 relative">
      
      {/* THE GLOBAL BACKGROUND: 
          We use "fixed" so it stays still while you scroll through the data */}
      <div className="fixed inset-0 z-0">
        <NeuralNode />
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}

export default App;