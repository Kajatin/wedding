"use client";

// import Image from "next/image";

import { Parisienne } from "next/font/google";

import Rsvp from "@/components/rsvp";
import SvgWreath from "./svg/wreath";
import { useIntlDictionary } from "@/hooks/lang-dict";

const font = Parisienne({ weight: "400", subsets: ["latin"] });

export default function Welcome() {
  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-apricot-700/10">
      {/* <Image
        priority
        src="/name-banner.png"
        // className="grayscale brightness-200 mb-10"
        className="mb-2 p-4"
        alt="Welcome"
        width={1000}
        height={1080}
      /> */}

      <SvgWreath className="hidden sm:block transform scale-y-[1.45] text-sage-600/60 rotate-[80deg]" />

      <div
        className={
          font.className +
          " flex flex-col lg:flex-row gap-0 lg:gap-10 text-7xl sm:text-9xl text-sage-600 text-center w-full items-center justify-center mt-28 sm:mt-0"
        }
      >
        {intlDictionary?.welcomeNames.split(" ").map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>

      <div className="flex flex-col gap-8 w-full items-center p-4 mt-20">
        <div className="opacity-60 text-center text-lg">
          {intlDictionary?.welcomeInvitation}
        </div>

        <Rsvp />
      </div>

      <div className="flex flex-col items-center text-sm opacity-40 gap-0 mt-12 sm:mt-20">
        <div className="text-center -mb-1">
          {intlDictionary?.welcomeScrollForMore}
        </div>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </div>
  );
}
