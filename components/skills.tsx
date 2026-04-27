'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import {
  FolderKanban,
  BrainCircuit,
  Cloud,
  BarChart3,
  PieChart,
  Database,
  Shield,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';

/* ── Icône + couleur accent par catégorie ── */
const CATEGORY_META: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'Gestion de Projet BI':       { icon: FolderKanban, color: '#1A3A6B', bg: '#1E6FD912' },
  'BI Project Management':      { icon: FolderKanban, color: '#1A3A6B', bg: '#1E6FD912' },
  'Qlik Expertise':             { icon: BrainCircuit, color: '#1E6FD9', bg: '#1E6FD912' },
  'Migration & Architecture':   { icon: Cloud,        color: '#2D5BA3', bg: '#2D5BA308' },
  'Modélisation & Performance': { icon: BarChart3,    color: '#1A3A6B', bg: '#1A3A6B0D' },
  'Modeling & Performance':     { icon: BarChart3,    color: '#1A3A6B', bg: '#1A3A6B0D' },
  'Business Intelligence':      { icon: PieChart,     color: '#1E6FD9', bg: '#1E6FD912' },
  'Data Management':            { icon: Database,     color: '#2D5BA3', bg: '#2D5BA308' },
  'Gouvernance & Sécurité':     { icon: Shield,       color: '#0f1e3d', bg: '#0f1e3d08' },
  'Governance & Security':      { icon: Shield,       color: '#0f1e3d', bg: '#0f1e3d08' },
};

const DEFAULT_META = { icon: BrainCircuit, color: '#1E6FD9', bg: '#1E6FD912' };

/* Carte Qlik mise en avant */
const FEATURED_IDX = 1;

/* Catégories ayant une certification à mettre en avant */
const CERT_CATEGORIES = new Set([
  'Business Intelligence',
]);

/* Label de certification par catégorie */
const CERT_LABEL: Record<string, { fr: string; en: string; skill: string }> = {
  'Business Intelligence': {
    fr: 'Certifiée Microsoft PL-300',
    en: 'Microsoft PL-300 Certified',
    skill: 'Power BI',
  },
};

/* Skill pill à mettre en avant dans ces catégories */
const HIGHLIGHT_SKILL: Record<string, string> = {
  'Business Intelligence': 'Power BI',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Skills() {
  const { language } = useLanguage();
  const data = cvData[language];

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Glow ambiant bas-gauche */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(30,111,217,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#1E6FD9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6FD9]">
              {language === 'fr' ? 'Compétences' : 'Skills'}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f1e3d] max-w-xl leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {language === 'fr'
              ? "Un spectre complet de l'expertise BI"
              : 'A full spectrum of BI expertise'}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-lg leading-relaxed">
            {language === 'fr'
              ? `${data.skills.reduce((n, s) => n + s.items.length, 0)} compétences couvrant l'ensemble du cycle décisionnel, de la modélisation à la gouvernance.`
              : `${data.skills.reduce((n, s) => n + s.items.length, 0)} skills covering the full BI lifecycle, from modeling to governance.`}
          </p>
        </motion.div>

        {/* ── Grille de cartes ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {data.skills.map((group, idx) => {
            const meta = CATEGORY_META[group.category] ?? DEFAULT_META;
            const Icon = meta.icon;
            const isFeatured = idx === FEATURED_IDX;
            const hasCert = CERT_CATEGORIES.has(group.category);
            const certLabel = CERT_LABEL[group.category];
            const highlightSkill = HIGHLIGHT_SKILL[group.category];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`group relative rounded-2xl p-6 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#0f1e3d] via-[#1A3A6B] to-[#1E6FD9] shadow-xl hover:shadow-2xl hover:shadow-[#1E6FD9]/30 border-2 border-[#4ECFB3]/30'
                    : 'border bg-card hover:shadow-md'
                }`}
                style={!isFeatured ? { borderColor: 'var(--border)' } : undefined}
              >
                {/* Effet de glow pour la carte Qlik */}
                {isFeatured && (
                  <>
                    <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full blur-2xl" />
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#4ECFB3] rounded-full blur-2xl" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-5"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                  </>
                )}

                {/* Badge "Expert" sur la carte Qlik */}
                {isFeatured && (
                  <div className="absolute -top-3 left-5 flex items-center gap-1.5 rounded-full bg-[#4ECFB3] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0f1e3d] shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    {language === 'fr' ? 'Expertise cœur' : 'Core expertise'}
                  </div>
                )}

                {/* En-tête catégorie */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isFeatured ? 'bg-white/20 backdrop-blur-sm group-hover:scale-105' : ''
                    }`}
                    style={!isFeatured ? { background: meta.bg } : undefined}
                  >
                    <Icon
                      className={`h-4 w-4 ${isFeatured ? 'text-white' : ''}`}
                      style={!isFeatured ? { color: meta.color } : undefined}
                    />
                  </div>
                  <h3
                    className={`text-sm font-semibold leading-tight ${isFeatured ? 'text-white' : ''}`}
                    style={!isFeatured ? { color: meta.color } : undefined}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Compteur d'items */}
                <p className={`mb-3 text-[11px] font-medium relative z-10 ${isFeatured ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {group.items.length} {language === 'fr' ? 'compétences' : 'skills'}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {group.items.map((skill, si) => {
                    const isHighlighted = highlightSkill && skill.startsWith(highlightSkill);
                    return (
                      <span
                        key={si}
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all ${
                          isFeatured
                            ? si < 3
                              ? 'bg-white text-[#1A3A6B] border-white shadow-md hover:scale-105'
                              : 'bg-white/10 text-white/90 border-white/20 hover:bg-white/15'
                            : isHighlighted
                            ? 'hover:scale-105'
                            : 'hover:bg-[#1E6FD9]/5'
                        }`}
                        style={
                          !isFeatured && isHighlighted
                            ? {
                                background: '#1E6FD9',
                                borderColor: '#1E6FD9',
                                color: '#ffffff',
                                fontWeight: 600,
                              }
                            : !isFeatured
                            ? {
                                background: 'var(--muted)',
                                borderColor: 'var(--border)',
                                color: 'var(--muted-foreground)',
                              }
                            : undefined
                        }
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>

                {/* Indicateur de certification — Qlik */}
                {isFeatured && (
                  <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#4ECFB3] animate-pulse" />
                      <p className="text-[10px] text-white/70 uppercase tracking-wider">
                        {language === 'fr' ? 'Certifiée Qlik Data Architect' : 'Qlik Data Architect Certified'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Indicateur de certification — Power BI et autres */}
                {hasCert && certLabel && (
                  <div className="mt-4 pt-4 border-t border-border relative z-10">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-3.5 w-3.5 text-[#1E6FD9] shrink-0" />
                      <p className="text-[10px] text-[#1E6FD9] font-semibold uppercase tracking-wider">
                        {certLabel[language]}
                      </p>
                    </div>
                  </div>
                )}

                {/* Ligne décorative basse au hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: isFeatured
                      ? 'linear-gradient(to right, #4ECFB3, transparent)'
                      : `linear-gradient(to right, ${meta.color}40, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Footer : total skills ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-border" />
          <span className="text-xs text-muted-foreground">
            {data.skills.reduce((n, s) => n + s.items.length, 0)}{' '}
            {language === 'fr' ? 'compétences au total' : 'skills in total'} ·{' '}
            {data.skills.length}{' '}
            {language === 'fr' ? 'domaines' : 'domains'}
          </span>
          <span className="h-px w-12 bg-border" />
        </motion.div>

      </div>
    </section>
  );
}