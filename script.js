document.addEventListener("DOMContentLoaded", function getDayAndTime() {
  const dayOfWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const utcTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  function getDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayIndex = currentDate.getUTCDay();
    return daysOfWeek[dayIndex];
  }

  function getUTCTimeInMilliseconds() {
    const now = new Date();
    const utcString = now.toISOString().split("T")[1].substring(0, 8);
    return utcString;
  }

  dayOfWeekElement.textContent = `${getDayOfWeek()}`;
  utcTimeElement.textContent = `${getUTCTimeInMilliseconds()}`;

  setInterval(getDayAndTime, 1);
});
