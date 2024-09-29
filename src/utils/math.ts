export const multiply = (a: number, b: number) => {
  const factor = 1000000;
  return (Math.round(a * factor) * Math.round(b * factor)) / (factor * factor);
};

export const add = (a: number, b: number) => {
  const factor = 1000000;
  return (Math.round(a * factor) + Math.round(b * factor)) / factor;
};
