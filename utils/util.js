function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()

  return formatNumber(year) + '年' + formatNumber(month) + '月' + formatNumber(day) + '日' + ' ' + [hour, minute].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getMonth(date) {
  return date.getMonth() + 1;
}

function getDay(date) {
  return formatNumber(date.getDate());
}

module.exports = {
  formatTime: formatTime,
  getMonth: getMonth,
  getDay: getDay
}
