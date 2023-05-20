const dateControl = document.querySelector("#calender");
const calculateAge = document.querySelector("button");
const ageInfo = document.querySelector(".age");

const currentDate = new Date();

const year = currentDate.getFullYear();
const month =
  currentDate.getMonth() < 10
    ? "0" + (currentDate.getMonth() + 1)
    : currentDate.getMonth() + 1;
const day = currentDate.getDate();

const todayDate = `${year}-${month}-${day}`;

dateControl.setAttribute("value", todayDate);
dateControl.setAttribute("max", todayDate);

calculateAge.addEventListener("click", () => {
  const userDate = new Date(dateControl.value);
  const ageDiffMilliSecs = Date.now() - userDate;
  const ageDate = new Date(ageDiffMilliSecs);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  const yearDisc = years < 2 ? "Year" : "Years";
  const monthDisc = months < 2 ? "Month" : "Months";
  const daysDisc = days < 2 ? "Day" : "Days";

  ageInfo.textContent = `${years} ${yearDisc}, ${months} ${monthDisc}, ${days} ${daysDisc}`;
  ageInfo.removeAttribute("hidden");
});
