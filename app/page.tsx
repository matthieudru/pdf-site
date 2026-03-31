"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isMobile || isSafari) {
      window.location.href = "/document.pdf";
    }
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden">
      <iframe
        src="/document.pdf"
        className="w-full h-full border-0"
        title="Document preview"
      />
    </main>
  );
}
