import { sv, sh, tv, th } from "../base";

export const detailTopTop = (scroll: number): number => {
  if (sv()) {
    if (scroll < 900) return -scroll / 2.6;
    else return 10000;
  } else if (sh()) {
    if (scroll < 900) return -scroll / 3;
    else return 10000;
  } else if (tv()) {
    return 0;
  } else return 0;
};

export const detailTopHeight = (scroll: number): number => {
  if (sv()) {
    if (scroll < 900) return scroll * 1.2;
    else return 100000;
  } else if (sh()) {
    if (scroll < 900) return scroll * 1.3;
    else return 100000;
  } else if (tv() || th()) {
    return 0;
  } else return 0;
};

export const detailTopOpacity = (scroll: number): number => {
  if (sv() || sh()) {
    if (scroll < 700) return 1 - scroll / 700;
    else return 0;
  } else return 1;
};
