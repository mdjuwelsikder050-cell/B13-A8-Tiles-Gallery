export default function Marquee({ items }) {
  // Content is duplicated so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="marquee border-y border-neutral bg-neutral py-3 text-neutral-content" aria-label="Announcements">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-medium uppercase tracking-widest">
            {t}
            <span className="text-accent" aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
