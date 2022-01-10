import { sv, sh, tv, th } from "../base";

export const topMove = (scroll: number): number => {
  if (sv()) return -scroll / 2;
  return -scroll / 3;
};

export const topOpacity = (scroll: number): number => {
  if (sv()) return 1 - scroll / 700;
  else if (sh()) return 1 - scroll / 1000;
  if (scroll < 600) return 1 - scroll / 600;
  else return 0;
};

export const blurMove = (scroll: number): number => {
  if (sv()) return 80 + scroll / 8;
  else if (sh()) return 100 + scroll / 3;
  else if (tv() || th()) return 140 + scroll / 3;
  else return 140 + scroll / 4;
};
