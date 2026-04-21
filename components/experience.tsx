'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import { CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function Experience() {
  const { language } = useLanguage();
  const data = cvData[language];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-primary"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {language === 'fr' ? 'Expérience' : 'Experience'}
          </h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="border-l-2 border-secondary pl-6 relative"
                variants={itemVariants}
              >
                <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />

                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.sector}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-secondary whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="mb-4 space-y-2">
                  {exp.achievements.map((achievement, achIdx) => (
                    <div key={achIdx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
