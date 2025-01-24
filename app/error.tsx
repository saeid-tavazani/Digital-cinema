'use client'; // Error boundaries must be Client Components

export default function Error({ error }: { error?: string }) {
  return (
    <div className="container">
      <h2>Something went wrong!</h2>
      {error && <p className="text-secondary">{error}</p>}
    </div>
  );
}
