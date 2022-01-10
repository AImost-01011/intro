import { sv, sh, tv, th } from "../base";

export const topNavMove = (scroll: number): number => {
  if (sv()) {
    if (scroll < 300) return -60;
    else if (scroll < 500) return (3 / 10) * scroll - 150;
    else return 0;
  } else if (sh()) {
    if (scroll < 200) return -50;
    else if (scroll < 400) return (1 / 4) * scroll - 100;
    else return 0;
  } else if (tv() || th()) {
    if (scroll < 200) return -80;
    else if (scroll < 700) return (4 / 25) * scroll - 112;
    else return 0;
  }

  if (scroll < 600) return -80;
  else if (scroll < 900) return (4 / 15) * scroll - 240;
  else return 0;
};

export const topNavOpacity = (scroll: number): number => {
  if (sv()) return scroll < 500 ? scroll / 500 : 1;
  else if (sh()) return scroll < 400 ? scroll / 400 : 1;
  else if (tv()) return scroll < 700 ? scroll / 700 : 1;

  return scroll < 1200 ? scroll / 1200 : 1;
};
