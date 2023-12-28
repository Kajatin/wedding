"use client";

import Link from "next/link";

import LanguagePicker from "@/components/lang-picker";
import { useIntlDictionary } from "@/hooks/lang-dict";

export default function ErrorView(props: { error: string }) {
  const { error } = props;

  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-10 items-center justify-center p-4 h-full w-full">
      <div className="flex flex-1" />

      <div className="flex flex-col items-center">
        <div className="text-3xl">{intlDictionary?.wedding}</div>
        <div className="text-xl opacity-60">Rebeka & Roland</div>
      </div>

      <div className="flex flex-col items-center w-full max-w-96 gap-6">
        {error && (
          <div className="text-sm text-apricot-700 text-wrap">
            {intlDictionary?.errorLogin}
          </div>
        )}

        <Link
          href="/"
          className="flex flex-row w-full items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
        >
          <button>Try again</button>
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
