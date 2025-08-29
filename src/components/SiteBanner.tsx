"use client";

import { useEffect, useState } from "react";
import { Megaphone } from "lucide-react";

/**
 * Site-wide, non-intrusive banner.
 * - Dismissible (stores in localStorage with a version key)
 * - Sticky to top and below any browser UI
 * - Accessible and keyboard operable
 */

const BANNER_VERSION = "2025-08-30-0850"; // bump to re-show
const STORAGE_KEY = `site_banner_dismissed_${BANNER_VERSION}`;

export default function SiteBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-[60]">
      <div className="w-full bg-amber-100 border-b border-amber-200 text-amber-950">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-amber-700" aria-hidden="true" />
            <p className="text-sm font-medium">
              Important: All students must report to college tomorrow by <span className="font-semibold">8:50 AM</span> and proceed to their usual SIP Day 1 venues.
            </p>
          </div>
          <button
            onClick={() => {
              try {
                window.localStorage.setItem(STORAGE_KEY, "1");
              } catch {}
              setVisible(false);
            }}
            className="text-sm px-3 py-1 rounded-md bg-amber-200 hover:bg-amber-300 text-amber-900 border border-amber-300 transition-colors"
            aria-label="Dismiss important notice"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
