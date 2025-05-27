import localFont from "next/font/local"

export const sectra = localFont({
  src: [
    {
      path: "../../../public/GT-Sectra-Fine-Book-glsPuVIz.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../../public/GT-Sectra-Fine-Book-Italic-LeLodRdGz.ttf",
      style: "italic",
      weight: "300",
    },
  ],
  preload: true,
  variable: "--sectra",
})
