import { shallow } from 'zustand/shallow';

import { ClockHandType } from 'constants/types';

import useClockStore from 'stores/clock';

const CLOCK_DEGREE = 360;
const HOUR_DEGREE = CLOCK_DEGREE / 12;
const MINUTE_AND_SECOND_DEGREE = CLOCK_DEGREE / 60;
const MINUTE_AND_SECOND = 60;

/**
 * 각 시계침의 타입에 따른 각도를 계산하여 반환해주는 커스텀 훅
 * @param ClockHandType
 * @returns number
 */
function useMoveClockHand({ type }: { type: ClockHandType }): number {
  const { time } = useClockStore(
    state => ({
      time: state.time,
    }),
    shallow,
  );

  return getClockHandDegree({ type, time });
}

function getClockHandDegree({
  type,
  time,
}: {
  type: ClockHandType;
  time: Date;
}): number {
  switch (type) {
    case 'second':
      return time.getSeconds() * MINUTE_AND_SECOND_DEGREE;
    case 'minute':
      return (
        time.getMinutes() * MINUTE_AND_SECOND_DEGREE +
        getClockHandDegree({ type: 'second', time }) / MINUTE_AND_SECOND
      );
    case 'hour':
      return (
        (time.getHours() % 12) * HOUR_DEGREE +
        getClockHandDegree({ type: 'minute', time }) / MINUTE_AND_SECOND +
        getClockHandDegree({ type: 'second', time }) /
          (MINUTE_AND_SECOND * MINUTE_AND_SECOND)
      );
  }
}

export default useMoveClockHand;
