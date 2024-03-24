export function getFormatCurrentTime(time: Date) {
  const amPm = time.getHours() > 11 ? '오후 ' : '오전 ';
  // 12시인 경우에는 값이 0이 되므로 오전 및 오후 모두 12시로 표기되도록 한다.
  const currentHour = (time.getHours() % 12 || 12) + '시 ';
  const currentMinute = time.getMinutes() + '분';

  return amPm.concat(currentHour, currentMinute);
}
