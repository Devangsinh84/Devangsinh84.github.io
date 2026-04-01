import { motion } from 'framer-motion';
import { experience, skills } from '../data/experience';

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-surface/50 border-t border-white/5 relative" id="experience">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: The Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-textMain mb-10">
            Career <span className="text-primary">Trajectory</span>
          </h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0a0a0a] z-10 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-background border border-white/5 rounded-2xl group-hover:border-primary/20 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary font-mono text-xs">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-lg text-textMain">{item.title}</h3>
                    <h4 className="text-sm text-textMuted mb-4">{item.organization}</h4>
                    <p className="text-textMuted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right Column: The Skill Matrix */}
        <div>
          <h2 className="text-3xl font-bold text-textMain mb-10">
            Technical <span className="text-secondary">Matrix</span>
          </h2>
          
          <div className="space-y-8">
            {/* AI & Data */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-background border border-white/5 rounded-2xl"
            >
              <h3 className="text-primary font-mono text-sm mb-4">_AI & Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-surface text-textMain rounded-md text-sm border border-white/5 hover:border-primary/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Core Engineering */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-background border border-white/5 rounded-2xl"
            >
              <h3 className="text-secondary font-mono text-sm mb-4">_Core Engineering</h3>
              <div className="flex flex-wrap gap-2">
                {skills.engineering.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-surface text-textMain rounded-md text-sm border border-white/5 hover:border-secondary/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-background border border-white/5 rounded-2xl"
            >
              <h3 className="text-textMuted font-mono text-sm mb-4">_Infrastructure & Architecture</h3>
              <div className="flex flex-wrap gap-2">
                {skills.infrastructure.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-surface text-textMain rounded-md text-sm border border-white/5 hover:border-white/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}