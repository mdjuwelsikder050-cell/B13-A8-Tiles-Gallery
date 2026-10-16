"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  async function handleLogout() {
    await authClient.signOut();
    toast.success("Logged out");
    router.push("/");
    router.refresh();
  }

  const navLinks = links.map((l) => (
    <li key={l.href}>
      <Link href={l.href} className={isActive(l.href) ? "font-semibold text-primary" : ""}>
        {l.label}
      </Link>
    </li>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="navbar mx-auto max-w-7xl px-4">
        {/* Left: logo */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-square" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2 px-1 text-xl font-bold font-display">
            <Logo />
            <span>Tilehouse</span>
          </Link>
        </div>

        {/* Centre: links */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">{navLinks}</ul>
        </nav>

        {/* Right: auth */}
        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-dots loading-sm" />
          ) : user ? (
            <>
              <Link href="/my-profile" className="flex items-center gap-2" title={user.name}>
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                    {user.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={user.image} alt={user.name} referrerPolicy="no-referrer" />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center bg-secondary text-secondary-content">
                        {user.name?.[0]?.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
                <span className="hidden max-w-28 truncate text-sm font-medium xl:inline">{user.name}</span>
              </Link>
              <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
