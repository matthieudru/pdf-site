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
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <h1 className="text-2xl font-semibold tracking-tight">Protéger nos enfants</h1>

      {/* PDF viewer */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900">
        <iframe
          src="/document.pdf"
          className="w-full h-[75vh]"
          title="Document preview"
        />
      </div>

      {/* Download button */}
      <DownloadButton />

      {/* Download counter */}
      <p className="text-sm text-gray-500">
        Downloaded <span className="text-gray-300 font-medium">{count}</span>{" "}
        {count === 1 ? "time" : "times"}
      </p>
    </main>
  );
}
