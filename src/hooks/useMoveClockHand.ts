import { useEffect, useState } from 'react';

type ClockHandType = 'hour' | 'minute' | 'second';

const CLOCK_DEGREE = 360;
const HOUR_DEGREE = CLOCK_DEGREE / 12;
const MINUTE_AND_SECOND_DEGREE = CLOCK_DEGREE / 60;

/**
 * 각 시계침의 타입에 따른 각도를 계산하여 반환해주는 커스텀 훅
 * @param ClockHandType
 * @returns number
 */
function useMoveClockHand({ type }: { type: ClockHandType }): number {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      setTime(date);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const second = time.getSeconds() * MINUTE_AND_SECOND_DEGREE;
  const minute = time.getMinutes() * MINUTE_AND_SECOND_DEGREE + second / 60;
  const hour =
    (time.getHours() % 12) * HOUR_DEGREE + minute / 60 + second / (60 * 60);

  switch (type) {
    case 'hour':
      return hour;
    case 'minute':
      return minute;
    case 'second':
      return second;
  }
}

export default useMoveClockHand;
