import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: string;
  image: string;
  className?: string;
  feature?: () => void;
}

export default function Button({
  children,
  image,
  className,
  feature,
}: ButtonProps) {
  return (
    <button
      onClick={feature}
      style={{ backgroundImage: `url(/images/${image})` }}
      className={cn(
        "relative w-full rounded-md border-2 border-black bg-cover bg-center px-2 py-4 text-2xl font-semibold text-white uppercase text-shadow-[1px_1px_rgb(0_0_0_/_1)]",
        "before:absolute before:inset-0 before:rounded-md before:bg-black/30 before:opacity-0 before:transition-opacity before:duration-150 active:before:opacity-100",
        className,
      )}
    >
      {children}
    </button>
  );
}
