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
        "relative w-full rounded-md border-2 border-black bg-cover bg-center px-2 py-4 text-2xl text-white uppercase text-shadow-[1px_1px_rgb(0_0_0_/_1)]",
        className,
      )}
    >
      <span
        className="absolute inset-0 bg-[#00000099] pointer-events-none"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
