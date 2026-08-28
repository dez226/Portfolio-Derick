import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "Langages",
      skills: ["Java", "Dart", "Python", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks / Librairies",
      skills: ["Spring Boot", "React", "Flutter"]
    },
    {
      title: "Bases de données",
      skills: ["MySQL", "Firebase", "SQLite"]
    },
    {
      title: "Outils & Autres",
      skills: ["Git/GitHub", "Docker", "Dokploy", "API REST", "WebSockets", "JWT", "Cloudinary"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences techniques</h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-card p-8 rounded-3xl border border-brand-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-brand-text">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-brand-bg rounded-lg text-sm font-medium text-brand-muted border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
