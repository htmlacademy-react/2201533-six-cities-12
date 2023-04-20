export const getRandomInt = (start: number, end: number): number => {
  const max = Math.floor(Math.max(start, end));
  const min = Math.ceil(Math.min(start, end));
  if (min < 0) {
    return NaN;
  }
  return Math.floor((max - min + 1) * Math.random() + min);
};
