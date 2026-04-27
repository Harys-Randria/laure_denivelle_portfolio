'use client';

import { Easing, motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import Image from 'next/image';
import { Mail, Linkedin, Download, BadgeCheck } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1]as Easing },
});

const STATS_EXTRA = {
  fr: { label: 'Utilisateurs impactés', value: '500+' },
  en: { label: 'Users Impacted', value: '500+' },
};

export function Hero() {
  const { language } = useLanguage();
  const data = cvData[language];

  const allStats = [
    ...data.stats,
    STATS_EXTRA[language],
  ].slice(0, 4);

  return (
    <section id="hero" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* ── Subtle background grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1E6FD908 1px, transparent 1px), linear-gradient(to bottom, #1E6FD908 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Ambient glow top-right ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 -z-10 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(30,111,217,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-6">

            {/* Availability badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1E6FD920] bg-[#1E6FD908] px-3.5 py-1.5 text-xs font-medium text-[#1A3A6B]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ECFB3] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ECFB3]" />
                </span>
                {language === 'fr' ? 'Disponible pour missions' : 'Available for assignments'}
              </span>
            </motion.div>

            {/* Name + titles */}
            <motion.div {...fadeUp(0.08)} className="space-y-1">
              <h1
                className="text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight text-[#0f1e3d]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {data.name}
              </h1>
              <p
                className="text-xl sm:text-2xl font-normal text-[#1E6FD9] mt-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {data.title}
              </p>
              <p className="text-sm text-muted-foreground tracking-wide">
                {data.subtitle}
              </p>
            </motion.div>

            {/* About excerpt — with left accent border */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-sm leading-relaxed text-foreground/75 border-l-[3px] border-[#1E6FD9] pl-4 max-w-xl"
            >
              {data.heroAbout}
            </motion.p>

            {/* CTA row */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0f1e3d] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
              >
                <Mail className="h-4 w-4" />
                {language === 'fr' ? 'Me contacter' : 'Contact me'}
              </a>
              <a
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E6FD9] px-5 py-2.5 text-sm font-medium text-[#1E6FD9] transition-colors hover:bg-[#1E6FD9] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={language === 'fr' ? '/CV-Laure-Denivelle-FR.pdf' : '/CV-Laure-Denivelle-EN.pdf'}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                {language === 'fr' ? 'Télécharger CV' : 'Download CV'}
              </a>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              {...fadeUp(0.32)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              {allStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card px-4 py-3.5 transition-shadow hover:shadow-sm"
                  style={i === 0 ? { borderTop: '3px solid #1E6FD9' } : {}}
                >
                  <p
                    className="text-2xl font-bold text-[#1A3A6B] leading-none"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column : photo + certifs ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5 lg:items-end"
          >
            {/* Photo frame */}
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-2 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, #1E6FD930 0%, #4ECFB320 100%)',
                }}
              />
              <div className="relative h-72 w-56 overflow-hidden rounded-xl border-2 border-white shadow-lg sm:h-80 sm:w-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laure-dLBMJhsdtDsQTyZO3XtlawPdMikE1h.jpg"
                  alt={data.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating contact card */}
              <div className="absolute -bottom-4 -left-6 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-md">
                <p className="text-[11px] font-medium text-[#0f1e3d]">{data.phone}</p>
                <p className="text-[11px] text-muted-foreground">{data.email}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 flex w-full max-w-[256px] flex-col gap-2.5">
              {data.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5"
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                    style={{ background: i === 0 ? '#1E6FD9' : '#0f1e3d' }}
                  >
                    <BadgeCheck className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium leading-tight text-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-[10px] leading-tight text-muted-foreground">
                      {cert.name.replace(/certification\s*/i, '').slice(0, 38)}…
                    </p>
                  </div>
                </div>
              ))}

              {/* Languages mini-badges */}
              <div className="mt-1 flex gap-2">
                {data.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                  >
                    {lang.language} · {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}