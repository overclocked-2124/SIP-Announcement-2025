

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
  goLive?: string; // ISO timestamp (with timezone offset) after which to show
};

type NotificationItem = {
  message: string;
  timestamp: string; // display string
  link?: string;
  goLive?: string; // ISO timestamp (with timezone offset) after which to show
};

const announcements: Announcement[] = [
  {
    title: "Highlights of Team building activities",
    date: "3 Sept 2025",
    driveShare: "https://drive.google.com/file/d/167R_m0qVdNLPmVMHMHOq5qZIQh8g-o6P/view?usp=drivesdk",
    type: "video",
    isHighlighted: true,
  },
  {
    title: "Student Induction Programme Schedule",
    date: "26 Aug 2025",
    driveShare: "https://drive.google.com/file/d/1eNDGeVce48Oox_tf2iP4HerWmwn_LbDO/view?usp=sharing",
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
  video: <Youtube className="w-8 h-8 text-primary" />,
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
          <Link href="/sip-report" className="hover:text-primary transition-colors">SIP Report</Link>
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
            <Link href="/sip-report" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>SIP Report</Link>
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
            {announcement.type === 'sports' ? 'Apply' : (announcement.type === 'video' ? 'View Video' : (isHighlighted ? 'Submit Feedback' : 'View Details'))}
            <ArrowRight className={`ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 ${isHighlighted ? 'text-blue-500' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

const notifications: NotificationItem[] = [
{
    message: "Press on this to access timetable and section list for C and P cycle students updated as of 15 Sept 2025.",
    timestamp: "15 Sept 2025",
    link: "https://drive.google.com/drive/folders/1dncMKlqPBAVWpk2fZMVNgtBoFQrYU3cm",
  },
{
    message: "Dear Students, as per the timetable, there will be no classes scheduled on Saturday, 13th September 2025",
    timestamp: "12 Sept 2025",
  },
 {
    message: "The guidelines for SIP Report Submission will be shared with you within a week. In the meantime, kindly continue your preparations as per the format already provided.",
    timestamp: "11 Sept 2025",
  },
  
  {
    message: "Please find the photographs from the Student Induction Program at the link below. You may use these images while preparing the SIP report.",
    timestamp: "9 Sept 2025",
    link: "https://drive.google.com/drive/folders/1t8lPMUKAzN_YWdC5DDO0ALcLVbkP0aA2",
  },
];

const NotificationsPanel = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000); // refresh every 15s
    return () => clearInterval(id);
  }, []);

  const visible = notifications.filter((n) => {
    if (!n.goLive) return true;
    const go = new Date(n.goLive).getTime();
    return now.getTime() >= go;
  });

  return (
    <aside className="lg:sticky lg:top-20">
      <div className="rounded-xl border border-orange-300 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
          <Bell className="w-4 h-4 text-primary" aria-hidden="true" />
          <h3 className="text-sm font-semibold text-gray-800">Recent Notifications</h3>
        </div>
        <ul className="divide-y divide-gray-100">
          {visible.length === 0 && (
            <li className="px-4 py-4 text-sm text-gray-500">No new notifications</li>
          )}
          {visible.map((n, idx) => (
            <li key={idx} className="px-4 py-3">
              <p className="text-sm text-gray-900 flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" strokeWidth={1.6} aria-hidden="true" />
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
};

const Announcements = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000); // refresh every 15s
    return () => clearInterval(id);
  }, []);

  const visibleAnnouncements = announcements.filter((announcement) => {
    if (!announcement.goLive) return true;
    const go = new Date(announcement.goLive).getTime();
    return now.getTime() >= go;
  });

  return (
  <section id="announcements" className="py-20 sm:py-32 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Welcome 2025-29 batch of students</h2>
        <p className="text-lg text-gray-600 mt-2">Student Induction Programme 2025</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.title} announcement={announcement} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-1">
          <NotificationsPanel />
        </div>
      </div>
    </div>
  </section>
  );
};

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
      <div className="md:hidden">{/* mobile placement: notifications just below navbar */}
        <NotificationsPanel />
      </div>
      <HeroSection />
      <Announcements />
      <Footer />
    </div>
  )
}


