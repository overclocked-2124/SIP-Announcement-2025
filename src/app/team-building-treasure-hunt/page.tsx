'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Users, MapPinned, CheckCircle2, Menu, X } from 'lucide-react';

export default function TeamBuildingTreasureHuntPage() {
  const [isOpen, setIsOpen] = useState(false);

  const brochureUrl = '#';
  const socialsUrl = '#';
  // TODO: replace with actual event website URLs
  const teamBuildingUrl = '#';
  const treasureHuntUrl = '#';
  // TODO: replace with actual venue file URLs
  const venueMorningUrl = 'https://drive.google.com/file/d/1VRw-F7hdnJZwNbvxXMUAuaj6a2Rx-OZ8/view?usp=sharing'; // 9am-11am
  const venueMiddayUrl = 'https://drive.google.com/file/d/1OSIyJ-cpQgJNVijJnU5ophI0oMHnwtfp/view?usp=drive_link';  // 11:30am-1:30pm

  const instructions = [
    'Open the file named "9am-to-11am" and search for your respective names and report to venue.',
    'Open the file named "11:30am-to-1pm" and search for your respective names and report to venue.',
    'After lunch, proceed to department skill labs.'
  ];

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
            <Link href="/team-building-treasure-hunt" className="hover:text-primary transition-colors">Team Building + Treasure Hunt</Link>
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
              <Link href="/team-building-treasure-hunt" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Team Building + Treasure Hunt</Link>
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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Team Building Activities + Treasure Hunt</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">All instructions and links for Team Building Activities and the Treasure Hunt are consolidated here.</p>
            <p className="mt-2 text-sm text-orange-600 font-bold">Date: 29-08-2025</p>
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
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Instructions</h2>
                </div>

                <ul className="space-y-4">
                  {instructions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections for each activity */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Team Building Activities</h3>
                  </div>
                  <p className="text-gray-700">Refer to the instructions above for timings and venues.</p>
                  {teamBuildingUrl === '#' ? (
                    <button
                      type="button"
                      aria-disabled
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold shadow-sm cursor-not-allowed bg-gray-200 text-gray-500"
                    >
                      Coming soon
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <a
                      href={teamBuildingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-lg"
                    >
                      Open Team Building Site
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </div>

                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPinned className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Treasure Hunt</h3>
                  </div>
                  <p className="text-gray-700">Refer to the instructions above for timings and venues.</p>
                  {treasureHuntUrl === '#' ? (
                    <button
                      type="button"
                      aria-disabled
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold shadow-sm cursor-not-allowed bg-gray-200 text-gray-500"
                    >
                      Coming soon
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <a
                      href={treasureHuntUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-lg"
                    >
                      Open Treasure Hunt Site
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </div>
              </div>

              {/* Queries / Contact card */}
              <div className="mt-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">For any queries, reach out to:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>
                    <span className="font-semibold">Dean Student Affairs, Dr B M Sagar</span>
                    <span className="mx-2">•</span>
                    <a href="tel:+919886332226" className="text-primary hover:underline">+91 98863 32226</a>
                  </li>
                  <li>
                    <span className="font-semibold">Student Coordinator, Sumukha Upadhyaya</span>
                    <span className="mx-2">•</span>
                    <a href="tel:+919844029396" className="text-primary hover:underline">+91 98440 29396</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Venue Links card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Venue Links</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={venueMorningUrl}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-lg"
                  >
                    Download Venue (9am–11am)
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href={venueMiddayUrl}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-lg"
                  >
                    Download Venue (11:30am–1:30pm)
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
