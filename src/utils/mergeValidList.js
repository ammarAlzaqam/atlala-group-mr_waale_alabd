export default function mergeValidList(validList, year) {
  if (!validList.length) return [];

  const result = [];

  let current = structuredClone(validList[0]);

  for (let i = 1; i < validList.length; i++) {
    const next = validList[i];

    const currentEnd = new Date(year, current.to.m - 1, current.to.d);

    const nextStart = new Date(year, next.from.m - 1, next.from.d);

    currentEnd.setDate(currentEnd.getDate() + 1);

    if (+currentEnd === +nextStart) {
      current.to = next.to;
    } else {
      result.push(current);
      current = structuredClone(next);
    }
  }

  result.push(current);

  return result;
}
