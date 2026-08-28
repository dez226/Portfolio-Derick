import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à collaborer ?</h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            Je suis toujours ouvert aux nouvelles opportunités. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:derickpooda@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-brand-card rounded-full font-medium hover:bg-brand-border border border-brand-border hover:border-brand-accent/50 transition-all w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5 text-brand-accent" />
            <span>derickpooda@gmail.com</span>
          </a>
          
          <a
            href="tel:+22607909544"
            className="flex items-center gap-3 px-8 py-4 bg-brand-card rounded-full font-medium hover:bg-brand-border border border-brand-border hover:border-brand-accent/50 transition-all w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5 text-brand-accent" />
            <span>+226 07 90 95 44</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center gap-6"
        >
          <div className="p-3 bg-brand-card rounded-full flex items-center gap-2 text-brand-muted cursor-default">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Ouagadougou, BF</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
