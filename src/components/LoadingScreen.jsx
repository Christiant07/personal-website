"use client";

import { useEffect, useState } from "react";

// Branded intro shown once per browser session; skipped for reduced motion.
export default function LoadingScreen() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const seen = sessionStorage.getItem("cto-intro-seen");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = Boolean(seen) || reduced;

    if (!skip) {
      sessionStorage.setItem("cto-intro-seen", "1");
    }

    const leave = setTimeout(() => setPhase("leaving"), skip ? 0 : 1200);
    const gone = setTimeout(() => setPhase("gone"), skip ? 0 : 1850);
    return () => {
      clearTimeout(leave);
      clearTimeout(gone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`loader${phase === "leaving" ? " loaderLeaving" : ""}`} aria-hidden="true">
      <div className="loaderMark">
        <span className="loaderInitials">CTO</span>
        <span className="loaderRule" />
        <span className="loaderName">Christian Tomas Ocampo</span>
      </div>
    </div>
  );
}
