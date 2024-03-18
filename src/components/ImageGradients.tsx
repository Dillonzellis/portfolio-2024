"use client";

import Image from "next/image";
import gradientLight from "/public/gradient-light.png";
import gradientLightBtm from "/public/gradient-light-bottom.png";
import gradientDark from "/public/gradient-dark.png";
import gradientDarkBtm from "/public/gradient-dark-bottom.png";
import { useTheme } from "@/context/theme-context";

export const ImageGradients = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <>
          <Image
            src={gradientDark}
            alt=""
            className="absolute top-0 -z-50 opacity-20"
          />
          <Image
            src={gradientDarkBtm}
            alt=""
            className="absolute bottom-0 -z-50 opacity-20"
          />
        </>
      ) : (
        <>
          <Image
            src={gradientLight}
            alt=""
            className="absolute top-0 -z-50 opacity-20"
          />
          <Image
            src={gradientLightBtm}
            alt=""
            className="absolute bottom-0 -z-50 opacity-30"
          />
        </>
      )}
    </>
  );
};
