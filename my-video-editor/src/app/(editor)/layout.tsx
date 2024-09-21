import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import { SessionProvider } from "next-auth/react";

export default async function Layout() {
  const session = await auth();
  if (!session?.user?.email) {
    return redirect("/home");
  }

  return (
    <SessionProvider>
      <div>Am i in this page?</div>
    </SessionProvider>
  );
}
