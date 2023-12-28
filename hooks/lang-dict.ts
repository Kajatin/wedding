"use client";

import { useEffect, useState } from "react";

import { getCookie } from "@/helpers/cookie";
import { Dictionary, getDictionary } from "@/dictionaries/dictionaries";

export function useIntlDictionary(): [string | undefined, Dictionary | null] {
  const [intl, setIntl] = useState<undefined | string>(undefined);
  const [intlDictionary, setIntlDictionary] = useState<null | Dictionary>(null);

  useEffect(() => {
    const intl = getCookie("NEXT_LOCALE");
    setIntl(intl);

    async function getIntlDictionary() {
      if (!intl) return;
      const dictionary = await getDictionary(intl);
      setIntlDictionary(dictionary);
    }

    getIntlDictionary();
  }, []);

  return [intl, intlDictionary];
}
