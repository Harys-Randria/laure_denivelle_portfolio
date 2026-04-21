'use client';

import { LanguageProvider } from '@/lib/language-context';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="w-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
