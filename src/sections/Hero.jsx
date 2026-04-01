import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Subtle green glowing background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0,transparent_50%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="text-primary w-5 h-5" />
          <span className="font-mono text-primary text-sm uppercase tracking-wider">Status: Online & Ready</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-textMain tracking-tight mb-6">
          Devangsinh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gohil</span>
        </h1>

        <p className="text-xl text-textMuted mb-10 max-w-2xl mx-auto leading-relaxed">
          Software Engineer bridging the gap between traditional architecture and Enterprise AI.
          Building scalable, intelligent systems.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg font-mono hover:bg-primary/20 transition-all">
            View_Projects
          </button>
          <button className="px-8 py-3 text-textMain hover:text-primary transition-colors font-mono">
            Contact_Me()
          </button>
        </div>
      </motion.div>
    </section>
  );
}