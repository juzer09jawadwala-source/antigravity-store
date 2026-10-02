import { create } from 'zustand';

interface CartState {
  selectedModel: string;
  selectedColor: string;
  storage: string;
  setModel: (model: string) => void;
  setColor: (color: string) => void;
  setStorage: (storage: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  selectedModel: 'iPhone 18 Pro',
  selectedColor: 'Burgundy',
  storage: '256GB',
  
  setModel: (model) => set({ selectedModel: model }),
  setColor: (color) => set({ selectedColor: color }),
  setStorage: (storage) => set({ storage }),
}));
