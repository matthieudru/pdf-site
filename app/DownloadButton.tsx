"use client";

import { useState } from "react";

export default function DownloadButton() {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      // Increment the counter server-side, then trigger download
      await fetch("/api/download", { method: "POST" });
    } finally {
      setLoading(false);
      // Trigger the browser download
      const link = document.createElement("a");
      link.href = "/document.pdf";
      link.download = "Proteger_nos_enfants_2026.pdf";
      link.click();
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="px-6 py-3 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Preparing…" : "Download PDF"}
    </button>
  );
}
