import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Student Induction Programme 2025 | SIP Announcements',
  description: 'Your central hub for all official announcements and updates for the Student Induction Programme 2025',
  keywords: ['SIP', 'Student Induction Programme', 'College Orientation', 'Freshers', 'Announcements'],
  authors: [{ name: 'SIP Team' }],
  themeColor: '#ED5E4A',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sip-announcements.vercel.app',
    title: 'Student Induction Programme 2025',
    description: 'Your central hub for all official announcements and updates for the Student Induction Programme 2025',
    siteName: 'SIP Announcements',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIP Announcements 2025',
    description: 'Your central hub for all official announcements and updates for the Student Induction Programme 2025',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
