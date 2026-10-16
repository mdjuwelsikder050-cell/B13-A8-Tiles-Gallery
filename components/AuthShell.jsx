export default function AuthShell({ title, subtitle, children }) {
  return (
    <section className="grout-bg flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="animate__animated animate__fadeInUp w-full max-w-md rounded-box border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">
        <h1 className="text-center text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-1 text-center text-sm opacity-70">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
