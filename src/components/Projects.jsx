import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Système de gestion de lits hospitaliers",
    description: "Système multi-plateforme pour la gestion opérationnelle des lits en milieu hospitalier. Conçu pour les administrateurs, le personnel soignant et les patients, il intègre une interface web d'administration, une application mobile pour les infirmiers et un portail public. L'authentification est sécurisée par JWT et les mises à jour d'état se font en temps réel via WebSockets.",
    stack: ["Spring Boot", "React", "Flutter", "MySQL", "JWT", "WebSockets", "Docker", "Dokploy"],
    role: "Stagiaire développeur — recueil des besoins, conception technique, implémentation full-stack (authentification JWT, temps réel WebSockets, déploiement Docker/Dokploy).",
    status: "Terminé",
    githubFrontend: "https://github.com/Projet-Gestion-lit/Gestion-lit-site-web-APK",
    githubBackend: null,
    liveDemo: null,
    screenshots: ["https://res.cloudinary.com/dycdqyspf/image/upload/v1787914073/4125b77d-d71a-4cf2-8f32-31cfbc1e2fd5.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787913871/mobile_ffntvi.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787914017/e612eea7-63e4-4dd7-9bd1-7333130855ac.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787913964/1077f2d1-e140-4595-a320-a21c94dee67f.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787913936/2b49540f-d409-4547-8afa-8ad3ff7fa0e1.png"]
  },
  {
    title: "Site web associatif",
    description: "Conception d'un site vitrine/institutionnel pour une association œuvrant dans la protection de l'environnement et le développement durable, présentant ses missions, actions et projets. Le site met l'accent sur l'accessibilité, la lisibilité et un design épuré qui reflète les valeurs de l'association.",
    stack: ["React", "Vite", "Tailwind CSS"],
    role: "Développeur — conception et développement complet du site pour le compte du client.",
    status: "En pause",
    githubSource: "#",
    liveDemo: null,
    screenshots: []
  },
  {
    title: "Intégration de moyens de paiement (Ligdicash)",
    description: "Backend transactionnel intégrant l'API Ligdicash pour permettre les paiements mobiles via Orange Money, Moov Money et autres opérateurs. Le projet expose une API REST sécurisée permettant d'initier, suivre et valider des transactions de manière fiable.",
    stack: ["Java", "Spring Boot", "API Ligdicash", "API REST"],
    role: "Initiateur et développeur solo — conception et implémentation complète de la logique transactionnelle.",
    status: "Terminé",
    githubSource: "https://github.com/dez226/integration-ligdicash",
    liveDemo: null,
    screenshots: []
  },
  {
    title: "Point de Vente & Gestion de Stock (Supermarché)",
    description: "Système complet de point de vente (caisse) couplé à une gestion de stock en temps réel, destiné aux supermarchés. Comprend la gestion des produits, des catégories, des fournisseurs, des ventes et la génération de rapports. Les images produits sont hébergées sur Cloudinary.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Cloudinary"],
    role: "Développeur en équipe — principalement backend (API REST, modélisation BDD), avec intervention sur le frontend React.",
    status: "Terminé",
    githubFrontend: "https://github.com/Projet-Gestion-Stock/SuperMarche-Frontend",
    githubBackend: "https://github.com/Projet-Gestion-Stock/SuperMarche-Backend.git",
    liveDemo: null,
    screenshots: ["https://res.cloudinary.com/dycdqyspf/image/upload/v1787914565/1fec9ed0-0286-4496-a5ab-81e2bad1567a.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787914552/32f10275-edff-4c17-8b27-5f16c52b31f5.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787914508/1b6b2490-61e4-4fd0-a174-135d138f4bb1.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787914486/b2787afe-d644-4189-9f0b-7fca4d5ff5e5.png", "https://res.cloudinary.com/dycdqyspf/image/upload/v1787914466/803a71ae-3197-4bc5-af1a-92182431a00f.png"]
  }
];

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 bg-brand-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets</h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-brand-muted">Cliquez sur un projet pour voir les détails.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="text-left bg-brand-card rounded-3xl overflow-hidden border border-brand-border hover:border-brand-accent/50 transition-all group flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                {/* Top row: status + arrow */}
                <div className="flex justify-between items-start mb-5">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyle(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-brand-muted group-hover:text-brand-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-brand-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Stack badges */}
                <div className="mt-auto flex flex-wrap gap-2 pt-5 border-t border-brand-border">
                  {project.stack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-lg border border-brand-accent/20">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs font-medium text-brand-muted bg-brand-bg px-2.5 py-1 rounded-lg border border-brand-border">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
