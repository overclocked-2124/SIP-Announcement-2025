export const metadata = {
  title: 'SIP Report | RVCE SIP Announcements',
  description: 'Guidelines and sample format for the SIP Report with submission details.'
};

export default function SipReportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/80">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group">
            <img src="/RVCE Corner Logo BLACK-2 line.png" alt="RVCE Corner Logo" width={180} height={50} />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/#announcements" className="hover:text-primary transition-colors">Announcements</a>
            <a href="/sip-report" className="hover:text-primary transition-colors">SIP Report</a>
          </nav>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">SIP Report</h1>
          <p className="mt-2 text-gray-600">Please read the instructions carefully and use the sample format for guidance.</p>

          <section className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800">Instructions</h2>
            <div className="mt-4 space-y-4 text-gray-800">
              <p>Dear Students,</p>
              <p>
                Please find attached the sample SIP report for your reference. Kindly ensure that your report follows the same format in terms of headings and structure. However, you are encouraged to bring in your own innovative ideas and creativity while preparing the content.
              </p>
              <p>
                The five best reports will be awarded with certificates and goodies by the Principal, RV College of Engineering.
                <span role="img" aria-label="sparkles"> 🌟</span>
              </p>

              <div className="mt-6">
                <h3 className="text-base font-semibold text-gray-900">Important Notes</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                  <li>SIP photographs will be shared with you shortly.</li>
                  <li>The last date for submission of the SIP report is <span className="font-medium">11th September</span>.</li>
                  <li>Detailed submission guidelines will be shared soon.</li>
                  <li>Be innovative, original, and make your report stand out!</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1Q3Qv4D3u0rv7AnzreYvqGGwLS-pEcX0O/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-medium hover:bg-primary/90 transition-colors"
              >
                View Sample Report
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5a.75.75 0 0 0 0 1.5h3.69l-6.22 6.22a.75.75 0 1 0 1.06 1.06l6.22-6.22V13.5a.75.75 0 0 0 1.5 0v-8.25A.75.75 0 0 0 19.5 4.5h-6z"/><path d="M5.25 6A2.25 2.25 0 0 0 3 8.25v9A2.25 2.25 0 0 0 5.25 19.5h9a2.25 2.25 0 0 0 2.25-2.25V15a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75H9a.75.75 0 0 0 0-1.5H5.25z"/></svg>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <img src="/CCLogo_BG_Removed.png" alt="Coding Club Logo" width={180} height={50} />
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
