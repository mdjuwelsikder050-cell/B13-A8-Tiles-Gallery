import Link from "next/link";
import { requireSession } from "@/lib/session";

export const metadata = { title: "My Profile" };

export default async function MyProfilePage() {
  const { user } = await requireSession("/my-profile");
  return (
    <section className="grout-bg px-4 py-12">
      <div className="animate__animated animate__fadeInUp mx-auto max-w-lg overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-xl">
        <div className="h-28 bg-secondary" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgb(255 255 255 / .08) 0 12px, transparent 12px 24px)" }} />
        <div className="-mt-14 flex flex-col items-center px-6 pb-8 text-center">
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-base-100 ring-offset-0 bg-base-200">
              {user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.image} alt={user.name} referrerPolicy="no-referrer" />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-4xl font-bold">{user.name?.[0]?.toUpperCase()}</span>
              )}
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-bold">{user.name}</h1>
          <p className="opacity-70">{user.email}</p>
          <Link href="/my-profile/update" className="btn btn-primary mt-6">Update Information</Link>
        </div>
      </div>
    </section>
  );
}
