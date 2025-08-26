'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Menu, X } from 'lucide-react';

export default function ClubShowcaseInstructionsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const brochureUrl = 'https://drive.google.com/file/d/17yD6W8r8Nj7lZfYwbuSHn2z56WLu-TFu/view?usp=drive_link';
  const socialsUrl = '#'; // TODO: Replace with clubs social handles link

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header (mirrors home page styling) */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/80">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/RVCE Corner Logo BLACK-2 line.png"
              alt="RVCE Corner Logo"
              width={180}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/#announcements" className="hover:text-primary transition-colors">Announcements</Link>
            <Link href="/club-showcase-day-instructions" className="hover:text-primary transition-colors">Club Showcase Day</Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary transition-colors p-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <nav className="flex flex-col items-center gap-4 text-gray-600 font-medium py-4">
              <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/#announcements" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Announcements</Link>
              <Link href="/club-showcase-day-instructions" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Club Showcase Day</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto px-4 pt-12 pb-8 sm:pt-16 sm:pb-12">
          <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="mt-6 sm:mt-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Club Showcasing Day Instructions</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">Please read these instructions carefully before attending the Club Showcasing Day. Follow the guidelines to ensure a smooth and engaging experience.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instructions card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Instructions</h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      Be on campus by <strong>8:50 AM</strong> and <strong>report to your usual SIP venues</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      <strong>Orientation</strong> will be <strong>livestreamed from IEM Hall</strong> from <strong>9:00 AM – 10:45 AM</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      <strong>Event bookings</strong> open from <strong>10:45 AM – 11:00 AM</strong>. You can <strong>book only once</strong> — choose carefully.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      Once booked, <strong>tickets are generated</strong>. Show these <strong>tickets at the club venues</strong> so they can be <strong>scanned</strong> and your <strong>attendance</strong> recorded.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      Attending <strong>4 events is mandatory</strong> and <strong>attendance will be taken seriously</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      Each event is limited to <strong>70 people</strong> — strictly <strong>first-come, first-served</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      You are <strong>strongly advised</strong> to go through the <strong>complete brochure</strong> and the <strong>social media handles</strong> of all clubs to decide which events to attend.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-lg"
                  >
                    View Club Showcasing Day Brochure
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>

                  <a
                    href={socialsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-lg"
                  >
                    Clubs Social Handles
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (mirrors home page styling) */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <Image
            src="/CCLogo_BG_Removed.png"
            alt="Coding Club Logo"
            width={180}
            height={50}
            priority
          />
          <div>
            <p className="font-semibold">&copy; 2025 RVCE, Bengaluru. All Rights Reserved.</p>
            <p className="mt-1 text-gray-400">Student Induction Programme (SIP) Announcements</p>
            <p className="mt-1 text-gray-400">Maintained by Coding Club, RVCE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
