import Image from "next/image";
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

  return (
    <div>
      <div className="absolute inset-0 p-4">
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-row gap-4 w-fit h-full">
            <div className="flex h-full justify-end items-center">
              <Image
                className="hidden sm:block opacity-20 w-fit h-full max-h-80 transform scale-y-125"
                src="/wreath.svg"
                width={280}
                height={560}
                alt=""
                priority
              />
            </div>

            <Login providers={providers} />

            <div className="flex h-full justify-start items-center">
              <Image
                className="hidden sm:block opacity-20 scale-x-[-1] w-fit h-full max-h-80 transform scale-y-125"
                src="/wreath.svg"
                width={280}
                height={560}
                alt=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
