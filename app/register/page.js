import AuthShell from "@/components/AuthShell";
import RegisterForm from "@/components/RegisterForm";

export const metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <AuthShell title="Create Your Account" subtitle="Join the Tilehouse community.">
      <RegisterForm />
    </AuthShell>
  );
}
