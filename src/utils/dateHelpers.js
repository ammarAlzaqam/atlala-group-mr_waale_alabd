export const getNumOfDays = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const getMonthName = (monthNumber) => {
  return new Date(2026, monthNumber - 1).toLocaleString("ar-EG", {
    month: "long",
  });
};
