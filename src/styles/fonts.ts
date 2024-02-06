import localFont from "next/font/local";

export const NotoSans = localFont({
  src: [
    {
      path: "./fonts/Noto_Sans/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Noto_Sans/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Noto_Sans/NotoSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Noto_Sans/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const QuickSand = localFont({
  src: "./fonts/Quicksand/static/Quicksand-Regular.ttf",
  display: "swap",
});
