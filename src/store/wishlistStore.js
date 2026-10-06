import { create } from "zustand";

export const useWishlistStore = create(() => ({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
}));
