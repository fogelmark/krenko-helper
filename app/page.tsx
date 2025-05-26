"use client";

import { Progress } from "@/components/ui/progress";
import { useRef, useState } from "react";
import Button from "./button";
import CounterHelper from "@/components/counter-helper";

export default function Home() {
  const [goblins, setGoblins] = useState(0);
  const [valueTracker, setValueTracker] = useState(0);
  const [showTracker, setShowTracker] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleActivity = (change: number) => {
    setValueTracker((prev) => prev + change);
    setShowTracker(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowTracker(false);
      setValueTracker(0);
    }, 2000);
  };

  const increment = () => {
    setGoblins(goblins + 1);
    handleActivity(1);
  };

  const decrement = () => {
    setGoblins((prev) => Math.max(0, prev - 1));
    handleActivity(-1);
  };

  const reset = () => {
    setGoblins(0);
  };

  const multiply = () => {
    const newValue = goblins * 2;
    const change = newValue - goblins;
    setGoblins(newValue);
    handleActivity(change);
  };

  return (
    <main className="grid h-screen mx-auto w-full sm:w-[390px] grid-rows-[1fr_min-content_min-content] items-center gap-4 bg-[url(/images/krenko.jpg)] bg-cover p-4">
      <Progress className="self-start" value={Math.min(goblins, 100)} />
      <CounterHelper valueTracker={valueTracker} show={showTracker} />
      <section className="relative w-full self-end rounded-md border-2 border-black bg-[url(/images/army.jpg)] bg-cover py-2 text-center">
        <h1 className="text-[72px] leading-16 text-white text-shadow-[2px_2px_2px_rgb(0_0_0_/_1)]">
          {goblins}
        </h1>
      </section>
      <div className="w-full space-y-4 self-end">
        <div className="flex w-full justify-between gap-4">
          <Button feature={decrement} image="token_3.jpg" className="bg-top">
            kill one
          </Button>
          <Button
            feature={increment}
            image="token_4.jpg"
            className="text-2xl -tracking-wide"
          >
            spawn one
          </Button>
        </div>
        <Button feature={multiply} image="token_2.jpg">
          double them
        </Button>
        <Button feature={reset} image="token_1.jpg">
          reset
        </Button>
      </div>
    </main>
  );
}
