function calculate() {
  let month = +document.getElementById("month").value;
  let monthday = "";

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      monthday = 31;
      break;
    case 2:
      monthday = "28 hoặc 29";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      monthday = 30;
      break;
    default:
      monthday = NaN;
  }

  document.getElementById(
    "result"
  ).innerHTML = `Tháng ${month} có ${monthday} ngày`;
}
