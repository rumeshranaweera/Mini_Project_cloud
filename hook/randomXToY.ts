export function randomXToY(minVal: number, maxVal: number) {
  var randVal = minVal + Math.random() * (maxVal - minVal);
  return Math.round(randVal);
}

export const randomBoolean = Math.random() < 0.5;
