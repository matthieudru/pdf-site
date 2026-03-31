export default function Home() {
  return (
    <main className="h-screen">
      <iframe
        src="/document.pdf"
        className="w-full h-full"
        title="Document preview"
      />
    </main>
  );
}
