"use client";

import { useEffect, useRef, useState } from "react";

import { createEvent, EventAttributes } from "ics";
import { motion } from "framer-motion";

import { useIntlDictionary } from "@/hooks/lang-dict";

export default function RsvpModal(props: {
  setModalOpen: (open: boolean) => void;
}) {
  const { setModalOpen } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const [, intlDictionary] = useIntlDictionary();

  const [names, setNames] = useState<string[]>([""]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialWishes, setSpecialWishes] = useState("");
  const [canCome, setCanCome] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submittingFailed, setSubmittingFailed] = useState(false);
  const [submittingSuccess, setSubmittingSuccess] = useState(false);
  const [calendarDownloading, setCalendarDownloading] = useState(false);
  const [calendarDownloaded, setCalendarDownloaded] = useState(false);

  const reset = () => {
    setNames([]);
    setEmail("");
    setSpecialWishes("");
    setCanCome(true);
    setSubmitting(false);
    setSubmittingFailed(false);
    setSubmittingSuccess(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      reset();
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-sage-200/20 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="flex flex-col bg-[#fffcf7] border border-sage-600 p-6 rounded-xl w-full max-w-[32rem] overflow-y-auto h-full max-h-[80vh]"
      >
        <button
          onClick={() => {
            reset();
            setModalOpen(false);
          }}
          className="self-end"
        >
          <span className="material-symbols-outlined text-sage-600">close</span>
        </button>

        {submittingSuccess ? (
          <>
            {canCome ? (
              <motion.div className="flex flex-col gap-4">
                <div className="flex flex-row gap-1 items-center font-medium text-xl animate-bounce">
                  <div>{intlDictionary?.yay}</div>
                  <span className="material-symbols-outlined text-sage-600">
                    celebration
                  </span>
                </div>

                <div>{intlDictionary?.rsvpSuccess}</div>

                <div className="border-t border-sage-600 opacity-60" />

                <div>{intlDictionary?.calendarNote}</div>

                <button
                  className="flex flex-row gap-2 w-full items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
                  onClick={async () => {
                    setCalendarDownloading(true);

                    const details = {
                      title: intlDictionary?.calendarTitle,
                      description: intlDictionary?.calendarDescription,
                      location:
                        "Nap-völgy Borászat és Élménybirtok (47°53'21.7\"N 20°21'39.5\"E)",
                      start: [2024, 9, 13, 16, 0],
                      end: [2024, 9, 14, 3, 0],
                      url: "https://wedding.rolandkajatin.com",
                      status: "CONFIRMED",
                      categories: ["wedding"],
                    } as EventAttributes;

                    const filename = "wedding.ics";
                    const file = (await new Promise((resolve, reject) => {
                      createEvent(details, (error, value) => {
                        if (error) {
                          reject(error);
                        }

                        resolve(
                          new File([value], filename, {
                            type: "text/calendar",
                          })
                        );
                      });
                    })) as Blob;
                    const url = URL.createObjectURL(file);

                    // trying to assign the file URL to a window could cause
                    // cross-site issues so this is a workaround using HTML5
                    const anchor = document.createElement("a");
                    anchor.href = url;
                    anchor.download = filename;

                    document.body.appendChild(anchor);
                    anchor.click();
                    document.body.removeChild(anchor);

                    URL.revokeObjectURL(url);

                    setCalendarDownloading(false);
                    setCalendarDownloaded(true);

                    setTimeout(() => {
                      reset();
                      setModalOpen(false);
                    }, 3000);
                  }}
                >
                  {calendarDownloading ? (
                    <span className="material-symbols-outlined animate-spin text-sage-600">
                      loop
                    </span>
                  ) : calendarDownloaded ? (
                    <span className="material-symbols-outlined text-sage-600">
                      check
                    </span>
                  ) : (
                    <div>{intlDictionary?.calendarButton}</div>
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div className="flex flex-col gap-4">
                <div className="flex flex-row gap-1 items-center font-medium text-xl">
                  <div>{intlDictionary?.rsvpFail}</div>
                </div>

                <div>{intlDictionary?.rsvpFailText}</div>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div className="flex flex-col gap-4">
            <div>{intlDictionary?.rsvpFormIntro}</div>

            <div className="flex flex-col w-full">
              <div>
                {names.length > 1
                  ? intlDictionary?.rsvpNames
                  : intlDictionary?.rsvpName}
              </div>

              <div className="flex flex-col gap-2">
                {names.map((name, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={intlDictionary?.rsvpName}
                    disabled={submitting}
                    className="w-full px-3 py-1.5 mt-1 rounded-xl outline-none appearance-none bg-sage-600/40 caret-sage-600 border border-transparent focus:border-sage-600"
                    value={name}
                    onChange={(e) => {
                      const newNames = [...names];
                      newNames[i] = e.target.value;
                      setNames(newNames);
                    }}
                  />
                ))}
              </div>

              <button
                className="flex flex-row gap-2 mt-2 w-full items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
                onClick={() => setNames([...names, ""])}
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            <div className="flex flex-col w-full">
              <div>{intlDictionary?.rsvpEmail}</div>
              <input
                type="email"
                placeholder={intlDictionary?.rsvpEmail}
                disabled={submitting}
                className="w-full px-3 py-1.5 mt-1 rounded-xl outline-none appearance-none bg-sage-600/40 caret-sage-600 border border-transparent focus:border-sage-600"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </div>

            <div className="flex flex-col w-full">
              <div>{intlDictionary?.rsvpPhone}</div>
              <input
                type="tel"
                placeholder={intlDictionary?.rsvpPhone}
                disabled={submitting}
                className="w-full px-3 py-1.5 mt-1 rounded-xl outline-none appearance-none bg-sage-600/40 caret-sage-600 border border-transparent focus:border-sage-600"
                value={phone}
                onChange={(e) => setPhone(e.target.value.trim())}
              />
            </div>

            <div className="flex flex-col w-full">
              <div>{intlDictionary?.rsvpSpecial}</div>
              <div className="text-sm opacity-60">
                {intlDictionary?.rsvpSpecialExplanation}
              </div>
              <textarea
                placeholder={"Special wishes"}
                disabled={submitting}
                rows={4}
                className="w-full px-3 py-1.5 mt-1 rounded-xl outline-none appearance-none bg-sage-600/40 caret-sage-600 border border-transparent focus:border-sage-600"
                value={specialWishes}
                onChange={(e) => setSpecialWishes(e.target.value)}
              />
            </div>

            <div className="flex flex-row rounded-xl border border-sage-600">
              <button
                disabled={submitting}
                className={
                  "px-3 py-1.5 text-sm rounded-s-xl hover:bg-sage-600/40 transition-all flex-1 cursor-pointer " +
                  (canCome ? "bg-sage-600/40" : "")
                }
                onClick={() => setCanCome(true)}
              >
                {intlDictionary?.rsvpYes}
              </button>

              <button
                disabled={submitting}
                className={
                  "px-3 py-1.5 text-sm rounded-e-xl hover:bg-sage-600/40 transition-all flex-1 cursor-pointer " +
                  (!canCome ? "bg-sage-600/40" : "")
                }
                onClick={() => setCanCome(false)}
              >
                {intlDictionary?.rsvpNo}
              </button>
            </div>

            {submittingFailed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
                className="text-sm text-apricot-700 text-wrap"
              >
                {intlDictionary?.rsvpError}{" "}
                <a href="mailto:roland.kajatin@gmail.com" className="underline">
                  roland.kajatin@gmail.com
                </a>
                .
              </motion.div>
            )}

            <button
              className="flex flex-row gap-2 w-full items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
              disabled={submitting}
              onClick={async () => {
                setSubmitting(true);

                const res = await fetch("/api/rsvp", {
                  method: "POST",
                  body: JSON.stringify({
                    names: names.filter((name) => name.trim().length > 0),
                    email,
                    phone,
                    specialWishes,
                    canCome,
                  }),
                });

                setSubmitting(false);

                if (!res.ok) {
                  setSubmittingFailed(true);
                  return;
                }

                setSubmittingSuccess(true);
              }}
            >
              {submitting ? (
                <span className="material-symbols-outlined animate-spin text-sage-600">
                  loop
                </span>
              ) : (
                <div>{intlDictionary?.rsvp}</div>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
