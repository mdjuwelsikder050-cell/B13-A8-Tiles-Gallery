export default function Logo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" fill="#b4472b" />
      <rect x="17" y="1" width="14" height="14" fill="#1d4e5f" />
      <rect x="1" y="17" width="14" height="14" fill="#d9a441" />
      <rect x="17" y="17" width="14" height="14" fill="#2b2118" />
      <circle cx="8" cy="8" r="4" fill="#fbf6ee" />
    </svg>
  );
}
