import { ClockHandType } from './types';

// 시계판
export const CLOCK_RADIUS: number = 100;
export const CLOCK_NUMBERS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const CLOCK_BORDER: number = 4;

// 시곗바늘
export const CLOCK_HAND_TYPE_LIST: { id: string; type: ClockHandType }[] = [
  { id: 'clock_hand_hour', type: 'hour' },
  { id: 'clock_hand_minute', type: 'minute' },
  { id: 'clock_hand_second', type: 'second' },
];
export const CLOCK_HAND_STYLE = {
  hour: { width: 6, height: 60, color: '#ff7306' },
  minute: { width: 6, height: 80, color: '#ff7306' },
  second: { width: 2, height: 80, color: '#8c8c8b' },
};
