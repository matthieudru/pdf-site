const PDF_URL = "https://protegernosenfants.fr/document.pdf";
const PDFJS_VIEWER = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(PDF_URL)}`;

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <iframe
        src={PDFJS_VIEWER}
        className="w-full h-full border-0"
        title="Document preview"
      />
    </main>
  );
}
