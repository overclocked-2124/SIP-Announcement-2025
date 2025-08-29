'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Book, Users, Building, Star, ArrowRight, Menu, X, Youtube, Bell, Trophy } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import DisclaimerModal from '@/components/DisclaimerModal';

type Announcement = {
  title: string;
  date: string;
  driveShare: string;
  type: string;
  isHighlighted?: boolean;
};

type NotificationItem = {
  message: string;
  timestamp: string; // display string
  link?: string;
};

const announcements: Announcement[] = [
  {
    title: "Sports Team Selection Trials – Register Now",
    date: "29 Aug 2025",
    driveShare: "https://forms.gle/cT4X9SaRtVUQw5Lm7",
    type: "sports",
    isHighlighted: true,
  },
  {
    title: "Team building activities feedback form",
    date: "28 Aug 2025",
    driveShare: "https://docs.google.com/forms/d/e/1FAIpQLSetm7YZdBoKBndkXqtX8jZDRk0pBJ47Lvo2kxJL5j68t23UiQ/viewform?usp=header",
    type: "clubs",
    isHighlighted: true
  },
  {
    title: "Student Induction Programme Schedule",
    date: "26 Aug 2025",
    driveShare: "https://drive.google.com/file/d/1CSvyvfaCF-IgHO1uAN0cGoqMJxftSBsw/view?usp=drive_link",
    type: "schedule"
  },
  {
    title: "Counselor Details",
    date: "22 Aug 2025",
    driveShare: "https://drive.google.com/file/d/1bCdyhgxVHRz7ZXdmSe37NzcWo2MEnmCl/view?usp=sharing",
    type: "counselors"
  },
  {
    title: "Key Executives & Councellors",
    date: "22 Aug 2025",
    driveShare: "https://drive.google.com/file/d/1dGkgwG8B-tIu-EsVpclP7exWNARNH-C6/view?usp=drive_link",
    type: "counselors"
  },
  
  {
    title: "Coding Resources (Bootkit)",
    date: "22 Aug 2025", 
    driveShare: "https://github.com/codingclubrvce/RVCE-Coding-Bootkit",
    type: "bootkit"
  }
  
];

const iconMap: { [key: string]: React.ReactNode } = {
  schedule: <FileText className="w-8 h-8 text-primary" />,
  poster: <FileText className="w-8 h-8 text-primary" />,
  circulars: <FileText className="w-8 h-8 text-primary" />,
  bootkit: <Book className="w-8 h-8 text-primary" />,
  counselors: <Users className="w-8 h-8 text-primary" />,
  venues: <Building className="w-8 h-8 text-primary" />,
  clubs: <Star className="w-8 h-8 text-primary" />,
  livestream: <Youtube className="w-8 h-8 text-primary" />,
  sports: <Trophy className="w-8 h-8 text-primary" />,
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          <Link href="#" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#announcements" className="hover:text-primary transition-colors">Announcements</Link>
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
            <Link href="#" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#announcements" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Announcements</Link>
          </nav>
        </div>
      )}
    </header>
  );
};



const AnnouncementCard = ({ announcement }: { announcement: typeof announcements[0] }) => {
  const isHighlighted = announcement.isHighlighted || false;
  
  return (
    <div className={`relative rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isHighlighted ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 ring-2 ring-blue-100' : 'bg-white border-gray-100'}`}>
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
          NEW
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          {iconMap[announcement.type]}
          <span className={`text-sm font-medium ${isHighlighted ? 'text-blue-600' : 'text-gray-500'}`}>
            {announcement.date}
          </span>
        </div>
        <h3 className={`text-lg font-semibold mb-3 ${isHighlighted ? 'text-blue-800' : 'text-gray-800'}`}>
          {announcement.title}
        </h3>
        <div className="mt-auto">
          <a
            href={announcement.driveShare}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-medium group ${isHighlighted ? 'text-blue-600 hover:text-blue-800' : 'text-primary'}`}
          >
            {announcement.type === 'sports' ? 'Apply' : (isHighlighted ? 'Submit Feedback' : 'View Details')}
            <ArrowRight className={`ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 ${isHighlighted ? 'text-blue-500' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

const notifications: NotificationItem[] = [
  {
    message:
      'Report tomorrow (30-08-2025) by 8:50 AM and proceed to usual SIP Day 1 venues.',
    timestamp: '29 Aug 2025, 5:00 PM',
  },
  {
    message: 'Team building activities feedback form is active.',
    timestamp: '29 Aug 2025, 4:00 PM',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSetm7YZdBoKBndkXqtX8jZDRk0pBJ47Lvo2kxJL5j68t23UiQ/viewform?usp=header',
  },
];

const NotificationsPanel = () => (
  <aside className="lg:sticky lg:top-20">
    <div className="rounded-xl border border-orange-300 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
        <Bell className="w-4 h-4 text-primary" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
      </div>
      <ul className="divide-y divide-gray-100">
        {notifications.length === 0 && (
          <li className="px-4 py-4 text-sm text-gray-500">No new notifications</li>
        )}
        {notifications.map((n, idx) => (
          <li key={idx} className="px-4 py-3">
            <p className="text-sm text-gray-900">
              {n.link ? (
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary/30 underline-offset-2 hover:text-primary"
                >
                  {n.message}
                </a>
              ) : (
                n.message
              )}
            </p>
            <p className="mt-1 text-xs text-gray-500">{n.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

const Announcements = () => (
  <section id="announcements" className="py-20 sm:py-32 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Welcome 2025-29 batch of students</h2>
        <p className="text-lg text-gray-600 mt-2">Student Induction Programme 2025</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.title} announcement={announcement} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <NotificationsPanel />
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
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
);

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const disclaimerShown = sessionStorage.getItem('disclaimerShown');
    if (!disclaimerShown) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleDisclaimerClose = () => {
    sessionStorage.setItem('disclaimerShown', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {showDisclaimer && <DisclaimerModal onClose={handleDisclaimerClose} />}
      <Header />
      <HeroSection />
      <Announcements />
      <Footer />
    </div>
  )
}