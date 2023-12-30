"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import RsvpModal from "./rsvp-modal";
import { useIntlDictionary } from "@/hooks/lang-dict";

export default function Rsvp() {
  const [, intlDictionary] = useIntlDictionary();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex w-full h-full justify-center">
      <button
        className="flex flex-row gap-2 w-full max-w-96 items-center justify-center rounded-xl px-3 py-1.5 border border-transparent hover:border-sage-600 font-medium transition-all"
        onClick={() => setModalOpen(true)}
      >
        {intlDictionary?.rsvp}
      </button>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="rsvpmodal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <RsvpModal setModalOpen={setModalOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
