import { getNumOfDays } from "./dateHelpers";

const currentDay = new Date().getDate();

const isEmpty = (v) => String(v).trim() === "";

const isNumber = (v) => !isNaN(Number(v));

const isCode = (v) => {
  const value = String(v).trim();

  return value.length === 1 || value === "مد" || isNumber(value);
};

const isNight = (v) => {
  const value = String(v).trim();
  return value === "يوم" || value === "ليلة" || value === "ليله";
};

const isName = (v) => !isEmpty(v) && !isCode(v);

function buildBookings(month, monthNumber, prevMonth, nextMonth) {
  const bookings = {};

  [...month.sm.slice(2), ...month.lg.slice(2)].forEach((row) => {
    const days = row.slice(1);

    //--------------------------
    // validList
    //--------------------------

    const validList = [];

    const now = new Date();

    const currentMonth = now.getMonth() + 1;
    const currentDay = now.getDate();

    const startDay = monthNumber === currentMonth ? currentDay : 1;

    let start = null;

    days.forEach((day, index) => {
      const dayNumber = index + 1;

      if (dayNumber < startDay) return;

      if (isEmpty(day)) {
        if (start === null) start = dayNumber;
      } else {
        if (start !== null) {
          validList.push({
            from: {
              d: start,
              m: monthNumber,
            },
            to: {
              d: dayNumber - 1,
              m: monthNumber,
            },
          });
          start = null;
        }
      }
    });

    if (start !== null) {
      validList.push({
        from: {
          d: start,
          m: monthNumber,
        },
        to: {
          d: days.length,
          m: monthNumber,
        },
      });
    }

    //--------------------------
    // validFromToDay
    //--------------------------

    let validFromToDay = {
      total: 0,
      data: [],
    };

    for (const { from, to } of validList) {
      let start = null;

      // النهارده جوه الفترة
      if (currentDay >= from.d && currentDay <= to.d) {
        start = currentDay;
      }
      // الفترة لسه جاية
      else if (currentDay < from.d) {
        start = from.d;
      }

      if (start !== null) {
        const daysCount = to.d - start + 1;

        validFromToDay.total = daysCount;

        validFromToDay.data.push({
          m: monthNumber,
          nofDays: daysCount,
          from: start,
          to: to.d,
        });

        // لو الفترة واصلة لآخر الشهر كمل على الشهر اللي بعده
        if (
          nextMonth &&
          to.d ===
            getNumOfDays(new Date(new Date().getFullYear(), monthNumber - 1))
        ) {
          const nextBookings = buildBookings(nextMonth, monthNumber + 1);

          const currentChalet = nextBookings[row[0]];

          if (
            currentChalet &&
            currentChalet.validList.length > 0 &&
            currentChalet.validList[0].from.d === 1
          ) {
            const nextRange = currentChalet.validList[0];

            validFromToDay.total += nextRange.to.d;

            validFromToDay.data.push({
              m: monthNumber + 1,
              nofDays: nextRange.to.d,
              from: nextRange.from.d,
              to: nextRange.to.d,
            });
          }
        }

        // أول فترة مناسبة وخلاص
        break;
      }
    }

    // لو مفيش فترة متاحة في الشهر الحالي
    if (nextMonth && validFromToDay.total === 0) {
      const nextBookings = buildBookings(nextMonth, monthNumber + 1);

      const currentChalet = nextBookings[row[0]];

      if (currentChalet && currentChalet.validList.length > 0) {
        const firstRange = currentChalet.validList[0];

        const daysCount = firstRange.to.d - firstRange.from.d + 1;

        validFromToDay.total = daysCount;

        validFromToDay.data.push({
          m: monthNumber + 1,
          nofDays: daysCount,
          from: firstRange.from.d,
          to: firstRange.to.d,
        });
      }
    }

    //--------------------------
    // occupancy
    //--------------------------

    const today = days[currentDay - 1];

    let yesterday;

    if (currentDay === 1 && prevMonth) {
      const prevBookings = buildBookings(prevMonth, monthNumber - 1);
      yesterday = prevBookings[row[0]]?.data?.at(-1);
    } else {
      yesterday = days[currentDay - 2];
    }

    const occupancy =
      isNight(today) ||
      (isName(today) &&
        (currentDay === 1 ||
          isEmpty(yesterday) ||
          isCode(yesterday) ||
          isNight(yesterday)));

    //--------------------------
    // leaving
    //--------------------------

    let tomorrow;

    if (
      currentDay ===
        getNumOfDays(new Date(new Date().getFullYear(), monthNumber - 1)) &&
      nextMonth
    ) {
      const nextBookings = buildBookings(nextMonth, monthNumber + 1);
      tomorrow = nextBookings[row[0]]?.data?.[0];
    } else {
      tomorrow = days[currentDay];
    }
    const leaving =
      isNight(yesterday) ||
      (isName(today) &&
        (tomorrow === undefined ||
          isEmpty(tomorrow) ||
          isCode(tomorrow) ||
          isNight(tomorrow)));

    //--------------------------

    bookings[row[0]] = {
      data: days,
      validFromToDay,
      validList,
      leaving,
      occupancy,
    };
  });

  return bookings;
}

export default buildBookings;
