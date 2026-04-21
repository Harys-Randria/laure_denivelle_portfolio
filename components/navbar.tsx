'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageToggle } from './language-toggle';
import { useLanguage } from '@/lib/language-context';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Menu, 
  X,
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Détection de la section active
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: language === 'fr' ? 'Accueil' : 'Home', icon: Home, href: '#hero' },
    { id: 'about', label: language === 'fr' ? 'À propos' : 'About', icon: User, href: '#about' },
    { id: 'skills', label: language === 'fr' ? 'Compétences' : 'Skills', icon: Code, href: '#skills' },
    { id: 'experience', label: language === 'fr' ? 'Expérience' : 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'education', label: language === 'fr' ? 'Formation' : 'Education', icon: GraduationCap, href: '#education' },
    { id: 'contact', label: language === 'fr' ? 'Contact' : 'Contact', icon: MessageCircle, href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/laure-denivelle-33890544/',
      label: 'LinkedIn',
      external: true 
    },
    { 
      icon: '/malt.png', 
      href: 'https://www.malt.fr/profile/lauredenivelle?overview',
      label: 'Malt',
      external: true,
      isImage: true 
    },
    { 
      icon: '/collective.png', 
      href: 'https://app.collective.work/collective/laure-denivelle-vbh/profile?tab=1',
      label: 'Collective',
      external: true,
      isImage: true 
    },
  ];

  const contactLinks = [
    { icon: Mail, href: 'mailto:ldecision@outlook.com', label: 'Email' },
    { icon: Phone, href: 'tel:+33666510038', label: 'Phone' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-[#1E6FD9]/20' 
            : 'bg-background/80 backdrop-blur-sm border-b border-border'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="#hero" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E6FD9] to-[#4ECFB3] rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E6FD9] to-[#1A3A6B] flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white text-sm">LD</span>
                  </div>
                </div>
                <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-[#0f1e3d] to-[#1E6FD9] bg-clip-text text-transparent">
                  Laure Denivelle
                </span>
              </Link>
            </motion.div>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative px-3 py-2"
                >
                  <span className={`text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-[#1E6FD9]' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E6FD9] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Actions Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* Contact rapide */}
              <div className="flex items-center gap-1 mr-2">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className="p-2 rounded-lg text-muted-foreground hover:text-[#1E6FD9] hover:bg-[#1E6FD9]/10 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Séparateur */}
              <div className="h-4 w-px bg-border" />

              {/* Réseaux sociaux */}
              <div className="flex items-center gap-1">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-2 rounded-lg text-muted-foreground hover:text-[#1E6FD9] hover:bg-[#1E6FD9]/10 transition-all"
                    aria-label={link.label}
                  >
                    {link.isImage ? (
                      <Image 
                        src={link.icon as string} 
                        alt={link.label} 
                        width={16} 
                        height={16}
                        className="w-4 h-4"
                      />
                    ) : (
                      <link.icon className="w-4 h-4" />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Séparateur */}
              <div className="h-4 w-px bg-border" />

              {/* Language Toggle */}
              <LanguageToggle />
            </div>

            {/* Bouton Menu Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[#1E6FD9]/10 transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#1E6FD9]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#1E6FD9]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-md border-b border-[#1E6FD9]/20 shadow-xl">
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
                {/* Navigation */}
                <div className="space-y-1 mb-6">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.indexOf(item) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-[#1E6FD9] to-[#1A3A6B] text-white shadow-lg'
                            : 'hover:bg-[#1E6FD9]/10 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {activeSection === item.id && (
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Séparateur */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

                {/* Contact Mobile */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E6FD9] px-4 mb-2">
                    {language === 'fr' ? 'Contact rapide' : 'Quick contact'}
                  </p>
                  {contactLinks.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1E6FD9]/10 text-muted-foreground hover:text-foreground transition-all"
                    >
                      <link.icon className="w-5 h-5 text-[#1E6FD9]" />
                      <span className="text-sm">{link.href.replace('mailto:', '').replace('tel:', '')}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Réseaux sociaux Mobile */}
                <div className="px-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E6FD9] mb-3">
                    {language === 'fr' ? 'Réseaux' : 'Networks'}
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="p-3 rounded-xl bg-[#1E6FD9]/10 text-[#1E6FD9] hover:bg-[#1E6FD9] hover:text-white transition-all"
                        aria-label={link.label}
                      >
                        {link.isImage ? (
                          <Image 
                            src={link.icon as string} 
                            alt={link.label} 
                            width={20} 
                            height={20}
                            className="w-5 h-5"
                          />
                        ) : (
                          <link.icon className="w-5 h-5" />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay pour le menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}