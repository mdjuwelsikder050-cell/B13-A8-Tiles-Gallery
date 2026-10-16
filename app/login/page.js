import { Suspense } from "react";
import AuthShell from "@/components/AuthShell";
import LoginForm from "@/components/LoginForm";

export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <AuthShell title="User Login" subtitle="Welcome back — sign in to explore tile details.">
      <Suspense fallback={<span className="loading loading-spinner" />}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
