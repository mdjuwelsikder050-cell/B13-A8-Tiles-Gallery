import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grout-bg flex min-h-[70vh] items-center justify-center px-4 text-center">
      <div className="animate__animated animate__fadeInUp">
        <p className="font-display text-8xl font-bold text-primary sm:text-9xl">404</p>
        <h1 className="mt-2 text-3xl font-bold">This tile has come loose</h1>
        <p className="mx-auto mt-3 max-w-md opacity-75">The page you’re looking for doesn’t exist or has been moved.</p>
        <Link href="/" className="btn btn-primary mt-6">Back to Home</Link>
      </div>
    </section>
  );
}
