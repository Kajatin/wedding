"use client";

import Link from "next/link";

import LanguagePicker from "@/components/lang-picker";
import { useIntlDictionary } from "@/hooks/lang-dict";

export default function ErrorView(props: { error: string }) {
  const { error } = props;

  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full w-full max-w-96">
      <div className="flex flex-1" />

      <div className="text-3xl">{intlDictionary?.welcome}</div>

      <div className="w-full opacity-60 text-center">
        {intlDictionary?.enterInvitationCode}
      </div>

      <div className="flex flex-col items-center w-full gap-6">
        {error && (
          <div className="text-sm text-apricot-700 text-wrap">
            {intlDictionary?.errorLogin}
          </div>
        )}

        <Link
          href="/"
          className="flex flex-row w-full items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
        >
          <button>{intlDictionary?.tryAgain}</button>
        </Link>
      </div>

      <div className="flex flex-1">
        <div className="self-end">
          <LanguagePicker />
        </div>
      </div>
    </div>
  );
}
