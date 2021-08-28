import type { CSSProperties } from "react";

type TypographyVariant =
  | "body"
  | "bodySmall"
  | "button"
  | "title1"
  | "title2"
  | "subtitle"
  | "overline"
  | "navLink";

type TypographyVariantVar = `$${TypographyVariant}`;

const rem = (px: number) => `${px / 16}rem`;

const typographyVariants: {
  [variant in TypographyVariantVar]: CSSProperties;
} = {
  $body: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.5,
    fontSize: rem(18),
    fontWeight: 400,
  },
  $bodySmall: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.2,
    fontSize: rem(14),
    fontWeight: 400,
  },
  $title1: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(100),
    fontWeight: 900,
  },
  $title2: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(48),
    fontWeight: 900,
  },
  $subtitle: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1,
    fontSize: rem(24),
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  $overline: {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1,
    fontSize: rem(14),
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  $button: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(18),
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  $navLink: {
    fontFamily: '"Playfair Display", serif',
    lineHeight: 1,
    fontSize: rem(16),
    fontWeight: 400,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
};

export const typography = () => (value: TypographyVariantVar) => {
  return typographyVariants[value];
};

export const paddingVertical = () => (value: any) => ({
  paddingTop: value,
  paddingBottom: value,
});

export const paddingHorizontal = () => (value: any) => ({
  paddingLeft: value,
  paddingRight: value,
});

export const margingHorizontal = () => (value: any) => ({
  marginLeft: value,
  marginRight: value,
});

export const size = () => (value: any) => ({
  width: value,
  height: value,
});

export const absoluteFill = () => (value: any) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});

export const fixedFill = () => (value: any) => ({
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});

export const flexCenter = () => (value: any) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
