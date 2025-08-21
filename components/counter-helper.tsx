"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface ValueTrackerProps {
  valueTracker: number;
  show: boolean;
}

export default function CounterHelper({
  valueTracker,
  show,
}: ValueTrackerProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.p
          key="tracker"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "text-center text-2xl text-white text-shadow-[1px_1px_rgb(0_0_0_/_0.9)]",
          )}
        >
          {valueTracker}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
