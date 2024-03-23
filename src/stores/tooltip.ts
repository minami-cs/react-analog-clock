import { create } from 'zustand';

interface TooltipState {
  x: number | undefined;
  y: number | undefined;
  setX: (x: number | undefined) => void;
  setY: (y: number | undefined) => void;
}

const useTooltipStore = create<TooltipState>(set => ({
  x: undefined,
  y: undefined,
  setX: (x: number | undefined) => set({ x: x }),
  setY: (y: number | undefined) => set({ y: y }),
}));

export default useTooltipStore;
