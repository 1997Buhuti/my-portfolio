import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

import { logout } from "./login/actions";

export default function AdminDashboardPage() {
  // Cache Components (PPR): the cookie-gated content reads request data, so it
  // must live inside a Suspense boundary. The static shell can be prerendered
  // while the authenticated dashboard streams in at request time.
  return (
    <main className="min-h-dvh bg-surface px-4 py-16 font-mono text-on-surface">
      <div className="mx-auto w-full max-w-3xl">
        <Suspense fallback={<DashboardFallback />}>
          <AuthenticatedDashboard />
        </Suspense>
      </div>
    </main>
  );
}

async function AuthenticatedDashboard() {
  // Defense in depth: middleware already guards /admin/*, but verify here too
  // so the page never renders for an unauthenticated request.
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!(await verifySessionToken(token))) {
    redirect("/admin/login");
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-hairline pb-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-on-surface">
            Admin dashboard
          </h1>
          <p className="mt-1 text-xs text-on-surface-variant">
            You are signed in.
          </p>
        </div>
        <form action={logout}>
          <Button type="submit" variant="outline" size="sm">
            <LogOut className="size-4" aria-hidden />
            Sign out
          </Button>
        </form>
      </div>

      <div className="mt-8 rounded-2xl border border-hairline bg-surface-container-low/60 p-6">
        <p className="text-sm text-on-surface-variant">
          This is a protected area. Admin tools and content management will
          live here.
        </p>
      </div>
    </>
  );
}

function DashboardFallback() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-between gap-4 border-b border-hairline pb-6">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-40 rounded bg-surface-container-high" />
          <div className="h-3 w-24 rounded bg-surface-container" />
        </div>
      </div>
      <div className="mt-8 h-24 rounded-2xl border border-hairline bg-surface-container-low/60" />
    </div>
  );
}
