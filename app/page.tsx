export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Sur desktop : iframe plein écran */}
      <iframe
        src="/document.pdf"
        className="hidden md:block w-full h-full border-0"
        title="Document preview"
      />

      {/* Sur mobile : page centrée avec bouton pour ouvrir le PDF */}
      <div className="flex md:hidden flex-col items-center justify-center h-full gap-6 p-8 text-center bg-gray-950">
        <h1 className="text-xl font-semibold text-white">Protéger nos enfants</h1>
        <p className="text-gray-400 text-sm">Un outil pratique pour prévenir les violences sexuelles faites aux enfants.</p>
        <a
          href="/document.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Ouvrir le document
        </a>
      </div>
    </main>
  );
}
