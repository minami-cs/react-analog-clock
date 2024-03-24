import { useEffect, useRef } from 'react';

/**
 * 1초마다 시간을 갱신해주는 커스텀 훅
 * @param delay ms시간
 * @param callback (args?: any) => void 형태의 콜백함수
 * @returns void
 */
function useTimeInterval(delay: number, callback: (args?: any) => void): void {
  const savedCallback = useRef<(args?: any) => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useTimeInterval;
