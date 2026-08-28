import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function ExperienceAndEducation() {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Stagiaire Développeur",
      company: "CHU Bogodogo",
      period: "Mai — Août 2026",
      desc: "Maintenance évolutive du système de gestion de lits hospitaliers : correction de bugs, optimisation des performances et formation des utilisateurs finaux au système.",
      type: 'work'
    },
    {
      title: "Stagiaire Développeur",
      company: "CHU Bogodogo",
      period: "Juillet — Septembre 2025",
      desc: "Conception et déploiement d'un système 3-plateformes utilisé en conditions réelles.",
      type: 'work'
    }
  ];

  const educations = [
    {
      title: "Licence en génie logiciel",
      company: "Université de l'Unité Africaine",
      period: "2025 — 2026 (en cours)",
      desc: "Spécialisation en génie logiciel : architecture logicielle, développement d'applications, bases de données et gestion de projet.",
      type: 'edu'
    }
  ];

  const tabs = [
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'education', label: 'Formation', icon: GraduationCap },
  ];

  const activeItems = activeTab === 'experience' ? experiences : educations;

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours</h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-2 mb-10 bg-brand-card p-1.5 rounded-2xl border border-brand-border w-fit mx-auto md:mx-0"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === id
                  ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {activeItems.map((item, idx) => (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex gap-6 items-start relative">
                {/* Icon - desktop */}
                <div className="hidden md:flex flex-col items-center mt-1 relative z-10 shrink-0">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${
                    activeTab === 'experience'
                      ? 'bg-brand-card border-brand-accent/40'
                      : 'bg-brand-card border-brand-success/40'
                  }`}>
                    {activeTab === 'experience'
                      ? <Briefcase className="w-5 h-5 text-brand-accent" />
                      : <GraduationCap className="w-5 h-5 text-brand-success" />
                    }
                  </div>
                  {idx < activeItems.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-brand-accent/30 to-transparent min-h-[40px]" />
                  )}
                </div>

                {/* Icon + line - mobile */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-32px] w-px bg-brand-accent/30"></div>
                <div className={`md:hidden absolute left-[-4px] top-1.5 w-3 h-3 rounded-full ${
                  activeTab === 'experience' ? 'bg-brand-accent' : 'bg-brand-success'
                }`}></div>

                {/* Card */}
                <div className="flex-1 bg-brand-card p-6 md:p-8 rounded-3xl border border-brand-border hover:border-brand-accent/50 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h3>
                      <div className={`font-medium text-sm mt-1 ${
                        activeTab === 'experience' ? 'text-brand-accent' : 'text-brand-success'
                      }`}>
                        {item.company}
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-brand-bg rounded-full text-xs font-medium text-brand-muted border border-brand-border whitespace-nowrap w-fit shrink-0">
                      {item.period}
                    </div>
                  </div>
                  <p className="text-brand-muted leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
