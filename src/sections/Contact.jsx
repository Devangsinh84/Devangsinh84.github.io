import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Download, Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-transparent relative border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="text-primary w-5 h-5" />
            <span className="font-mono text-primary text-sm uppercase tracking-wider">Initialize_Connection()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Whether you are looking for a Software Engineer to architect scalable backends or an AI specialist to deploy Enterprise models, my inbox is open.
          </p>
        </motion.div>

        {/* The Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
          
          {/* Email */}
          <a href="mailto:devanggohil70@gmail.com" className="flex items-center p-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 group transition-all">
            <div className="p-3 bg-white/5 text-textMuted rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <span className="block text-sm font-mono text-textMuted">Email</span>
              <span className="block text-textMain group-hover:text-primary transition-colors">devanggohil70@gmail.com</span>
            </div>
          </a>

          {/* WhatsApp */}
          {/* 
          <a href="https://wa.me/+917046717948" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-surface border border-white/5 rounded-xl hover:border-[#25D366]/50 group transition-all">
            <div className="p-3 bg-white/5 text-textMuted rounded-lg group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <span className="block text-sm font-mono text-textMuted">WhatsApp</span>
              <span className="block text-textMain group-hover:text-[#25D366] transition-colors">+91 7046717948</span>
            </div>
          </a>
          */}

          {/* Direct Call */}
          {/* 
          <a href="tel:+33743647256" className="flex items-center p-4 bg-surface border border-white/5 rounded-xl hover:border-secondary/50 group transition-all">
            <div className="p-3 bg-white/5 text-textMuted rounded-lg group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <span className="block text-sm font-mono text-textMuted">Direct Line</span>
              <span className="block text-textMain group-hover:text-secondary transition-colors">+33 7 43 64 72 56</span>
            </div>
          </a>
          */}

          {/* GitHub */}
          <a href="https://github.com/Devangsinh84" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-surface border border-white/5 rounded-xl hover:border-white/30 group transition-all">
            <div className="p-3 bg-white/5 text-textMuted rounded-lg group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <div className="ml-4">
              <span className="block text-sm font-mono text-textMuted">GitHub</span>
              <span className="block text-textMain transition-colors">github.com/Devangsinh84</span>
            </div>
          </a>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/Devangsinh_Gohil_Resume_En_012026.pdf" 
            download
            className="flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
          
          <a 
            href="https://www.linkedin.com/in/devangsinh-gohil-70a42a239/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-surface border border-white/10 text-textMain font-medium rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            Connect on LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}