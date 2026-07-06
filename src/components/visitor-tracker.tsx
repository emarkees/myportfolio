"use client";

import { useEffect, useRef } from "react";

export function VisitorTracker() {
  const hasFired = useRef(false);

  useEffect(() => {
    // Guard against StrictMode double-fire
    if (hasFired.current) return;
    hasFired.current = true;

    // Don't track in development
    if (process.env.NODE_ENV === "development") return;

    const trackVisit = async () => {
      try {
        await fetch("/api/track-visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer || "Direct",
          }),
        });
      } catch {
        // Silently fail — visitor tracking should never break the site
      }
    };

    // Small delay to not block initial page render
    const timer = setTimeout(trackVisit, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Renders nothing — invisible tracker
  return null;
}
