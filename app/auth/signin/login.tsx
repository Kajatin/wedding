"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";

import LanguagePicker from "@/components/lang-picker";
import { useIntlDictionary } from "@/hooks/lang-dict";

export default function Login(props: { providers: any }) {
  const { providers } = props;

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const [invitationCode, setInvitationCode] = useState("");
  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full w-full max-w-96">
      <div className="flex flex-1" />

      <div className="text-3xl">{intlDictionary?.welcome}</div>

      <div className="w-full opacity-60 text-center">
        {intlDictionary?.enterInvitationCode}
      </div>

      <div className="flex flex-col items-start w-full">
        {error && (
          <div className="text-sm text-apricot-700 text-wrap">
            {intlDictionary?.errorLogin}
          </div>
        )}

        <input
          type="text"
          placeholder={intlDictionary?.invitationCodePlaceholder}
          className="w-full px-4 py-2 rounded-xl outline-none appearance-none bg-sage-400/60 caret-sage-600 border border-transparent focus:border-sage-600 text-center mb-4"
          value={invitationCode}
          onChange={(e) => setInvitationCode(e.target.value.toUpperCase())}
        />

        {Object.values(providers).map((provider: any) => (
          <button
            key={provider.name}
            className="flex flex-row gap-2 w-full items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
            onClick={() => signIn(provider.id, { code: invitationCode })}
          >
            {intlDictionary?.loginButton}
          </button>
        ))}
      </div>

      <div className="flex flex-1">
        <div className="self-end">
          <LanguagePicker />
        </div>
      </div>
    </div>
  );
}
