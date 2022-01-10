export const sv = () => {
  if (process.browser) return window.matchMedia(`(max-width: 480px)`).matches;
  else return true;
};
export const sh = () => {
  if (process.browser) return window.matchMedia(`(max-width: 896px)`).matches;
  else return true;
};
export const tv = () => {
  if (process.browser) return window.matchMedia(`(max-width: 1024px)`).matches;
  else return true;
};
export const th = () => {
  if (process.browser) return window.matchMedia(`(max-width: 1920px)`).matches;
  else return true;
};
