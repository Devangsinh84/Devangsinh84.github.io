import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-transparent relative" id="work">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
            Intelligence <span className="text-primary">Ledger</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl">
            A curated selection of my recent architecture, spanning from Enterprise SDE to Deep Reinforcement Learning.
          </p>
        </div>

        {/* The 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 bg-surface/30 backdrop-blur-md border border-white/5 border border-white/5 rounded-2xl hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-background rounded-full text-textMuted border border-white/10">
                    {project.status}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-primary text-sm font-mono mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-textMain">{project.title}</h3>
                </div>

                <p className="text-textMuted mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 text-textMuted rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}