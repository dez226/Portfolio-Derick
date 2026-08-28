import { motion } from 'framer-motion';
import { Code2, Server, Smartphone } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Server className="w-6 h-6 text-brand-accent" />,
      title: "Backend Java/Spring",
      desc: "Développement d'APIs robustes"
    },
    {
      icon: <Code2 className="w-6 h-6 text-brand-accent" />,
      title: "Frontend React",
      desc: "Interfaces web interactives"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-accent" />,
      title: "Mobile Flutter",
      desc: "Applications multi-plateformes"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-brand-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-brand-accent rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6 text-brand-muted text-lg leading-relaxed"
          >
            <p>
              Passionné par la technologie et ses avancées constantes, j'ai toujours eu la curiosité de comprendre ce qui se cache derrière une application : son fonctionnement, sa conception, et surtout la manière dont elle peut simplifier le quotidien des utilisateurs.
            </p>
            <p>
              Cette fascination pour le numérique m'a naturellement conduit vers le développement, où je peux transformer cette curiosité en solutions concrètes et utiles.
            </p>
            <div className="pt-4 flex items-center gap-4 text-brand-text">
              <span className="font-semibold text-brand-accent">Localisation:</span> Ouagadougou, Burkina Faso
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-brand-card p-6 rounded-2xl border border-brand-border hover:border-brand-accent/50 transition-colors"
              >
                <div className="bg-brand-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-brand-muted">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
