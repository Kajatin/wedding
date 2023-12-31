"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useIntlDictionary } from "@/hooks/lang-dict";

interface AccomodationItem {
  img: string;
  name: string;
  info: string;
  url: string;
}

export default function Accomodation() {
  const [, intlDictionary] = useIntlDictionary();

  const [accomodations, setAccomodations] = useState<AccomodationItem[]>([]);

  useEffect(() => {
    if (!intlDictionary) return;

    setAccomodations([
      {
        img: "/villa-terrasse.png",
        name: "Villa Terrasse",
        info: intlDictionary?.accomodationVilla,
        url: "https://www.booking.com/hotel/hu/villa-terrasse.en-gb.html",
      },
      {
        img: "/boutique-hotel.jpg",
        name: "1552 Boutique Hotel",
        info: intlDictionary?.accomodation1552,
        url: "https://1552hotel.hu",
      },
      {
        img: "/terrace-apartments.jpg",
        name: "Terrace Apartments",
        info: intlDictionary?.accomodationTerrace,
        url: "https://www.terraceapartments.hu",
      },
      {
        img: "/hotel-eger.jpg",
        name: "Hotel Eger & Park",
        info: intlDictionary?.accomodationEger,
        url: "https://www.hunguesthotels.hu/hu/hotel/eger/hotel_eger_park/hotel_eger_park/",
      },
    ]);
  }, [intlDictionary]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex flex-col gap-4 w-full max-w-screen-md">
        <div className="w-full flex flex-row gap-4 items-center">
          <div className="w-full flex-1 border-b border-sage-600" />
          <div className="text-2xl text-center">
            {intlDictionary?.accomodationTitle}
          </div>
          <div className="w-full flex-1 border-b border-sage-600" />
        </div>

        <div>{intlDictionary?.accomodationText}</div>

        <div>{intlDictionary?.accomodationRecommendation}</div>

        <div>{intlDictionary?.accomodationThanks}</div>

        <div className="flex flex-row flex-wrap justify-evenly gap-4">
          {accomodations.map((accomodation) => (
            <div
              key={accomodation.name}
              className="flex flex-col gap-2 pb-4 items-center rounded-xl border border-sage-600 overflow-hidden max-w-80"
            >
              <div className="w-full h-36 overflow-hidden">
                <Image
                  src={accomodation.img}
                  alt={accomodation.name}
                  width={320}
                  height={20}
                  className="object-cover"
                />
              </div>
              <div className="font-medium px-4 text-lg">
                {accomodation.name}
              </div>
              <div className="text-sm opacity-60 px-4 text-center">
                {accomodation.info}
              </div>
              <a
                href={accomodation.url}
                target="_blank"
                rel="noreferrer"
                className="text-apricot-700 hover:underline"
              >
                {intlDictionary?.accomodationBook}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
