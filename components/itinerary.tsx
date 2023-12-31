"use client";

import { useEffect, useState } from "react";

import { useIntlDictionary } from "@/hooks/lang-dict";

interface ItineraryItem {
  icon: string;
  time: string;
  description: string;
}

export default function Itinerary() {
  const [, intlDictionary] = useIntlDictionary();

  const [events, setEvents] = useState<ItineraryItem[]>([]);

  useEffect(() => {
    if (!intlDictionary) return;

    setEvents([
      {
        icon: "wine_bar",
        time: intlDictionary?.itineraryArrivalTime || "",
        description: intlDictionary?.itineraryArrivalDescription || "",
      },
      {
        icon: "volunteer_activism",
        time: intlDictionary?.itineraryCeremonyTime || "",
        description: intlDictionary?.itineraryCeremonyDescription || "",
      },
      {
        icon: "restaurant",
        time: intlDictionary?.itineraryDinnerTime || "",
        description: intlDictionary?.itineraryDinnerDescription || "",
      },
      {
        icon: "cake",
        time: intlDictionary?.itineraryCakeTime || "",
        description: intlDictionary?.itineraryCakeDescription || "",
      },
      {
        icon: "cooking",
        time: intlDictionary?.itineraryMidnightTime || "",
        description: intlDictionary?.itineraryMidnightDescription || "",
      },
      {
        icon: "person_celebrate",
        time: intlDictionary?.itineraryDancingTime || "",
        description: intlDictionary?.itineraryDancingDescription || "",
      },
      {
        icon: "waving_hand",
        time: intlDictionary?.itineraryClosingTime || "",
        description: intlDictionary?.itineraryClosingDescription || "",
      },
    ]);
  }, [intlDictionary]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex flex-col gap-4 w-full max-w-screen-md">
        <div className="w-full flex flex-row gap-4 items-center">
          <div className="w-full flex-1 border-b border-sage-600" />
          <div className="text-2xl text-center">
            {intlDictionary?.itineraryTitle}
          </div>
          <div className="w-full flex-1 border-b border-sage-600" />
        </div>

        {/* <div className="w-full text-2xl text-center pb-1 border-b border-sage-600">
          {intlDictionary?.itineraryTitle}
        </div> */}

        <div>{intlDictionary?.itineraryDate}</div>

        <div className="flex flex-col self-center border border-sage-600 rounded-xl p-4 sm:min-w-96">
          {events.map((event, index) => (
            <div
              key={event.time}
              className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0 items-stretch"
            >
              <div className="flex flex-row gap-2 items-center px-3 py-1.5 border border-sage-600 rounded-xl hover:bg-sage-600/40 group transition-all">
                <span className="relative flex">
                  <span className="group-hover:animate-ping absolute inline-flex material-symbols-outlined opacity-75">
                    {event.icon}
                  </span>
                  <span className="relative inline-flex material-symbols-outlined">
                    {event.icon}
                  </span>
                </span>

                <div>{event.time}</div>
              </div>

              <div className="self-center">{event.description}</div>

              {index !== events.length - 1 && (
                <div className="justify-self-center self-center border-r border-sage-600 h-6" />
              )}
              <div />
            </div>
          ))}
        </div>

        <div>{intlDictionary?.itineraryWhatToExpect}</div>
      </div>
    </div>
  );
}
