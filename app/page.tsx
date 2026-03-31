"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isMobile || isSafari) {
      window.location.href = "/Outil_parents_protection_enfants_2026_versiondef.pdf";
    }
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden">
      <iframe
        src="/Outil_parents_protection_enfants_2026_versiondef.pdf"
        className="w-full h-full border-0"
        title="Document preview"
      />
    </main>
  );
}
