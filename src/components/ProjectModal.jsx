import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const statusStyle = (status) => {
  switch (status) {
    case 'Terminé':
      return 'bg-brand-success/10 text-brand-success border border-brand-success/20';
    case 'En cours':
      return 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20';
    default:
      return 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20';
  }
};

function Gallery({ screenshots }) {
  const [current, setCurrent] = useState(0);
  if (!screenshots || screenshots.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent((c) => (c + 1) % screenshots.length);

  return (
    <div className="mt-6">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
        Captures d'écran ({current + 1}/{screenshots.length})
      </h4>

      {/* Main viewer — fixed height, image fits inside */}
      <div className="relative w-full h-64 bg-brand-bg rounded-2xl overflow-hidden border border-brand-border flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            className="max-h-full max-w-full object-contain"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-card/80 backdrop-blur-sm rounded-full border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-colors text-brand-muted"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-card/80 backdrop-blur-sm rounded-full border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-colors text-brand-muted"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-brand-accent' : 'w-1.5 h-1.5 bg-white/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails strip */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {screenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${i === current ? 'border-brand-accent scale-105' : 'border-brand-border opacity-60 hover:opacity-100'}`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
      />

      {/* Drawer panel — slides from the right */}
      <motion.aside
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-card border-l border-brand-border z-[101] flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-6 pt-6 pb-4 border-b border-brand-border shrink-0">
          <div className="flex-1">
            <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full mb-2 ${statusStyle(project.status)}`}>
              {project.status}
            </span>
            <h2 className="text-xl font-bold text-brand-text leading-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-colors text-brand-muted shrink-0 mt-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Description</h4>
            <p className="text-brand-text text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Role */}
          <div className="p-4 bg-brand-bg rounded-2xl border border-brand-border">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1.5">Mon rôle</h4>
            <p className="text-brand-text text-sm leading-relaxed">{project.role}</p>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Stack technique</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium text-brand-accent bg-brand-accent/10 border border-brand-accent/20 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Liens</h4>
            <div className="flex flex-wrap gap-2">
              {project.githubFrontend && (
                <a href={project.githubFrontend} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-sm font-medium hover:border-brand-accent/50 hover:text-brand-accent transition-all text-brand-text">
                  <FaGithub className="w-4 h-4" /> Frontend
                </a>
              )}
              {project.githubBackend && (
                <a href={project.githubBackend} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-sm font-medium hover:border-brand-accent/50 hover:text-brand-accent transition-all text-brand-text">
                  <FaGithub className="w-4 h-4" /> Backend
                </a>
              )}
              {!project.githubFrontend && !project.githubBackend && project.githubSource && project.githubSource !== '#' && (
                <a href={project.githubSource} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-sm font-medium hover:border-brand-accent/50 hover:text-brand-accent transition-all text-brand-text">
                  <Code className="w-4 h-4" /> Code source
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-brand-accent text-white rounded-xl text-sm font-medium hover:bg-brand-accent/90 transition-all">
                  <ExternalLink className="w-4 h-4" /> Voir la démo
                </a>
              )}
              {!project.githubFrontend && !project.githubBackend && (!project.githubSource || project.githubSource === '#') && !project.liveDemo && (
                <span className="text-xs text-brand-muted italic">Aucun lien disponible</span>
              )}
            </div>
          </div>

          {/* Screenshots */}
          <Gallery screenshots={project.screenshots} />
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
