import { redirect } from "next/navigation";

import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import Login from "./login";

export default async function SignIn({ searchParams }: { searchParams: any }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(`${searchParams?.callbackUrl || "/"}`);
  }

  const providers = await getProviders();

  return (
    <div className="absolute inset-0">
      <Login providers={providers} />
    </div>
  );
}
