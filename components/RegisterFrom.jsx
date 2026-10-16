"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import GoogleButton from "./GoogleButton";

function validatePassword(p) {
  if (p.length < 6) return "Password must be at least 6 characters.";
  if (!/[A-Z]/.test(p)) return "Password needs at least one uppercase letter.";
  if (!/[a-z]/.test(p)) return "Password needs at least one lowercase letter.";
  return "";
}

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const f = new FormData(e.currentTarget);
    const pwError = validatePassword(f.get("password"));
    if (pwError) { setError(pwError); toast.error(pwError); return; }

    setLoading(true);
    const { error } = await authClient.signUp.email({
      name: f.get("name"),
      email: f.get("email"),
      password: f.get("password"),
      image: f.get("image") || undefined,
    });
    setLoading(false);
    if (error) {
      const msg = error.message || "Could not create your account";
      setError(msg);
      toast.error(msg);
      return;
    }
    toast.success("Account created! Please log in.");
    router.push("/login");
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Name</span>
          <input name="name" required placeholder="Your full name" autoComplete="name" className="input w-full" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="input w-full" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Photo URL</span>
          <input name="image" type="url" placeholder="https://…/photo.jpg" className="input w-full" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Password</span>
          <input name="password" type="password" required autoComplete="new-password" placeholder="Min 6 chars, upper & lower case" className="input w-full" />
        </label>
        {error && <div role="alert" className="alert alert-error alert-soft text-sm">{error}</div>}
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading && <span className="loading loading-spinner loading-sm" />} Register
        </button>
      </form>

      <div className="divider text-xs">OR</div>
      <GoogleButton callbackURL="/" />

      <p className="mt-6 text-center text-sm">
        Already have an account? <Link href="/login" className="link link-primary font-semibold">Login</Link>
      </p>
    </>
  );
}
