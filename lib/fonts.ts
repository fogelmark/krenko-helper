import localFont from "next/font/local";

export const goblinFont = localFont({
  src: [
    {
      path: "../public/fonts/VTCGoblinHandBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/VTCGoblinHand.ttf",
      weight: "400",
      style: "normal",
    }
  ]
})