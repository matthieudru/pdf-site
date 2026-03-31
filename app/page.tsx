"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.innerWidth < 768) {
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
