"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setLoading(true);
    const { error } = await authClient.updateUser({
      name: f.get("name"),
      image: f.get("image") || undefined,
    });
    setLoading(false);
    if (error) { toast.error(error.message || "Update failed"); return; }
    toast.success("Profile updated");
    router.push("/my-profile");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Name</span>
        <input name="name" defaultValue={user.name} required className="input w-full" />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Image URL</span>
        <input name="image" type="url" defaultValue={user.image ?? ""} placeholder="https://…/photo.jpg" className="input w-full" />
      </label>
      <button className="btn btn-primary w-full" disabled={loading}>
        {loading && <span className="loading loading-spinner loading-sm" />} Update Information
      </button>
    </form>
  );
}
