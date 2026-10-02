import { create } from 'zustand'

interface ProductState {
  model: string;
  storage: string;
  color: string;
  finalPriceInr: number;
  setProduct: (product: Partial<ProductState>) => void;
}

export const useStore = create<ProductState>((set) => ({
  model: "iPhone 15 Pro Max",
  storage: "256GB",
  color: "Natural Titanium",
  finalPriceInr: 159900,
  setProduct: (newProduct) => set((state) => ({ ...state, ...newProduct })),
}));
