import { sv, sh, tv, th } from "../base";

export const isNav = (scroll: number): boolean => {
  if (sv() || sh()) return scroll > 500;
  else return scroll > 100;
};
