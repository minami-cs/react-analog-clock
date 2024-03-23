import { create } from 'zustand';

interface ClockState {
  time: Date;
  setTime: (time: Date) => void;
}

const useClockStore = create<ClockState>(set => ({
  time: new Date(),
  setTime: (time: Date) => set({ time }),
}));

export default useClockStore;
