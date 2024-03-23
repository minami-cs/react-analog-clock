import { CLOCK_RADIUS, CLOCK_BORDER } from 'constants/clock';

// 원의 넓이 공식을 이용해서 시계 내부에 있는지 여부 판별
export function isMouseInClock(x: number, y: number): boolean {
  return (
    (x - CLOCK_RADIUS) ** 2 + (y - CLOCK_RADIUS) ** 2 <
    (CLOCK_RADIUS - CLOCK_BORDER) ** 2
  );
}
