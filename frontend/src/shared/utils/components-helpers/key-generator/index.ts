export const keyGenerator = (param: string): string => {
  const now = Date.now();
  const randomPart = (Math.random() * 10 + 1).toString().substring(2, 9);
  return `${param}-${randomPart}-${now}`;
};
