import DownloadButton from "./DownloadButton";

async function getDownloadCount(): Promise<number> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/count`,
      { cache: "no-store" }
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.count ?? 0;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const count = await getDownloadCount();

  return (
    <main className="flex flex-col h-screen">
      {/* PDF viewer — prend tout l'espace disponible */}
      <div className="flex-1 min-h-0">
        <iframe
          src="/document.pdf"
          className="w-full h-full"
          title="Document preview"
        />
      </div>

      {/* Barre du bas */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-900 border-t border-gray-800 shrink-0">
        <p className="text-sm text-gray-500">
          Téléchargé <span className="text-gray-300 font-medium">{count}</span>{" "}
          {count === 1 ? "fois" : "fois"}
        </p>
        <DownloadButton />
      </div>
    </main>
  );
}
