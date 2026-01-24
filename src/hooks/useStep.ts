import { create } from "zustand";

export type stepNumber = 1 | 2 | 3 | 4 | 5 | 6;

type State = {
  step: stepNumber;
  completedSteps: Set<number>;
};

type Action = {
  nextStep: () => void;
  prevStep: () => void;
  isStepCompleted: (step: stepNumber) => void;
  jumpToStep: (step: stepNumber) => void;
};

export const stepRecord = {
  1: "Heading",
  2: "Career Summary",
  3: "Work Experience",
  4: "Skills",
  5: "Education",
  6: "Projects",
};

export const useStep = create<State & Action>((set, get) => ({
  step: 1,
  completedSteps: new Set(),
  nextStep: () => {
    const currentStep = get().step;

    set((state) => ({
      step: Math.min(state.step + 1, 6) as stepNumber,
      completedSteps: state.completedSteps.add(currentStep),
    }));
  },

  prevStep: () =>
    set((state) => ({ step: Math.max(1, state.step - 1) as stepNumber })),

  isStepCompleted: (step) => {
    get().completedSteps.has(step);
  },

  jumpToStep: (step) => {
    const isCompleted = get().completedSteps;

    if (isCompleted.has(step)) {
      set({ step });
    }
  },
}));
