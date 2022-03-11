import { sv, sh, tv, th } from "../base";

export const isLight = (scroll: number): boolean => {
  if (sv() || sh()) {
    return scroll > 1000;
  } else if (tv() || th()) {
    return scroll > 800;
  } else return true;
};

export const isDark = (scroll: number): boolean => {
  if (sv() || sh()) {
    return scroll > 1800;
  } else if (tv() || th()) {
    return scroll > 800;
  } else return true;
};
