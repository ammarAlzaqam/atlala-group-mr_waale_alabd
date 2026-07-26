export const handleNumbers = (single, collection, num) => {
  if (num === 1) {
    return single;
  } else if (num > 2 && num < 11) {
    return `${num} ${collection}`;
  } else if (num === 2 || num > 10) {
    return `${num} ${single}`;
  }
};
