'use client';

import { Easing, motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import { GraduationCap, BadgeCheck, MapPin, CalendarDays, Languages } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as Easing},
});

/* Couleur de l'issuer de certification */
const CERT_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Microsoft: { bg: '#1E6FD912', color: '#1E6FD9', border: '#1E6FD930' },
  Qlik:      { bg: '#0f1e3d0D', color: '#0f1e3d', border: '#0f1e3d25' },
};
const DEFAULT_CERT = { bg: '#2D5BA308', color: '#2D5BA3', border: '#2D5BA330' };

/* Niveau de langue → barre de progression */
const LANG_LEVEL_WIDTH: Record<string, string> = {
  Natif: '100%', Native: '100%',
  Professionnel: '80%', Professional: '80%',
  Courant: '70%', Fluent: '70%',
  Intermédiaire: '50%', Intermediate: '50%',
};

export function Education() {
  const { language } = useLanguage();
  const data = cvData[language];

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow ambiant */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(30,111,217,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#1E6FD9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6FD9]">
              {language === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f1e3d] leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {language === 'fr' ? 'Parcours académique & expertises validées' : 'Academic background & validated expertise'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

          {/* ══ Colonne gauche : Formation ══ */}
          <div>
            <motion.div {...fadeUp(0.06)} className="flex items-center gap-2.5 mb-7">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1E6FD912]">
                <GraduationCap className="h-4 w-4 text-[#1E6FD9]" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E6FD9]">
                {language === 'fr' ? 'Formation' : 'Education'}
              </h3>
            </motion.div>

            {/* Timeline éducation */}
            <div className="relative pl-5">
              {/* Ligne verticale */}
              <div
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{
                  background: 'linear-gradient(to bottom, #1E6FD9, #1E6FD915)',
                }}
              />

              <div className="space-y-5">
                {data.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp(0.1 + idx * 0.08)}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      aria-hidden
                      className="absolute -left-[21px] top-4 h-3 w-3 rounded-full border-2 border-white"
                      style={{
                        background: idx === 0 ? '#1E6FD9' : '#d1dff7',
                        boxShadow: idx === 0 ? '0 0 0 3px #1E6FD920' : 'none',
                      }}
                    />

                    <div
                      className="rounded-xl border bg-card px-5 py-4 transition-shadow hover:shadow-sm"
                      style={idx === 0 ? { borderColor: '#1E6FD930', borderWidth: '1.5px' } : {}}
                    >
                      {/* Diplôme */}
                      <p className="text-sm font-semibold text-[#0f1e3d] leading-tight mb-1.5">
                        {edu.degree}
                      </p>

                      {/* École */}
                      <p className="text-sm font-medium text-[#1E6FD9]">{edu.school}</p>

                      {/* Méta */}
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-medium"
                          style={{ color: '#1E6FD9' }}>
                          <CalendarDays className="h-3 w-3" />
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ Colonne droite : Certifications + Langues ══ */}
          <div className="space-y-8">

            {/* ── Certifications ── */}
            <div>
              <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-7">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0f1e3d0D]">
                  <BadgeCheck className="h-4 w-4 text-[#0f1e3d]" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0f1e3d]">
                  {language === 'fr' ? 'Certifications' : 'Certifications'}
                </h3>
              </motion.div>

              <div className="space-y-3">
                {data.certifications.map((cert, idx) => {
                  const c = CERT_COLORS[cert.issuer] ?? DEFAULT_CERT;
                  return (
                    <motion.div
                      key={idx}
                      {...fadeUp(0.16 + idx * 0.08)}
                      className="flex items-start gap-4 rounded-xl border bg-card px-5 py-4 transition-shadow hover:shadow-sm"
                      style={{ borderColor: c.border }}
                    >
                      {/* Issuer badge */}
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold"
                        style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
                      >
                        {cert.issuer.slice(0, 2).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                          style={{ color: c.color }}>
                          {cert.issuer}
                        </p>
                        <p className="text-sm font-medium text-[#0f1e3d] leading-tight">
                          {cert.name.replace(/^certification\s*/i, '')}
                        </p>
                        {cert.year && (
                          <p className="mt-1 text-[11px] text-muted-foreground">{cert.year}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── Langues ── */}
            <div>
              <motion.div {...fadeUp(0.22)} className="flex items-center gap-2.5 mb-7">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2D5BA308]">
                  <Languages className="h-4 w-4 text-[#2D5BA3]" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2D5BA3]">
                  {language === 'fr' ? 'Langues' : 'Languages'}
                </h3>
              </motion.div>

              <div className="space-y-4">
                {data.languages.map((lang, idx) => {
                  const width = LANG_LEVEL_WIDTH[lang.level] ?? '60%';
                  const isNative = width === '100%';
                  return (
                    <motion.div key={idx} {...fadeUp(0.28 + idx * 0.07)}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#0f1e3d]">
                          {lang.language}
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                          style={
                            isNative
                              ? { background: '#1E6FD912', color: '#1E6FD9', border: '1px solid #1E6FD930' }
                              : { background: 'var(--muted)', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }
                          }
                        >
                          {lang.level}
                        </span>
                      </div>

                      {/* Barre de progression */}
                      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.3 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: isNative
                              ? 'linear-gradient(to right, #1A3A6B, #1E6FD9)'
                              : 'linear-gradient(to right, #2D5BA3, #6b93d6)',
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-border" />
          <span className="text-xs text-muted-foreground">
            {data.education.length}{' '}
            {language === 'fr' ? 'diplômes' : 'degrees'}{' · '}
            {data.certifications.length}{' '}
            {language === 'fr' ? 'certifications' : 'certifications'}{' · '}
            {data.languages.length}{' '}
            {language === 'fr' ? 'langues' : 'languages'}
          </span>
          <span className="h-px w-12 bg-border" />
        </motion.div>

      </div>
    </section>
  );
}