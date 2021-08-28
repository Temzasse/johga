import { createCss } from "@stitches/react";

import {
  absoluteFill,
  fixedFill,
  flexCenter,
  margingHorizontal,
  paddingHorizontal,
  paddingVertical,
  size,
  typography,
} from "./utils";

export const { styled, css, theme, global, getCssString, keyframes } =
  createCss({
    theme: {
      colors: {
        text: "#222",
        white: "#fff",
        primary: "#EDF3E0",
        secondary: "#FFFFE9",
      },
      space: {
        none: "0px",
        xxsmall: "4px",
        xsmall: "8px",
        small: "12px",
        normal: "16px",
        medium: "24px",
        large: "32px",
        xlarge: "56px",
        xxlarge: "72px",
        xxxlarge: "120px",
      },
      sizes: {
        container: "1000px",
      },
      radii: {
        small: "4px",
        normal: "8px",
        medium: "16px",
        large: "24px",
        full: "999px",
      },
    },

    utils: {
      // @ts-ignore
      size,
      // @ts-ignore
      typography,
      // @ts-ignore
      absoluteFill,
      // @ts-ignore
      fixedFill,
      flexCenter,
      paddingVertical,
      paddingHorizontal,
      margingHorizontal,
    },

    media: {
      sm: "@media (max-width: 640px)",
      md: "@media (max-width: 768px)",
      lg: "@media (max-width: 1024px)",
      xl: "@media (min-width: 1025px)",
    },
  });
