import { create } from "zustand";

type state = {
  num: number;
  increase: (amount: number) => void;
  decrease: (amount: number) => void;
  remove: () => void;
};

const useCounterStore = create<state>((set) => ({
  num: 0,
  increase: (amount: number) => set((state) => ({ num: state.num + amount })),
  decrease: (amount: number) => set((state) => ({ num: state.num - amount })),
  remove: () => set({ num: 0 }),
}));

export default useCounterStore;
