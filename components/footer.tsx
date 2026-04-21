'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cvData } from '@/lib/cv-data';
import Link from 'next/link';
import { 
  Mail, 
  Linkedin, 
  ArrowUp, 
  Sparkles,
  MapPin,
  Phone,
  Calendar,
  Briefcase,
  Award,
  Heart
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Footer() {
  const { language } = useLanguage();
  const data = cvData[language];
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#about', label: language === 'fr' ? 'À propos' : 'About' },
    { href: '#skills', label: language === 'fr' ? 'Compétences' : 'Skills' },
    { href: '#experience', label: language === 'fr' ? 'Expérience' : 'Experience' },
    { href: '#contact', label: language === 'fr' ? 'Contact' : 'Contact' },
  ];

  const quickActions = [
    { 
      icon: Calendar, 
      label: language === 'fr' ? 'Prendre RDV' : 'Book a call',
      href: 'https://calendly.com/ldecision',
      external: true,
      highlight: true
    },
    { 
      icon: Mail, 
      label: language === 'fr' ? 'Email' : 'Email',
      href: `mailto:${data.email}`,
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      href: `https://${data.linkedin}`,
      external: true,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-[#1E6FD9]/20">
      {/* Effet de glow en haut */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#1E6FD9] to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1E6FD9]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4ECFB3]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Colonne 1 - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <h3 
                  className="text-2xl font-bold text-[#0f1e3d] mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {data.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ECFB3] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ECFB3]" />
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Disponible pour missions' : 'Available for work'}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === 'fr' 
                  ? 'Experte BI & Data avec 10+ ans d\'expérience. Transformons vos données en décisions stratégiques.'
                  : 'BI & Data expert with 10+ years of experience. Let\'s turn your data into strategic decisions.'}
              </p>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { icon: Award, label: 'Qlik Certified' },
                  { icon: Briefcase, label: '10+ ' + (language === 'fr' ? 'ans' : 'years') },
                  { icon: MapPin, label: language === 'fr' ? 'Paris / Remote' : 'Paris / Remote' },
                ].map((badge, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-1.5 rounded-full bg-[#1E6FD9]/10 px-3 py-1.5 border border-[#1E6FD9]/20"
                  >
                    <badge.icon className="h-3 w-3 text-[#1E6FD9]" />
                    <span className="text-[10px] font-medium text-[#1A3A6B]">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Colonne 2 - Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
                {language === 'fr' ? 'Navigation' : 'Navigation'}
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[#1E6FD9] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="h-px w-0 bg-[#1E6FD9] transition-all group-hover:w-3" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne 3 - Contact rapide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#1E6FD9] shrink-0" />
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-sm text-muted-foreground hover:text-[#1E6FD9] transition-colors break-all"
                  >
                    {data.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#1E6FD9] shrink-0" />
                  <a 
                    href={`tel:${data.phone.replace(/\s/g, '')}`}
                    className="text-sm text-muted-foreground hover:text-[#1E6FD9] transition-colors"
                  >
                    {data.phone}
                  </a>
                </li>
              </ul>

              {/* Réseaux sociaux */}
              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-3">
                  {language === 'fr' ? 'Réseaux professionnels' : 'Professional networks'}
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href={`https://${data.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg bg-[#1E6FD9]/10 text-[#1E6FD9] hover:bg-[#1E6FD9] hover:text-white transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="https://www.malt.fr/profile/lauredenivelle?overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg bg-[#1E6FD9]/10 hover:bg-[#1E6FD9] transition-all"
                  >
                    <Image 
                      src="/malt.png" 
                      alt="Malt" 
                      width={16} 
                      height={16}
                      className="h-4 w-4"
                    />
                  </motion.a>
                  <motion.a
                    href="https://app.collective.work/collective/laure-denivelle-vbh/profile?tab=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg bg-[#1E6FD9]/10 hover:bg-[#1E6FD9] transition-all"
                  >
                    <Image 
                      src="/collective.png" 
                      alt="Collective" 
                      width={16} 
                      height={16}
                      className="h-4 w-4"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Colonne 4 - Actions rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
                {language === 'fr' ? 'Actions' : 'Actions'}
              </h4>
              <div className="space-y-2">
                {quickActions.map((action, i) => (
                  <motion.a
                    key={i}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                      action.highlight
                        ? 'bg-gradient-to-r from-[#1E6FD9] to-[#1A3A6B] text-white hover:shadow-lg hover:shadow-[#1E6FD9]/30'
                        : 'bg-muted/50 hover:bg-[#1E6FD9]/10 text-muted-foreground hover:text-[#1E6FD9]'
                    }`}
                  >
                    <action.icon className={`h-4 w-4 ${action.highlight ? 'text-white' : ''}`} />
                    <span className="text-sm font-medium flex-1">{action.label}</span>
                    {action.highlight && (
                      <Sparkles className="h-3 w-3 text-[#4ECFB3] group-hover:scale-110 transition-transform" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Section copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>© {year} {data.name}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Changé de <p> à <div> */}
            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span>{language === 'fr' ? 'Fait avec' : 'Made with'}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="h-3 w-3 text-[#1E6FD9] fill-[#1E6FD9]" />
              </motion.div>
              <span>{language === 'fr' ? 'et Next.js' : 'and Next.js'}</span>
            </div>
          </div>
        </motion.div>

      {/* Bouton Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-[#1E6FD9] to-[#1A3A6B] text-white shadow-lg hover:shadow-xl hover:shadow-[#1E6FD9]/30 transition-all hover:scale-110 group"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
      </motion.button>
      </div>
    </footer>
  );
}