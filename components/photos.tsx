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
            {intlDictionary?.photosTitle}
          </div>
          <div className="w-full flex-1 border-b border-sage-600" />
        </div>
        <div>{intlDictionary?.photosText1}</div>
        <div>{intlDictionary?.photosText2}</div>

        <div>
          {intlDictionary?.photosText3}{" "}
          <a
            href="https://cloud.rolandkajatin.com/s/waWsPc5RQeptCGS"
            target="_blank"
            rel="noreferrer"
            className="text-apricot-700 hover:underline"
          >
            {intlDictionary?.photosLink}
          </a>
          .
        </div>

        <img
          src="/qr-wedding-upload.svg"
          className="w-52 self-center border border-sage-600 rounded-xl"
        />
      </div>
    </div>
  );
}
