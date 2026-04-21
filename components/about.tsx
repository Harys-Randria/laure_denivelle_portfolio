'use client';

import { Easing, motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import {
  BrainCircuit,
  Cloud,
  BarChart3,
  Users,
  Shield,
  Database,
  FolderKanban,
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as Easing },
});

/* Icône associée à chaque catégorie de compétences */
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Gestion de Projet BI':          FolderKanban,
  'BI Project Management':         FolderKanban,
  'Qlik Expertise':                BrainCircuit,
  'Migration & Architecture':      Cloud,
  'Modélisation & Performance':    BarChart3,
  'Modeling & Performance':        BarChart3,
  'Business Intelligence':         BarChart3,
  'Data Management':               Database,
  'Gouvernance & Sécurité':        Shield,
  'Governance & Security':         Shield,
};

/* Quelques points-clés extraits du about pour les highlight cards */
const HIGHLIGHTS = {
  fr: [
    { value: '10+', label: "ans d'expérience BI" },
    { value: '4',   label: 'secteurs couverts' },
    { value: '2',   label: 'certifications expert' },
    { value: '100%', label: 'cycle BI maîtrisé' },
  ],
  en: [
    { value: '10+',  label: 'years BI experience' },
    { value: '4',    label: 'industries covered' },
    { value: '2',    label: 'expert certifications' },
    { value: '100%', label: 'full BI lifecycle' },
  ],
};

export function About() {
  const { language } = useLanguage();
  const data = cvData[language];
  const highlights = HIGHLIGHTS[language];

  /* On prend les 3 premières catégories comme "piliers" affichés en cards */
  const pillars = data.skills.slice(0, 3);

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/40">

      {/* Décoration : ligne verticale gauche */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-px"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #1E6FD920 30%, #1E6FD920 70%, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* ── Section label ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <span className="h-px flex-1 max-w-[40px] bg-[#1E6FD9]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6FD9]">
            {language === 'fr' ? 'À propos' : 'About'}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-start">

          {/* ── Colonne gauche : texte ── */}
          <div className="space-y-8">

            <motion.h2
              {...fadeUp(0.06)}
              className="text-3xl sm:text-4xl font-bold leading-tight text-[#0f1e3d]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {language === 'fr'
                ? 'Consultante BI Senior & Experte Qlik'
                : 'Senior BI Consultant & Qlik Expert'}
            </motion.h2>

            {/* About texte complet — découpé en deux paragraphes visuels */}
            <motion.div {...fadeUp(0.12)} className="space-y-4">
              {data.about.split('. ').reduce<string[][]>((acc, s, i) => {
                const half = Math.ceil(data.about.split('. ').length / 2);
                if (i < half) acc[0] = [...(acc[0] || []), s];
                else acc[1] = [...(acc[1] || []), s];
                return acc;
              }, []).map((sentences, pi) => (
                <p
                  key={pi}
                  className="text-base leading-[1.85] text-foreground/80"
                  style={pi === 0 ? { borderLeft: '3px solid #1E6FD9', paddingLeft: '1rem' } : {}}
                >
                  {sentences.join('. ').trim()}{pi === 0 ? '.' : ''}
                </p>
              ))}
            </motion.div>
          </div>

          {/* ── Colonne droite : piliers de compétences ── */}
          <motion.div
            {...fadeUp(0.16)}
            className="space-y-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-5">
              {language === 'fr' ? 'Domaines clés' : 'Core expertise'}
            </p>

            {pillars.map((pillar, i) => {
              const Icon = CATEGORY_ICONS[pillar.category] ?? BrainCircuit;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.18 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-sm"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: i === 0 ? '#1E6FD912' : '#0f1e3d08' }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: i === 0 ? '#1E6FD9' : '#0f1e3d' }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {pillar.category}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
                        {pillar.items.slice(0, 4).join(' · ')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Lien vers section compétences */}
            <a
              href="#skills"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-[#1E6FD9] hover:underline underline-offset-4"
            >
              {language === 'fr' ? 'Voir toutes les compétences' : 'See all skills'}
              <span aria-hidden>→</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}