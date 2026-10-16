import AuthShell from "@/components/AuthShell";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import { requireSession } from "@/lib/session";

export const metadata = { title: "Update Information" };

export default async function UpdateProfilePage() {
  const { user } = await requireSession("/my-profile/update");
  return (
    <AuthShell title="Update Information" subtitle="Change your display name and photo.">
      <UpdateProfileForm user={{ name: user.name, image: user.image ?? "" }} />
    </AuthShell>
  );
}