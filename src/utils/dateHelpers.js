export const getNumOfDays = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const getMonthName = (monthNumber) => {
  return new Date(2026, monthNumber - 1).toLocaleString("ar-EG", {
    month: "long",
  });
};

export function getTodayString() {
  const today = new Date();

  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(today.getDate()).padStart(2, "0")}`;
}
