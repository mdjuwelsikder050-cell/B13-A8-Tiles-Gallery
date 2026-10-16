"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import GoogleButton from "./GoogleButton";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const raw = params.get("callbackUrl");
  // Only allow same-site relative redirects.
  const callbackUrl = raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    setLoading(true);
    const { error } = await authClient.signIn.email({
      email: form.get("email"),
      password: form.get("password"),
    });
    setLoading(false);
    if (error) {
      const msg = error.message || "Invalid email or password";
      setError(msg);
      toast.error(msg);
      return;
    }
    toast.success("Welcome back!");
    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="form-control block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="input w-full" />
        </label>
        <label className="form-control block">
          <span className="mb-1 block text-sm font-medium">Password</span>
          <input name="password" type="password" required autoComplete="current-password" placeholder="••••••••" className="input w-full" />
        </label>
        {error && <div role="alert" className="alert alert-error alert-soft text-sm">{error}</div>}
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading && <span className="loading loading-spinner loading-sm" />} Login
        </button>
      </form>

      <div className="divider text-xs">OR</div>
      <GoogleButton callbackURL={callbackUrl} />

      <p className="mt-6 text-center text-sm">
        New to Tilehouse? <Link href="/register" className="link link-primary font-semibold">Register</Link>
      </p>
    </>
  );
}
