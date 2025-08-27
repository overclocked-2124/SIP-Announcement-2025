'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Menu, X } from 'lucide-react';

export default function ClubShowcaseInstructionsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const brochureUrl = 'https://drive.google.com/file/d/1CLKElnqbptFEx596ZVIeLU4uEWabT6_s/view?usp=sharing';
  const socialsUrl = 'https://drive.google.com/file/d/18Qghv5FivmSgN-DWjn7TjHqhB5vPQP0q/view?usp=drive_link';

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
            <Link href="/treasure-hunt" className="hover:text-primary transition-colors">Treasure Hunt</Link>
            <Link href="/team-building-activities" className="hover:text-primary transition-colors">Team Building Activities</Link>
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
              <Link href="/treasure-hunt" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Treasure Hunt</Link>
              <Link href="/team-building-activities" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Team Building Activities</Link>
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
            <p className="mt-2 text-sm text-orange-600 font-bold">Date: 28-08-2025</p>
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
                      Each event has <strong>70 booking slots</strong>. Priority goes to the <strong>first 70 students who successfully book</strong>. After 70 confirmed bookings, the event will be <strong>closed</strong> for further bookings. Arriving early at the venue <strong>does not guarantee entry</strong> without a valid booking ticket.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      You are <strong>strongly advised</strong> to go through the <strong>complete brochure</strong> and the <strong>social media handles</strong> of all clubs to decide which events to attend.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      <strong>Recruitment will be conducted separately.</strong> These events are for you to <strong>explore and get a feel</strong> of what each club does. <strong>Booking an event does not restrict</strong> you to joining only those clubs in the future.
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
                  <div className="space-y-1">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-80"
                    >
                      Event Booking Software
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <p className="text-xs text-gray-500 text-center">Link will be added soon</p>
                  </div>
                  <div className="space-y-1">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-80"
                    >
                      Demo Video (Event Booking)
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <p className="text-xs text-gray-500 text-center">Video link will be added soon</p>
                  </div>
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
