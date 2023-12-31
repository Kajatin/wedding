"use client";

import Image from "next/image";

import Rsvp from "@/components/rsvp";
import { useIntlDictionary } from "@/hooks/lang-dict";

export default function Welcome() {
  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-14 items-center bg-sage-600/40 w-full min-h-screen">
      <div className="mt-40 text-sage-600 text-3xl text-center">
        {intlDictionary?.welcomeTitle}
      </div>
      <Image
        src="/name-banner.png"
        // className="grayscale brightness-200 mb-10"
        className="mb-2 p-4"
        alt="Welcome"
        width={1000}
        height={1080}
      />

      <div className="flex flex-col gap-8 w-full max-w-screen-md items-center p-4">
        <div className="opacity-60 text-center text-lg">
          {intlDictionary?.welcomeInvitation}
        </div>

        <Rsvp />
      </div>

      <div className="flex flex-col items-center text-sm opacity-40 gap-0">
        <div className="text-center -mb-1">
          {intlDictionary?.welcomeScrollForMore}
        </div>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </div>
  );
}
