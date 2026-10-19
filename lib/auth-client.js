"use client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Same-origin by default; override only if the API lives elsewhere.
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  // Same secret as the server; used to verify JWTs.
});

export const { signIn, signOut, getSession } = createAuthClient()

  

