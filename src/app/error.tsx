'use client';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary text-text-primary">
      <h2 className="text-3xl font-black">Qualcosa è andato storto!</h2>
      <button onClick={reset} className="btn-primary mt-6">
        Riprova
      </button>
    </div>
  );
}