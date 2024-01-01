"use client";

import { useIntlDictionary } from "@/hooks/lang-dict";

export default function Photos() {
  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full text-justify">
      <div className="flex flex-col gap-4 w-full max-w-screen-md">
        <div className="w-full flex flex-row gap-4 items-center">
          <div className="w-full flex-1 border-b border-sage-600" />
          <div className="text-2xl text-center">
            {intlDictionary?.contactTitle}
          </div>
          <div className="w-full flex-1 border-b border-sage-600" />
        </div>

        <div>{intlDictionary?.contactText1}</div>

        <div>
          {intlDictionary?.contactText2}
          <a
            href="mailto:roland.kajatin@gmail.com"
            className="underline text-apricot-700"
          >
            roland.kajatin@gmail.com
          </a>
          {intlDictionary?.contactText3}
        </div>
      </div>
    </div>
  );
}
