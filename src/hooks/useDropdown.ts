import { create } from "zustand";

type State = {
  isDropdownOpen: boolean;
};

type Action = {
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

export const useDropdown = create<State & Action>((set) => ({
  isDropdownOpen: false,
  closeDropdown: () => set(() => ({ isDropdownOpen: false })),
  toggleDropdown: () =>
    set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
}));
