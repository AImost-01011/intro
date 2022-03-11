import { sv, sh, tv, th } from "../base";

export const topMove = (scroll: number): number => {
  if (sv()) return -scroll / 2;
  return -scroll / 3;
};

export const blurMove = (scroll: number): number => {
  if (scroll < 0) return 0;
  else if (sv()) return 40 + scroll / 8;
  else if (sh()) return 80 + scroll / 3;
  else if (tv() || th()) return 40 + scroll / 3;
  else return 140 + scroll / 4;
};
