import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaJava, FaReact, FaGithub, FaWhatsapp, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiFlutter } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import photo from '../assets/photo.png';
//import cvFile from '../assets/CV-Derick-POODA.pdf';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase mb-3 text-xl min-h-[30px]">
              <TypeAnimation
                sequence={[
                  'Développeur Web',
                  2000,
                  'Développeur Mobile',
                  2000,
                  'Développeur Full-stack',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-text leading-tight">
              Bonjour, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-success">
                Derick Pooda
              </span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl leading-relaxed">
              Je conçois des sites web, des applications web et mobiles complètes, de l'architecture au déploiement pour répondre à vos besoins.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-accent text-[#0F1115] rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Me contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="src\assets\CV_Pooda_Derick.pdf"
              className="px-8 py-4 border border-brand-accent text-brand-accent rounded-full font-medium hover:bg-brand-accent hover:text-white transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Télécharger CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 justify-center md:justify-start pt-4"
          >
            <a href="https://github.com/dez226" target="_blank" rel="noreferrer" className="p-3 bg-brand-card rounded-full hover:bg-brand-border border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-all text-brand-muted">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://wa.me//22607909544" target="_blank" rel="noreferrer" className="p-3 bg-brand-card rounded-full hover:bg-brand-border border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-all text-brand-muted">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="mailto:derickpooda@gmail.com" className="p-3 bg-brand-card rounded-full hover:bg-brand-border border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-all text-brand-muted">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 flex justify-center relative w-full max-w-[320px] md:max-w-none mx-auto"
        >
          {/* Tech Icons Floating */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:top-0 md:right-10 text-brand-accent bg-brand-card p-3 md:p-4 rounded-2xl border border-brand-border shadow-lg z-10"
          >
            <FaReact className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 md:bottom-10 md:right-4 text-orange-500 bg-brand-card p-3 md:p-4 rounded-2xl border border-brand-border shadow-lg z-10"
          >
            <FaJava className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [-5, 15, -5] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 md:top-10 md:left-10 text-green-500 bg-brand-card p-3 md:p-4 rounded-2xl border border-brand-border shadow-lg z-10"
          >
            <SiSpringboot className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [15, -5, 15] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 md:bottom-20 md:left-4 text-blue-400 bg-brand-card p-3 md:p-4 rounded-2xl border border-brand-border shadow-lg z-10"
          >
            <SiFlutter className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [-8, 12, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 -right-6 md:-right-4 -translate-y-1/2 text-yellow-400 bg-brand-card p-3 md:p-4 rounded-2xl border border-brand-border shadow-lg z-10"
          >
            <FaPython className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>

          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-brand-accent/20 shadow-[0_0_60px_rgba(79,157,222,0.4)] hover:shadow-[0_0_80px_rgba(79,157,222,0.6)] transition-shadow duration-500">
            <img src={photo} alt="Derick Pooda" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
