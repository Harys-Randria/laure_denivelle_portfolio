import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const _dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Laure Denivelle | Senior BI Consultant',
  description: 'Senior BI Consultant & Qlik Expert with 10+ years of experience in business intelligence, project management, and data solutions',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Laure.jpg',
      },
    ],
    apple: '/Laure.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`font-sans antialiased ${_playfair.variable} ${_dmSans.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
