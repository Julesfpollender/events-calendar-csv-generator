module.exports = { isDateLower, isDateBetween, addDays };

function isDateLower(date1, date2) {
  return new Date(date1).getTime() < new Date(date2).getTime();
}

function isDateBetween(date, dateFrom, dateTo) {
  const date1 = new Date(date).getTime();
  return (
    date1 >= new Date(dateFrom).getTime() && date1 <= new Date(dateTo).getTime()
  );
}

function addDays(date, nbDays) {
  var result = new Date(date);
  result.setDate(result.getDate() + nbDays);
  return dateToString(result);
}

function dateToString(date) {
  return date.toISOString().split('T')[0];
}
