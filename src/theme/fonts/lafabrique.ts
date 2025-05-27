import localFont from "next/font/local"

export const lafabrique = localFont({
  src: [
    {
      path: "../../../public/lafabrique-heavy-D2uXUoak.ttf",
      style: "normal",
      weight: "900",
    },
  ],
  preload: true,
  variable: "--lafabrique",
})
