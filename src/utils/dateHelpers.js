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

export const getStayDuration = (arriveDate, leaveDate) => {
  const arrive = new Date(arriveDate);
  const leave = new Date(leaveDate);

  return Math.ceil((leave - arrive) / (1000 * 60 * 60 * 24));
};

export const isAllowedDate = (date) => {
  return validList.some(({ from, to }) => {
    const fromDate = new Date(date.getFullYear(), from.m - 1, from.d);

    const toDate = new Date(date.getFullYear(), to.m - 1, to.d);

    return date >= fromDate && date <= toDate;
  });
};
