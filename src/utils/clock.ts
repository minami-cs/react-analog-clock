import { CLOCK_RADIUS, CLOCK_BORDER } from 'constants/clock';

// 원 내부의 점을 판별하는 공식 (x - a)**2 + (y - b)**2 < r**2를 활용
export function isMouseInClock(x: number, y: number): boolean {
  return (
    (x - CLOCK_RADIUS) ** 2 + (y - CLOCK_RADIUS) ** 2 <
    (CLOCK_RADIUS - CLOCK_BORDER) ** 2
  );
}
