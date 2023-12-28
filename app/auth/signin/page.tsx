import { redirect } from "next/navigation";

import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";

import Login from "./login";
import { authOptions } from "@/helpers/auth-options";

export default async function SignIn({ searchParams }: { searchParams: any }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(`${searchParams?.callbackUrl || "/"}`);
  }

  const providers = await getProviders();
  console.log("providers", providers);

  return (
    <div className="absolute inset-0">
      <Login providers={providers} />
    </div>
  );
}
