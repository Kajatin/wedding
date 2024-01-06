"use client";

import Countdown from "react-countdown";

import { useIntlDictionary } from "@/hooks/lang-dict";

export default function CountdownToWedding() {
  const [, intlDictionary] = useIntlDictionary();

  return (
    <div className="flex flex-col gap-4 items-center mt-12 mb-8">
      <div className="text-sm opacity-60">
        {intlDictionary?.countdownToWedding}
      </div>
      <Countdown
        date={Date.parse("2024-09-13T16:00:00+02:00")}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          // if (completed) {
          //   return <span>It's time!</span>;
          // } else {
          return (
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl sm:text-5xl bg-gradient-to-b from-sage-600 from-20% to-apricot-500 bg-clip-text text-transparent">
                  {days}
                </div>
                <div className="text-sm opacity-60">
                  {intlDictionary?.countdownDays}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl sm:text-5xl bg-gradient-to-b from-sage-600 from-20% to-apricot-500 bg-clip-text text-transparent">
                  {hours}
                </div>
                <div className="text-sm opacity-60">
                  {intlDictionary?.countdownHours}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl sm:text-5xl bg-gradient-to-b from-sage-600 from-20% to-apricot-500 bg-clip-text text-transparent">
                  {minutes}
                </div>
                <div className="text-sm opacity-60">
                  {intlDictionary?.countdownMinutes}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl sm:text-5xl bg-gradient-to-b from-sage-600 from-20% to-apricot-500 bg-clip-text text-transparent">
                  {seconds}
                </div>
                <div className="text-sm opacity-60">
                  {intlDictionary?.countdownSeconds}
                </div>
              </div>
            </div>
          );
          // }
        }}
      />
    </div>
  );
}
