"use client";

import { useIntlDictionary } from "@/hooks/lang-dict";
import { setCookie } from "@/helpers/cookie";

export default function LanguagePicker() {
  const [intl] = useIntlDictionary();

  return (
    <div className="flex flex-row rounded-xl border border-sage-600">
      <button
        className={
          "px-3 py-1.5 text-sm rounded-s-xl hover:bg-sage-400/60 transition-all " +
          (intl === "hu" ? "bg-sage-400/60" : "")
        }
        onClick={(e) => {
          setCookie("NEXT_LOCALE", "hu");
          window.location.reload();
        }}
      >
        Magyar
      </button>

      <button
        className={
          "px-3 py-1.5 text-sm rounded-e-xl hover:bg-sage-400/60 transition-all " +
          (intl === "en" ? "bg-sage-400/60" : "")
        }
        onClick={(e) => {
          setCookie("NEXT_LOCALE", "en");
          window.location.reload();
        }}
      >
        English
      </button>
    </div>
  );
}
