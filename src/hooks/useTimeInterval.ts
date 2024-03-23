import { useEffect, useRef } from 'react';
import { shallow } from 'zustand/shallow';

import useClockStore from 'stores/clock';

/**
 * 1초마다 시간을 갱신해주는 커스텀 훅
 * @param delay ms시간
 * @returns void
 */
function useTimeInterval(delay: number): void {
  const savedCallback = useRef<(time: Date) => void>();
  const { setTime } = useClockStore(
    state => ({
      setTime: state.setTime,
    }),
    shallow,
  );

  useEffect(() => {
    savedCallback.current = setTime;
  }, [setTime]);

  useEffect(() => {
    function tick() {
      const date = new Date();

      if (savedCallback && savedCallback.current) {
        savedCallback.current(date);
      }
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useTimeInterval;
