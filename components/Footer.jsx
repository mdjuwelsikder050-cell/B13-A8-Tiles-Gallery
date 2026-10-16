import Link from "next/link";
import Logo from "./Logo";

const socials = [
  { name: "Facebook", href: "https://facebook.com", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" },
  { name: "Instagram", href: "https://instagram.com", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" },
  { name: "X", href: "https://x.com", path: "M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.2L5.9 22H3l7-8L2.5 2h6.1l4.3 5.7L18.2 2zm-1 18h1.6L7.9 3.9H6.2L17.2 20z" },
  { name: "Pinterest", href: "https://pinterest.com", path: "M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.7 2.3l-.3 1.1c0 .2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.300 2.800A10 10 0 1 0 12 2z" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold text-base-100">
            <Logo size={36} /> Tilehouse
          </Link>
          <p className="max-w-sm text-sm opacity-80">
            A gallery of tiles for people who see walls and floors as canvases. Browse, get inspired, and find your perfect aesthetic.
          </p>
          <div className="flex gap-3 pt-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                 className="btn btn-circle btn-sm border-neutral-content/30 bg-transparent text-neutral-content hover:bg-accent hover:text-accent-content">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg text-base-100">Explore</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link className="hover:text-accent" href="/">Home</Link></li>
            <li><Link className="hover:text-accent" href="/all-tiles">All Tiles</Link></li>
            <li><Link className="hover:text-accent" href="/my-profile">My Profile</Link></li>
            <li><Link className="hover:text-accent" href="/login">Login</Link></li>
          </ul>
        </div>

        <div id="contact">
          <h3 className="mb-3 font-display text-lg text-base-100">Contact Us</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a className="hover:text-accent" href="mailto:hello@tilehouse.example">hello@tilehouse.example</a></li>
            <li><a className="hover:text-accent" href="tel:+15550123456">+1 (555) 012-3456</a></li>
            <li>12 Mosaic Lane, Studio 4<br />Portland, OR 97201</li>
            <li>Mon–Fri · 9am – 6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-content/15 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Tilehouse. All rights reserved.
      </div>
    </footer>
  );
}
