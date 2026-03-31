const PDF_URL = "https://protegernosenfants.fr/document.pdf";
const GOOGLE_VIEWER = `https://docs.google.com/viewer?url=${encodeURIComponent(PDF_URL)}&embedded=true`;

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <iframe
        src={GOOGLE_VIEWER}
        className="w-full h-full border-0"
        title="Document preview"
      />
    </main>
  );
}
