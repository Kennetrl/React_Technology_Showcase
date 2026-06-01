import { create } from "zustand";

interface CounterState {
  message: string;
}

export const useCounterStore = create<CounterState>(() => ({
  message: "Hello, World",
}));