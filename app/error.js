"use client";
export default function Error({ reset }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="btn btn-primary">Try again</button>
    </div>
  );
}
