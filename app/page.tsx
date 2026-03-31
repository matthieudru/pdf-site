const PDF_URL = "https://protegernosenfants.fr/document.pdf";
const GOOGLE_VIEWER = `https://docs.google.com/viewer?url=${encodeURIComponent(PDF_URL)}&embedded=true`;

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Desktop : iframe direct, rapide et fiable */}
      <iframe
        src="/document.pdf"
        className="hidden md:block w-full h-full border-0"
        title="Document preview"
      />
      {/* Mobile : Google Docs viewer */}
      <iframe
        src={GOOGLE_VIEWER}
        className="block md:hidden w-full h-full border-0"
        title="Document preview"
      />
    </main>
  );
}
