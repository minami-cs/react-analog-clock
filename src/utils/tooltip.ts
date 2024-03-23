export function getFormatCurrentTime(time: Date) {
  const amPm = time.getHours() > 11 ? '오후 ' : '오전 ';
  const currentHour = (time.getHours() % 12) + '시 ';
  const currentMinute = time.getMinutes() + '분';

  return amPm.concat(currentHour, currentMinute);
}
