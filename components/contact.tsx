'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import { Mail, Phone, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Contact() {
  const { language } = useLanguage();
  const data = cvData[language];

  const calendlyUrl = 'https://calendly.com/ldecision';

  const contactItems = [
    {
      icon: Mail,
      label: language === 'fr' ? 'Email' : 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
    },
    {
      icon: Phone,
      label: language === 'fr' ? 'Téléphone' : 'Phone',
      value: data.phone,
      href: `tel:${data.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Laure Denivelle',
      href: `https://${data.linkedin}`,
      external: true,
    },
  ];

  const socialItems = [
    {
      icon: '/malt.png',
      label: 'Malt',
      href: 'https://www.malt.fr/profile/lauredenivelle?overview',
      external: true,
    },
    {
      icon: '/collective.png',
      label: 'Collective',
      href: 'https://app.collective.work/collective/laure-denivelle-vbh/profile?tab=1',
      external: true,
    },
  ];

  // Animation variants
  const calendlyCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] as const
      } 
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as const
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4 text-primary text-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {language === 'fr' ? 'Me contacter' : 'Get in Touch'}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {language === 'fr'
              ? "N'hésitez pas à me contacter pour discuter de vos projets BI ou de collaboration."
              : 'Feel free to reach out to discuss your BI projects or potential collaborations.'}
          </p>

          {/* ── CALENDLY HERO CARD - IMPACTANT ── */}
          <motion.div
            variants={calendlyCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1e3d] via-[#1A3A6B] to-[#1E6FD9] p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-10px_#1E6FD950] hover:scale-[1.01] border border-white/10">
                
                {/* Effets de fond animés */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#4ECFB3] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Motif de grille subtil */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Badge flottant */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                  <motion.div
                    animate={pulseAnimation}
                    className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 border border-white/20"
                  >
                    <Sparkles className="h-4 w-4 text-[#4ECFB3]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {language === 'fr' ? 'Priorité' : 'Priority'}
                    </span>
                  </motion.div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Icône Calendly */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
                    <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-2xl bg-white shadow-2xl">
                      <Image
                        src="/calendly.png"
                        alt="Calendly"
                        width={80}
                        height={80}
                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Contenu texte */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 mb-4">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ECFB3] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ECFB3]" />
                      </span>
                      <span className="text-xs font-medium text-white/90">
                        {language === 'fr' ? '30 minutes' : '30 minutes'}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                      {language === 'fr' 
                        ? 'Planifions un appel découverte'
                        : 'Let\'s schedule a discovery call'}
                    </h3>

                    <p className="text-white/80 text-sm sm:text-base mb-6 max-w-xl">
                      {language === 'fr'
                        ? 'Choisissez le créneau qui vous convient le mieux. Je vous répondrai avec toute mon expertise BI pour comprendre vos enjeux.'
                        : 'Choose the time slot that works best for you. I\'ll get back to you with my full BI expertise to understand your challenges.'}
                    </p>

                    {/* Avantages */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                      {[
                        { fr: 'Appel 30min', en: '30min call' },
                        { fr: 'Sans engagement', en: 'No obligation' },
                        { fr: 'Réponse rapide', en: 'Quick response' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#4ECFB3]" />
                          <span className="text-xs text-white/70">
                            {language === 'fr' ? item.fr : item.en}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-[#0f1e3d] font-semibold shadow-lg transition-shadow hover:shadow-xl group/btn"
                    >
                      <span className="text-sm sm:text-base">
                        {language === 'fr' ? 'Prendre rendez-vous' : 'Schedule a meeting'}
                      </span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-x-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Barre de progression décorative */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4ECFB3] via-[#1E6FD9] to-[#0f1e3d] transform origin-left transition-transform duration-1000 group-hover:scale-x-100" 
                     style={{ transform: 'scaleX(0.3)' }} 
                />
              </div>
            </a>
          </motion.div>

          {/* ── Contact classique ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="p-6 rounded-xl border border-border bg-card hover:border-[#1E6FD9] hover:shadow-md transition-all flex flex-col items-center text-center gap-3"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 rounded-full bg-[#1E6FD912]">
                    <Icon className="w-6 h-6 text-[#1E6FD9]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-bold text-foreground break-all">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* ── Réseaux supplémentaires (Malt & Collective) ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <span className="text-sm text-muted-foreground">
              {language === 'fr' ? 'Également disponible sur' : 'Also available on'}
            </span>
            <div className="flex gap-3">
              {socialItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 transition-all hover:border-[#1E6FD9] hover:shadow-md hover:bg-background"
                  whileHover={{ y: -3 }}
                  title={item.label}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="font-medium text-foreground">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}