import { create } from "zustand";

export const useCartStore = create(() => ({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
}));
