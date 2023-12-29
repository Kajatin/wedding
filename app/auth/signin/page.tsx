import { redirect } from "next/navigation";

import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";

import Login from "./login";
import SvgWreath from "@/components/svg/wreath";
import { authOptions } from "@/helpers/auth-options";

export default async function SignIn({ searchParams }: { searchParams: any }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(`${searchParams?.callbackUrl || "/"}`);
  }

  const providers = await getProviders();

  return (
    <div className="absolute inset-0 p-4">
      <div className="flex flex-row gap-0 sm:gap-14 w-full h-full justify-center">
        <div className="flex h-full justify-end items-center">
          <SvgWreath className="hidden sm:block transform scale-y-[1.45] text-sage-600/80" />
        </div>

        <Login providers={providers} />

        <div className="flex h-full justify-start items-center">
          <SvgWreath className="hidden sm:block transform scale-y-[1.45] scale-x-[-1] text-sage-600/80" />
        </div>
      </div>
    </div>
  );
}
